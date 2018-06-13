package sss.idao;

import sss.dao.*;

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

    public static IStudio createStudioDAO() {
        return new StudioDAO();
    }

    public static ISeat createSeatDAO(){
        return new SeatDAO();
    }

    public static IPlay createPlayDAO() {return new PlayDAO(); }
}