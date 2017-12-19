import org.json.simple.JSONObject;
import sss.idao.DAOFactory;
import sss.model.Employee;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Writer;

/**
 * Created by zxw on 17-12-19.
 */
@WebServlet(name = "employeeServer")
public class employeeServer extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/json;charset = utf-8");
        request.setCharacterEncoding("UTF-8");
        Writer out = response.getWriter();
        JSONObject json = new JSONObject();
        Employee emp = new Employee();
        try {
            emp.setEmp_name(request.getParameter("emp_name"));
            emp.setEmp_tel_num(request.getParameter("emp_tel_num"));
            emp.setEmp_addr(request.getParameter("emp_addr"));
            emp.setEmp_email(request.getParameter("emp_email"));
        }catch (Exception e){
            System.out.println("信息获取失败");
            json.put("state",false);
            out.write(json.toString());
            return;
        }
        if(DAOFactory.creatEmployeeDAO().insert(emp)){
            json.put("state",true);
            out.write(json.toString());
        }else {
            System.out.println("插入数据失败");
            json.put("state",false);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
