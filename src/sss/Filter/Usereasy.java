package sss.Filter;

import sss.model.User;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * Created by zxw on 17-11-19.
 */
@WebFilter(filterName = "Usereasy",urlPatterns = "/mana/easy/*")
public class Usereasy implements Filter {
    public Usereasy(){

    }
    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        System.out.println("filter start");
        HttpServletRequest request = (HttpServletRequest)req;
        HttpSession session = request.getSession(false);
        if (session != null){
            chain.doFilter(req, resp);
        }else {
            request.setAttribute("desc","无权访问");
            request.getRequestDispatcher("/error.jsp").forward(request,resp);
        }
    }

    public void init(FilterConfig config) throws ServletException {

    }

}
