package com.su.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.su.model.request.RegistRequest;
import com.su.model.domain.User;

/**
* @author 86158
* @description 针对表【user】的数据库操作Service
* @createDate 2024-08-29 10:25:05
*/
public interface UserService extends IService<User> {

    void addUser(RegistRequest registRequest);

    int getUserIdByMobile(String mobile);
}
