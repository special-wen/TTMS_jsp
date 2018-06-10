
// select someone
select * from employee inner join user on user.emp_no = employee.emp_no where emp_name like '%三%';

//select *
select * from employee inner join user on user.emp_no = employee.emp_no;
