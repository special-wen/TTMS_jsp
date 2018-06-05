package sss.dao;

import sss.ConnectionManager;
import sss.idao.ISeat;
import sss.model.Seat;

import java.sql.Connection;
import java.sql.PreparedStatement;

/**
 * Created by zxw on 18-6-4.
 */
public class SeatDAO implements ISeat {
    @Override
    public boolean insert(Seat seat){
        boolean result = false;
        if (seat == null){

            return result;
        }
        System.out.println(seat.getSeat_column());
        System.out.println(seat.getSeat_row());
        System.out.println(seat.getStudio_id());
        System.out.println(seat.getSeat_status());
        //获取Connection
        Connection con = ConnectionManager.getInstance().getConnection();
        PreparedStatement pstmt = null;
        try {
            for (int i = 1;i<=seat.getSeat_row();i++){
                for (int j = 1;j<=seat.getSeat_column();j++){
                    String sql = "insert into seat(studio_id,seat_row,seat_column,seat_status) values (?,?,?,?)";
                    pstmt = con.prepareStatement(sql);
                    pstmt.setInt(1,seat.getStudio_id());
                    pstmt.setInt(2,i);
                    pstmt.setInt(3,j);
                    pstmt.setInt(4,seat.getSeat_status());
                    System.out.println("第 "+i +" 行 "+"第 "+j +" 列 插入成功");
                    pstmt.executeUpdate();
                    result = true;
                }
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        finally {
            //关闭连接
            ConnectionManager.close(null,pstmt,con);
            return result;
        }
    }
}
