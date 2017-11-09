//package Filter;
//
//import javax.servlet.Filter;
//import javax.servlet.FilterConfig;
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.ServletResponse;
//import javax.servlet.ServletRequest;
//import javax.servlet.annotation.WebFilter;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//import java.net.HttpRetryException;
//
///**
// * Created by zxw on 17-11-9.
// */
//@WebFilter("/saler/*")
//public class saler implements Filter{
//    public saler(){
//
//    }
//    public void destory(){
//
//    }
//    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException,ServletException{
//        System.out.println("进入过滤器saler");
//        HttpServletResponse req = (HttpServletResponse) request;
//        String flag = (String) req.getSession().getAttribute("a");
//        if(flag == null || !flag.equals("ok")){
//            System.out.println("无权访问saler");
//            request.setAttribute("error","无法访问a路径");
//            request.getRequestDispatcher("/login.jsp").forward(request,response);
//        }else
//            chain.doFilter(request,response);
//    }
//    public void init(FilterConfig fConfig) throws ServletException{
//
//    }
//}
