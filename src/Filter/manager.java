package Filter;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

/**
 * Created by zxw on 17-11-16.
 */
@WebFilter(filterName = "manager")
public class manager implements Filter {
    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        chain.doFilter(req, resp);
        System.out.println("进入过滤器manager");
        HttpServletRequest request = (HttpServletRequest) req;
        String flag = (String) request.getSession().getAttribute("lyt");
        if(flag == null || !flag.equals("ok")){
            System.out.println("无权访问manager");
            req.getRequestDispatcher("/error.jsp").forward(req,resp);
        }else {
            chain.doFilter(req,resp);
        }
    }

    public void init(FilterConfig config) throws ServletException {

    }

}
