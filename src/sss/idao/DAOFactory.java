package sss.idao;

import sss.dao.EmployeeDAO;
import sss.dao.UserDAO;

/**
 * Created by zxw on 17-11-19.
 */

public class DAOFactory
{
    public static IEmployee creatEmployeeDAO()
    {
        return new EmployeeDAO();
    }

    public static IUser createUserDAO() { return new UserDAO(); }
}