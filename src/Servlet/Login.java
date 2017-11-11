package Servlet;

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
@WebServlet(name = "Servlet.Login",urlPatterns = "/Servlet.Login")
public class Login extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("in post!");
        doGet(request,response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//        Writer out = response.getWriter();
//        out.write("Servlet.Login");
        System.out.println("in get!");
        //设置jsp界面编码
        request.setCharacterEncoding("UTF-8");
        //设置登录名和登录密码,每次登录后需要清除原session

        String name_saler = "Saler";
        String password_saler = "123456";

        String name_manager = "manager";
        String password_man = "123456";

        String name_adm = "system";
        String password_adm = "123456";
        String page = "login.jsp";

        response.setContentType("text/html;charset= UTF-8");
        PrintWriter out = response.getWriter();
        String user = request.getParameter("user");
        String pass = request.getParameter("pass");
        System.out.println(user);
        System.out.println(pass);
        if(user == null || pass==null || user.equals("") || pass.equals("")){
            System.out.println("user of password is null!");
            request.setAttribute("loginError","用户名和密码不能为空");
//            request.getRequestDispatcher("login.jsp").forward(request,response);
        }else{
            if(user.equals(name_saler) && pass.equals(password_saler)){
                System.out.println("login in by Saler!");
                request.setAttribute("user",user);
                request.getSession().setAttribute("login","ok");
                request.getSession().setAttribute("saler","ok");
                page = "dir.jsp";
                //request.getRequestDispatcher("index_saler.jsp").forward(request,response);
            }else if(user.equals(name_adm) && pass.equals(password_adm)){
                System.out.println("login in by administrator!");
                request.setAttribute("user",user);
                request.getSession().setAttribute("login","ok");
                request.getSession().setAttribute("admin","ok");
                page = "dir.jsp";
            }else if(user.equals(name_manager) && pass.equals(password_man)){
                System.out.println("login in by manager!");
                request.setAttribute("user",user);
                request.getSession().setAttribute("login","ok");
                request.getSession().setAttribute("manager","ok");
                page = "dir.jsp";
            }else{
                System.out.println("error");
                request.setAttribute("loginError","用户名或密码错误");
                //request.getRequestDispatcher("login.jsp").forward(request,response);
            }
            request.getRequestDispatcher(page).forward(request,response);
        }
    }
}
