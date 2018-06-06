import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import sss.idao.DAOFactory;
import sss.model.Seat;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Writer;
import java.util.ArrayList;

/**
 * Created by zxw on 17-12-20.
 */
@WebServlet(name = "seat",urlPatterns = "/api/seat")
public class seatServer extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/json;charset = utf-8");
        request.setCharacterEncoding("UTF-8");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String []arr;
        JSONObject json = new JSONObject();
        JSONArray jsonarr;
        JSONArray all = new JSONArray();
        Writer out = response.getWriter();
        ArrayList<String[]> list1 = new ArrayList<String[]>();
        int id = Integer.valueOf(request.getParameter("id"));
        ArrayList<Seat> list = null;
        list = DAOFactory.createSeatDAO().findSeatStateByStudioId(id);
        if (list.size() == 0){
            json.put("status",false);
            out.write(json.toString());
            return;
        }
        for (Seat s:list){
            jsonarr = new JSONArray();
            jsonarr.add(s.getStudio_id());
            jsonarr.add(s.getSeat_id());
            jsonarr.add(s.getSeat_row());
            jsonarr.add(s.getSeat_column());
            jsonarr.add(s.getSeat_status());

            all.add(jsonarr);
        }

        json.put("status",true);
        json.put("object",all);

        out.write(json.toString());
    }


    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Writer out = response.getWriter();
        JSONObject json = new JSONObject();

        Seat seat = new Seat();

        try{
            seat.setSeat_id(Integer.valueOf(request.getParameter("seat_id")));
            seat.setSeat_status(Integer.valueOf(request.getParameter("seat_status")));
        }catch (Exception e){
            e.printStackTrace();
            json.put("state",false);
            out.write(json.toString());
            return;
        }
        if (DAOFactory.createSeatDAO().update(seat)){
            json.put("state",true);
        }else {
            json.put("state",false);
        }
        out.write(json.toString());
    }

}
