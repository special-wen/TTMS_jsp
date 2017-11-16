package Filter;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;

import java.io.IOException;

/**
 * Created by zxw on 17-11-16.
 */
@WebFilter(filterName = "saler")
public class saler implements Filter {
    public void destroy() {
    }

    public void doFilter(ServletRequest request,ServletResponse response,FilterChain chain)throws IOException,ServletException{
        System.out.println("请入过滤器saler");
        HttpServletRequest req = (HttpServletRequest) request;
        String flag = (String)req.getSession().getAttribute("Lyt");
        if(flag == null || !flag.equals("ok")){
            System.out.println("无权访问saler");
            request.setAttribute("desc","无权访问a路径");
            request.getRequestDispatcher("/error.jsp").forward(request,response);
        }else{
            chain.doFilter(request,response);
        }
    }
    public void init(FilterConfig config) throws ServletException {

    }

}
