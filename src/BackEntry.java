import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.HashMap;

import org.json.simple.JSONObject;
/**
 * Created by zxw on 17-11-19.
 */
@WebServlet(name = "BackEntry",urlPatterns = "/BackEntry")
public class BackEntry extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request,response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/json; charset=utf-8");
        HttpSession session = request.getSession(false);
        JSONObject obj = new JSONObject();
        HashMap<String,String> hp = new HashMap<String,String >();
        if(session == null){
            obj.put("state",false);
        }else{
            obj.put("state",true);
            if((Integer)session.getAttribute("type") == 1){
                hp.put("员工管理","/mana/hard/employee.jsp");
                hp.put("登陆用户管理","/mana/hard/user.jsp");

            }

            hp.put("影厅管理","/mana/easy/studio.jsp");
            hp.put("座位管理","/mana/easy/seat.jsp");
        }
        obj.put("entry",hp);
        response.getWriter().write(obj.toString());
    }

}
