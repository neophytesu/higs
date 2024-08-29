package com.su.controller;

import com.su.common.Response;
import com.su.model.request.RegistRequest;
import com.su.service.CardService;
import com.su.service.RelationService;
import com.su.service.UserService;
import com.su.util.HigsApi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/su/user/login")
public class LoginController {
    @Autowired
    private CardService cardService;
    @Autowired
    private RelationService relationService;
    @Autowired
    private UserService userService;
    /*就诊卡是否存在*/
    @GetMapping("/cardstate")
    public Response getCardStatus(@RequestParam Integer cardId ){
        return cardService.getCardStatus(cardId);
    }
    /*注册就诊卡，并在关联表中添加*/
    @PostMapping("/registcard")
    public void registCard(@RequestBody RegistRequest registRequest){
        /*添加用户信息*/
        userService.addUser(registRequest);
        int phone=Integer.parseInt(registRequest.getMobile());
        int userId = userService.getUserIdByMobile(phone+"");
        int cardId=HigsApi.cardGenerate(userId);
        /*添加关联表*/
        relationService.addRelation(userId,phone,cardId);
        /*添加卡表*/
        cardService.addCard(cardId);
    }
    /*添加人脸*/
    @PostMapping("/addface")
    public void addFace(@RequestParam("file")MultipartFile file){

    }
}
