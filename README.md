//使用级联操作可以避免多表关联修改/删除的问题

// select someone
select * from employee inner join user on user.emp_no = employee.emp_no where emp_name like '%三%';

//select *
select * from employee inner join user on user.emp_no = employee.emp_no;



