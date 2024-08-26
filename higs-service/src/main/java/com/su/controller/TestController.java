package com.su.controller;

import com.su.common.Response;
import com.su.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @author su
 * @date 2024/6/26
 */
@RequestMapping("/su")
@RestController
public class TestController {
    @Autowired
    private TestService testService;
    @GetMapping("/test")
    public Response test(@RequestParam Integer id){
        return testService.getName(id);
    }

}
