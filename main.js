/*
how to interact with this code 
1-to change the main question i.e the very first question will change the mainQ variable remove the string "Question one" and add your question;
for the options change the value of each input for example remove 'option A' and replace it with 'color red'
2- to change a follow up question first you have to determine which option it will be for starting from questionFor1 it has four entries 
entry one for option one of the main question and entry two for option 2 of the main question and so in if an option does not have a follow up 
question like option four of the main question its corresponding entry in the follow up question  is left empty  like line 17 and 22,28,34
*/ 
let mainQ ="<div class='question' id='1'><h1>Question one ?</h1><div class='options'><input type='text' class='generated 1' value='Option A'><input type='text' class='generated 2' value='Option B'><input type='text' class='generated 3' value='Option C'><input type='text' class='generated 4' value='Option E'></div></div>";
let result =[] //array to hold the result shown after generation 
//the bellow array will hold the options for the second question based on the choice of the first question 
//if you want to change what is displayed as and option you will need to change the value in the <input value=""> 
let questionsFor1 = [];
questionsFor1.push("<div class='question hidden' id='2'><h1>Question two ?</h1><div class='options'><input type='text' class='generated 1' value='option g'><input type='text' class='generated 2' value='option h'><input type='text' class='generated 3' value='option qw'><input type='text' class='generated 4' value='option go'></div></div>");
questionsFor1.push("<div class='question hidden' id='2'><h1>Question two ?</h1><div class='options'><input type='text' class='generated 1' value='option 1'><input type='text' class='generated 2' value='option 2'><input type='text' class='generated 3' value='option 3'><input type='text' class='generated 4' value='option 4'></div></div>");
questionsFor1.push("<div class='question hidden' id='2'><h1>Question two ?</h1><div class='options'><input type='text' class='generated 1' value='option 1G'><input type='text' class='generated 2' value='option 2G'><input type='text' class='generated 3' value='option 3G'><input type='text' class='generated 4' value='option 4G'></div></div>");
questionsFor1.push("");
//the bellow array holds the options for the third question if the user chose the first option on the second question 
let questionsFor2 = [];
questionsFor2.push("<div class='question hidden' id='3'><h1>Question three ?</h1><div class='options'><input type='text' class='generated 1' value='option L'><input type='text' class='generated 2' value='option M'><input type='text' class='generated 3' value='option S'><input type='text' class='generated 4' value='option X'></div></div>");
questionsFor2.push("<div class='question hidden' id='3'><h1>Question three ?</h1><div class='options'><input type='text' class='generated 1' value='option up'><input type='text' class='generated 2' value='option down'><input type='text' class='generated 3' value='option right'></div></div>");
questionsFor2.push("");
questionsFor2.push("<div class='question hidden' id='3'><h1>Question three ?</h1><div class='options'><input type='text' class='generated 1' value='option black'><input type='text' class='generated 2' value='option white'><input type='text' class='generated 3' value='option blue'><input type='text' class='generated 4' value='option red'></div></div>");
//
let questionsFor3 = [];
questionsFor3.push("<div class='question hidden' id='4'><h1>Question four ?</h1><div class='options'><input type='text' class='generated 1' value='option tall'><input type='text' class='generated 2' value='option small'><input type='text' class='generated 3' value='option medium'><input type='text' class='generated 4' value='option X'></div></div>");
questionsFor3.push("<div class='question hidden' id='4'><h1>Question four ?</h1><div class='options'><input type='text' class='generated 1' value='option once'><input type='text' class='generated 2' value='option twice'><input type='text' class='generated 3' value='option three'></div></div>");
questionsFor3.push("");
questionsFor3.push("<div class='question hidden' id='4'><h1>Question four ?</h1><div class='options'><input type='text' class='generated 1' value='option light'><input type='text' class='generated 2' value='option dark'><input type='text' class='generated 3' value='option not dark'><input type='text' class='generated 4' value='option not light'></div></div>");
//
let questionsFor4 = [];
questionsFor4.push("<div class='question hidden' id='5'><h1>Question 5 ?</h1><div class='options'><input type='text' class='generated 1' value='option tall'><input type='text' class='generated 2' value='option small'><input type='text' class='generated 3' value='option medium'><input type='text' class='generated 4' value='option X'></div></div>");
questionsFor4.push("<div class='question hidden' id='5'><h1>Question 5 ?</h1><div class='options'><input type='text' class='generated 1' value='option once'><input type='text' class='generated 2' value='option twice'><input type='text' class='generated 3' value='option three'></div></div>");
questionsFor4.push("");
questionsFor4.push("<div class='question hidden' id='5'><h1>Question 5 ?</h1><div class='options'><input type='text' class='generated 1' value='option light'><input type='text' class='generated 2' value='option dark'><input type='text' class='generated 3' value='option not dark'><input type='text' class='generated 4' value='option not light'></div></div>");
//
let Questions = [questionsFor1,questionsFor2,questionsFor3,questionsFor4];
$(document).ready(function(){//wait till the page is loaded
    $("#main").prepend(mainQ);
    $("#main").on('click','.generated',function(){//git the button that the user clicks will not work if it a special button
        $(this).css("background-color","green");//change the background color of the clicked option
        $(this).siblings().each(function(){//make sure to keep the color of the rest of the buttons to white
            $(this).css("background-color","white")
        });
        //displaying the next question
        let questionNumber = $(this).parent().parent().attr("id");//get the number of the question the user answered
        let placeToAppend = $(this).parent().parent();//get the place you will append the new question
        let inputIndex = $(this).attr("class").match(/\d+/g)[0]-1;
        //
        $(".question").each(function(){//make sure that if the user hits the same question more than once nothing happen and if he changes on of his answer remove the questions below changed answer 
            if($(this).attr("id")>questionNumber){
                $(this).remove();
                result.pop();
            }
        })
        if(Questions[questionNumber-1]){//if the current option chosen by the user has a follow up question
            $(Questions[questionNumber-1][inputIndex]).insertAfter(placeToAppend);//inset the follow up question after the current question
        }    
        let add = [];//make another array that will go into the result array 
        add.push($(this).val());//add the value of the clicked button to the add array
        result[$(this).parent().parent().attr('id')-1]=add;//add the add array to the result
            //end of display 
        })
    $("#Generate").click(function(){//if the user hits generate 
        let str= "the user has chosen"// a new string that will hold the result to be shown in the text area 
        for(let i = 0 ; i < result.length ; i++){//loop through the result array to make the result 
            if(str.length <20){
                str+= " "+result[i][0];
            }else{//depends on the user chosen only one option or multi will add with 
                str+= " with "+result[i][0];
            }
        }
        str+=". Thanks."
        $("textarea").val(str)
    })
    $("#reset").click(function(){//if the user hits reset hide all the question except for the main one 
        $(".hidden").remove();
        $("input").css("background-color","white");//return all the buttons background color to white 
        result=[];
        $("textarea").val("")//reset the text area
        $("#1").remove();
        $("#main").prepend(mainQ);
    })
    $("#copy").click(function(){
        navigator.clipboard.writeText($("textarea").val());//copy button
        $("#alret").css("display","block");//a nice alret with the text copied to be shown
        setTimeout(function(){
            $("#alret").css("display","none");   
        },3000);//make it appear and fade 
    })
     $("#main").on("input",".generated", function() {
        let add = [];//make another array that will go into the result array 
        add.push($(this).val());//add the value of the clicked button to the add array
        result[$(this).parent().parent().attr('id')-1]=add;//add the add array to the result 
     });
  });