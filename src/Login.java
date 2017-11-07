import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.Writer;

/**
 * Created by zxw on 17-11-7.
 */
@WebServlet(name = "Login",urlPatterns = "/Login")
public class Login extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("in post!");
        doGet(request,response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//        Writer out = response.getWriter();
//        out.write("Login");
        System.out.println("in get!");
        //设置jsp界面编码
        request.setCharacterEncoding("UTF-8");
        //设置登录名和登录密码
        String name = "zxw";
        String password = "loveLyt";

        response.setContentType("text/html;charset= UTF-8");
        PrintWriter out = response.getWriter();
        String user = request.getParameter("user");
        String pass = request.getParameter("pass");
        System.out.println(user);
        System.out.println(pass);
        if(user == null || pass==null || user.equals("") || pass.equals("")){
            System.out.println("user of password is null!");
            request.setAttribute("loginError","用户名和密码不能为空");
            request.getRequestDispatcher("login.jsp").forward(request,response);
        }else{
            if(user.equals(name) && pass.equals(password)){
                System.out.println("login in");
                request.getRequestDispatcher("index.jsp").forward(request,response);
            }else{
                System.out.println("error");
                request.setAttribute("loginError","用户名或密码错误");
                request.getRequestDispatcher("login.jsp").forward(request,response);
            }
        }
    }
}
