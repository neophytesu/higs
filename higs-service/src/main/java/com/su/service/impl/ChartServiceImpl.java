package com.su.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.su.model.domain.Chart;
import com.su.service.ChartService;
import com.su.mapper.ChartMapper;
import org.springframework.stereotype.Service;

/**
* @author 86158
* @description 针对表【chart】的数据库操作Service实现
* @createDate 2024-08-29 10:24:52
*/
@Service
public class ChartServiceImpl extends ServiceImpl<ChartMapper, Chart>
    implements ChartService{

}




