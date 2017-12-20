package sss.dao;

import sss.ConnectionManager;
import sss.idao.ISeat;
import sss.model.Seat;
import sss.model.Studio;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by zxw on 17-12-20.
 */
public class SeatDAO implements ISeat {

    @Override
    public boolean update(Seat seat) {
        boolean result = false;
        if(seat == null)
            return false;
        Connection con = ConnectionManager.getInstance().getConnection();
        PreparedStatement pstmt = null;
        try {
            String sql = "update seat set seat_status=? where seat_id=?";
            pstmt = con.prepareStatement(sql);
            pstmt.setInt(1,seat.getSeat_id());
            pstmt.setInt(2,seat.getStudio_id());
            pstmt.setInt(3,seat.getSeat_row());
            pstmt.setInt(4,seat.getSeat_column());
            pstmt.setInt(5,seat.getSeat_status());

            pstmt.executeUpdate();
            result = true;

        } catch (SQLException e) {
            e.printStackTrace();
        }
        finally {
            // 关闭连接
            ConnectionManager.close(null, pstmt, con);
            return result;
        }
    }

    @Override
    public Seat findSeatByStudioId(String studio_id) {

    }
}
