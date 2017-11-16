package servlet;


import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/Login")
public class Login extends HttpServlet
{
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 一个账号登陆后，另一个账户登录，会访问前一个账户的内容，所以登陆后需要清除原session
        // request.getSession().setAttribute("login", null);
        // request.getSession().setAttribute("a", null);
        // request.getSession().setAttribute("b", null);
        // request.getSession().invalidate();

        String name = request.getParameter("name");
        String pass = request.getParameter("pass");
        String identity = request.getParameter("select");

        String resultNull = "用名或密码不能为空";
        String result = "用户名或密码错误!";
        String page = "login.jsp";


        String nameMan = "lyt";
        String passMan = "lyt";

        String nameSaler = "Lyt";
        String passSaler = "lytlyt";

        String nameAdm = "LYT";
        String passAdm = "lytlytlyt";


        if (name == null || pass == null) {
            request.setAttribute("loginError", resultNull);
        }
        else if (name.equals(nameMan) && pass.equals(passMan) && identity.equals("manager")) {
            request.setAttribute("name", name);
            request.getSession().setAttribute("login", "ok");
            request.getSession().setAttribute("manager", "ok");
            page = "manager.jsp";
        }
        else if (name.equals(nameSaler) && pass.equals(passSaler) && identity.equals("saler")) {
            request.setAttribute("name", name);
            request.getSession().setAttribute("login", "ok");
            request.getSession().setAttribute("saler", "ok");
            page = "saler.jsp";
        }
        else if(name.equals(nameAdm) && pass.equals(passAdm) && identity.equals("administrator")){
            request.setAttribute("name", name);
            request.getSession().setAttribute("login", "ok");
            request.getSession().setAttribute("administrator", "ok");
            page = "administrator.jsp";
        }
        else {
            request.setAttribute("loginError", result);
        }
        request.getRequestDispatcher(page).forward(request, response);
    }

}