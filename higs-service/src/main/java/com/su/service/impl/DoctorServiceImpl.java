package com.su.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.su.model.domain.Doctor;
import com.su.service.DoctorService;
import com.su.mapper.DoctorMapper;
import org.springframework.stereotype.Service;

/**
* @author 86158
* @description 针对表【doctor】的数据库操作Service实现
* @createDate 2024-08-29 10:24:57
*/
@Service
public class DoctorServiceImpl extends ServiceImpl<DoctorMapper, Doctor>
    implements DoctorService{

}




