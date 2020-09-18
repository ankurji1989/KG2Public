var unitFn = {

    init: function() {
        unitFn.callEventsOnPageLoad();
    },

    callEventsOnPageLoad: function() {
        unitFn.unit_1_Fn();
        unitFn.unit_2_Fn();
        unitFn.unit_3_Fn();
        unitFn.unit_4_Fn();
        unitFn.unit_5_Fn();
        unitFn.unit_6_Fn();
        unitFn.unit_7_Fn();
        unitFn.unit_8_Fn();
    },

    unit_1_Fn: function() {
        unitLesson_1_Fn();
        unitLesson_2_Fn();
        unitLesson_3_Fn();
        unitLesson_4_Fn();
        unitLesson_5_Fn();

        function unitLesson_1_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {
                var isUserCorrectOne = true;
                $(".unit_1_lesson_1 .exercise2 .submit_btn").on('click', function() {

                    firstVal = $("#zero_three").val();
                    secodVal = $("#one_three").val();
                    therdVal = $("#two_three").val();
                    zeroVal = $("#zero_text").val();
                    oneVal = $("#one_text").val();
                    twoVal = $("#two_text").val();

                    if (firstVal === "000" && secodVal === "111" && therdVal === "222" && zeroVal === "zero" && oneVal === "one" && twoVal === "two") {
                        isUserCorrectOne = true;
                    } else {
                        isUserCorrectOne = false;
                    }

                    if (isUserCorrectOne) {
                        $(".unit_1_lesson_1 .exercise2 .feedback_box").show();
                        $(".unit_1_lesson_1 .exercise2 .overlay").show();
                        $(".unit_1_lesson_1 .exercise2 .right_feedback").show();

                    } else {
                        $(".unit_1_lesson_1 .exercise2 .feedback_box").show();
                        $(".unit_1_lesson_1 .exercise2 .overlay").show();
                        $(".unit_1_lesson_1 .exercise2 .wrong_feedback").show();

                    }
                });

                $(".unit_1_lesson_1 .exercise2 .close_popup").off("click").on("click", function() {
                    $(".unit_1_lesson_1 .exercise2 .feedback_box").hide();
                    $(".unit_1_lesson_1 .exercise2 .overlay").hide();
                    $(".unit_1_lesson_1 .exercise2 .wrong_feedback").hide();
                    if (isUserCorrectOne == false) {
                        $('.unit_1_lesson_1 .exercise2 .text_area_fill input').each(function() {
                            console.log()
                            $(this).val('');
                        });
                    }

                });

                $(".unit_1_lesson_1 .exercise2 .reload").on('click', function() {
                    $('.unit_1_lesson_1 .exercise .text_area_fill input').each(function() {
                        $(this).val('');
                    });
                });
            }

            function exerciseFn_3() {
                var isUserCorrectTwo = true;
                var isUserCorrectThree = true;
                var value1 = 0;
                var value2 = 0;
                var value3 = 0;

                $(".unit_1_lesson_1 .exercise3 .addcollor").on('click', function() {
                    $(this).toggleClass("yellow");
                });
                $(".unit_1_lesson_1 .exercise3 .submit_btn").off("click").on("click", function() {
                    var temp1 = $(".sun.yellow").length;
                    var temp2 = $(".frog.yellow").length;
                    var temp3 = $(".fly.yellow").length;


                    if (temp1 == 0 && temp2 == 1 && temp3 == 2) {
                        isUserCorrectTwo = true;

                    } else {
                        isUserCorrectTwo = false;
                    }

                    var value1 = $("#number_one").val();
                    var value2 = $("#number_two").val();
                    var value3 = $("#number_zero").val();

                    finalVal = value1 + value2 + value3;

                    if (value1 == 1 && value2 == 2 && value3 == 0) {
                        isUserCorrectThree = true;
                    } else {
                        isUserCorrectThree = false;
                    }

                    if (isUserCorrectTwo == true && isUserCorrectThree == true) {
                        $(".unit_1_lesson_1 .exercise3 .feedback_box").show();
                        $(".unit_1_lesson_1 .exercise3 .overlay").show();
                        $(".unit_1_lesson_1 .exercise3 .feedback_box .right_feedback").show();
                    } else {
                        $(".unit_1_lesson_1 .exercise3 .feedback_box").show();
                        $(".unit_1_lesson_1 .exercise3 .overlay").show();
                        $(".unit_1_lesson_1 .exercise3 .feedback_box .wrong_feedback").show();
                    }

                });

                $(".unit_1_lesson_1 .exercise3 .close_popup").off("click").on("click", function() {

                    if (isUserCorrectTwo == false && isUserCorrectThree == false) {
                        console.log();
                        $('.unit_1_lesson_1 .exercise3 .push_top input').each(function() {
                            $(this).val('');
                        });
                        $(".unit_1_lesson_1 .exercise3 .addcollor").removeClass("yellow");

                    }
                    $(".unit_1_lesson_1 .exercise3 .feedback_box").hide();
                    $(".unit_1_lesson_1 .exercise3 .right_feedback").hide();
                    $(".unit_1_lesson_1 .exercise3 .wrong_feedback").hide();
                    $(".unit_1_lesson_1 .exercise3 .overlay").hide();

                });

                $(".unit_1_lesson_1 .exercise3 .reload").off("click").on("click", function() {
                    $(".unit_1_lesson_1 .exercise3 .addcollor").removeClass("yellow");

                });
            }

            function exerciseFn_4() {

                $(".unit_1_lesson_1 .exercise4 .dragBox").draggable({
                    containment: ".unit_1_lesson_1 .exercise4",
                    zIndex: 10000,
                    revert: function(event, ui) {
                        $(this).data("uiDraggable").originalPosition = {
                            top: 0,
                            left: 0
                        };
                        return !event;
                    }
                });

                $(".unit_1_lesson_1 .exercise4 .drop_area").droppable({
                    drop: function(event, ui) {
                        var getDropedElmLen = $(this).children(".dragBox").length;
                        if (getDropedElmLen < 6) {
                            $(this).append($(ui.draggable).clone());
                        } else {
                            ui.draggable.mouseup();
                        }
                        ui.draggable.removeAttr("style").css("position", "relative");
                    }
                });

                var totalApple = 0;
                var totalSun = 0;
                var totalTree = 0;
                var isUserCorrect = false;

                $(".unit_1_lesson_1 .exercise4 .submit_btn").off("click").on("click", function() {
                    $(".unit_1_lesson_1 .exercise4 .drop_area .dragBox").each(function(k, v) {
                        if (v.id == "apple") {
                            totalApple += 1;
                        } else if (v.id == "sun") {
                            totalSun += 1;
                        } else if (v.id == "tree") {
                            totalTree += 1;
                        }
                    });

                    $(".unit_1_lesson_1 .exercise4 .feedback_box, .unit_1_lesson_1 .exercise4 .close_popup").show();
                    $(".unit_1_lesson_1 .exercise4 .right_feedback").hide();
                    $(".unit_1_lesson_1 .exercise4 .wrong_feedback").hide();
                    $(".unit_1_lesson_1 .exercise4 .overlay").hide();

                    if (totalApple == 0 && totalSun == 1 && totalTree == 2) {
                        isUserCorrect = true;
                        $(".unit_1_lesson_1 .exercise4 .right_feedback").show();
                        $(".unit_1_lesson_1 .exercise4 .overlay").show();
                    } else {
                        $(".unit_1_lesson_1 .exercise4 .wrong_feedback").show();
                        $(".unit_1_lesson_1 .exercise4 .overlay").show();
                    }
                });

                $(".unit_1_lesson_1 .exercise4 .reload").off("click").on("click", function() {
                    totalApple = 0;
                    totalSun = 0;
                    totalTree = 0;
                    isUserCorrect = false;
                    $(".unit_1_lesson_1 .exercise4 .drop_area").html("");
                });

                $(".unit_1_lesson_1 .exercise4 .close_popup").off("click").on("click", function() {
                    if (!isUserCorrect) {
                        totalApple = 0;
                        totalSun = 0;
                        totalTree = 0;
                        isUserCorrect = false;
                        $(".unit_1_lesson_1 .exercise4 .drop_area").html("");
                    }
                    $(".unit_1_lesson_1 .exercise4 .feedback_box, .unit_1_lesson_1 .exercise4 .close_popup").hide();
                    $(".unit_1_lesson_1 .exercise4 .right_feedback").hide();
                    $(".unit_1_lesson_1 .exercise4 .wrong_feedback").hide();
                    $(".unit_1_lesson_1 .exercise4 .overlay").hide();
                });
            }
        }

        function unitLesson_2_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {
                var DNDCorrectAns = ["circle", "square"];
                var isUserCorrect = true;
                $(".unit_1_lesson_2 .exercise1 .dragBox > img").draggable({
                    containment: ".unit_1_lesson_2 .exercise1",
                    zIndex: 10000,
                    revert: function(event, ui) {
                        $(this).data("uiDraggable").originalPosition = {
                            top: 0,
                            left: 0
                        };
                        return !event;
                    }
                });

                $(".unit_1_lesson_2 .exercise1 .dropBox").droppable({
                    drop: function(event, ui) {
                        var getDropElName = ui.draggable.attr("id");
                        var isBoxEmpt = $(this).html();
                        if (isBoxEmpt == " " || isBoxEmpt == "") {
                            $(this).html(getDropElName);
                            ui.draggable.css("visibility", "hidden");
                        } else {
                            //$('body').trigger('mouseup');
                            ui.draggable.mouseup();
                            ui.draggable.removeAttr("style").css("position", "relative");
                        }

                    }
                });

                $(".unit_1_lesson_2 .exercise1 .submit_btn").off("click").on("click", function() {
                    $(".unit_1_lesson_2 .exercise1 .dropBox").each(function(k, v) {
                        if (v.innerHTML != DNDCorrectAns[k]) {
                            isUserCorrect = false;
                        }
                    })

                    $(".unit_1_lesson_2 .exercise1 .overlay, .feedback_box, .unit_1_lesson_2 .exercise1 .feedback_box .close_popup").show();

                    if (isUserCorrect) {
                        $(".unit_1_lesson_2 .exercise1 .feedback_box .right_feedback").show();
                    } else {
                        $(".unit_1_lesson_2 .exercise1 .feedback_box .wrong_feedback").show();
                    }
                });

                $(".unit_1_lesson_2 .exercise1 .reload").off("click").on("click", function() {
                    $(".unit_1_lesson_2 .exercise1 .dragBox img").removeAttr("style").css("position", "relative");
                    $(".unit_1_lesson_2 .exercise1 .dropBox").html(" ");
                    isUserCorrect = true;
                });

                $(".unit_1_lesson_2 .exercise1 .close_popup").off("click").on("click", function() {
                    if (!isUserCorrect) {
                        $(".unit_1_lesson_2 .exercise1 .dragBox img").removeAttr("style").css("position", "relative");
                        $(".unit_1_lesson_2 .exercise1 .dropBox").html(" ");
                    }
                    $(".unit_1_lesson_2 .exercise1 .overlay, .feedback_box, .unit_1_lesson_2 .exercise1 .feedback_box .close_popup").hide();
                    $(".unit_1_lesson_2 .exercise1 .feedback_box .right_feedback").hide();
                    $(".unit_1_lesson_2 .exercise1 .feedback_box .wrong_feedback").hide();
                    isUserCorrect = true;
                });


            }

            function exerciseFn_2() {

                var DNDCorrectAns = ["rectangle", "triangle"];
                var isUserCorrect = true;
                $(".unit_1_lesson_2 .exercise2 .dragBox > img").draggable({
                    containment: ".unit_1_lesson_2 .exercise2",
                    zIndex: 10000,
                    revert: function(event, ui) {
                        $(this).data("uiDraggable").originalPosition = {
                            top: 0,
                            left: 0
                        };
                        return !event;
                    }
                });

                $(".unit_1_lesson_2 .exercise2 .dropBox").droppable({
                    drop: function(event, ui) {
                        var getDropElName = ui.draggable.attr("id");
                        var isBoxEmpt = $(this).html();
                        if (isBoxEmpt == " " || isBoxEmpt == "") {
                            $(this).html(getDropElName);
                            ui.draggable.css("visibility", "hidden");
                        } else {
                            //$('body').trigger('mouseup');
                            ui.draggable.mouseup();
                            ui.draggable.removeAttr("style").css("position", "relative");
                        }

                    }
                });

                $("#unit_1_lesson_2_exe_2").off("click").on("click", function() {
                    $(".unit_1_lesson_2 .exercise2 .dropBox").each(function(k, v) {
                        if (v.innerHTML != DNDCorrectAns[k]) {
                            isUserCorrect = false;
                        }
                    })

                    $(".overlay, .feedback_box, .feedback_box .close_popup").show();

                    if (isUserCorrect) {
                        $(".feedback_box .right_feedback").show();
                    } else {
                        $(".feedback_box .wrong_feedback").show();
                    }
                });

                $("#unit_1_lesson_2_exe_1").off("click").on("click", function() {
                    $(".unit_1_lesson_2 .exercise2 .dropBox").each(function(k, v) {
                        if (v.innerHTML != DNDCorrectAns[k]) {
                            isUserCorrect = false;
                        }
                    })

                    $(".overlay, .feedback_box, .feedback_box .close_popup").show();

                    if (isUserCorrect) {
                        $(".feedback_box .right_feedback").show();
                    } else {
                        $(".feedback_box .wrong_feedback").show();
                    }
                });

                $(".unit_1_lesson_2 .exercise2 .reload").off("click").on("click", function() {
                    $(".unit_1_lesson_2 .exercise2 .dragBox img").removeAttr("style").css("position", "relative");
                    $(".unit_1_lesson_2 .exercise2 .dropBox").html(" ");
                    isUserCorrect = true;
                });

                $(".unit_1_lesson_2 .exercise2 .close_popup").off("click").on("click", function() {
                    if (!isUserCorrect) {
                        $(".unit_1_lesson_2 .exercise2 .dragBox img").removeAttr("style").css("position", "relative");
                        $(".unit_1_lesson_2 .exercise2 .dropBox").html(" ");
                    }
                    $(".overlay, .feedback_box, .feedback_box .close_popup").hide();
                    $(".feedback_box .right_feedback").hide();
                    $(".feedback_box .wrong_feedback").hide();
                    isUserCorrect = true;
                });

            }

            function exerciseFn_3() {
                var DNDCorrectAns = ["Triangle", "Rectangle", "Circle", "Square"];
                var isUserCorrect = true;
                $(".unit_1_lesson_2 .exercise3 .dreg_box .dragBox > img").draggable({
                    containment: ".unit_1_lesson_2 .exercise3",
                    zIndex: 10000,
                    revert: function(event, ui) {
                        $(this).data("uiDraggable").originalPosition = {
                            top: 0,
                            left: 0
                        };
                        return !event;
                    }
                });

                $(".unit_1_lesson_2 .exercise3 .dropBox").droppable({
                    drop: function(event, ui) {
                        var tempBool = $(this).hasClass("hasDroped");
                        if (tempBool) {
                            ui.draggable.mouseup();
                            ui.draggable.removeAttr("style").css("position", "relative");
                        } else {
                            var getDropElName = ui.draggable.attr("id");
                            ui.draggable.css("visibility", "hidden");
                            $(this).find("p").html(getDropElName).css("opacity", "1");
                            $(this).addClass("hasDroped");
                        }

                    }
                });

                $("#unit_1_lesson_2_exe_3").off("click").on("click", function() {

                    $(".unit_1_lesson_2 .exercise3 .dropable_box").each(function(k, v) {
                        var tempVal = $(v).find("p").html();
                        if (tempVal != DNDCorrectAns[k]) {
                            isUserCorrect = false;
                        }
                    })

                    $(".overlay, .feedback_box, .feedback_box .close_popup").show();

                    if (isUserCorrect) {
                        $(".feedback_box .right_feedback").show();
                    } else {
                        $(".feedback_box .wrong_feedback").show();
                    }
                });

                $(".unit_1_lesson_2 .exercise3 .reload").off("click").on("click", function() {
                    $(".unit_1_lesson_2 .exercise3 .dragBox img").removeAttr("style").css("position", "relative");
                    $(".unit_1_lesson_2 .exercise3 .dropable_box").each(function(k, v) {
                        $(v).find("p").html(DNDCorrectAns[k]).css("opacity", "0.1");
                        $(v).removeClass("hasDroped");
                    })

                });

                $(".unit_1_lesson_2 .exercise3 .close_popup").off("click").on("click", function() {
                    if (!isUserCorrect) {
                        $(".unit_1_lesson_2 .exercise3 .dragBox img").removeAttr("style").css("position", "relative");
                        $(".unit_1_lesson_2 .exercise3 .dropable_box").each(function(k, v) {
                            $(v).find("p").html(DNDCorrectAns[k]).css("opacity", "0.1");
                            $(v).removeClass("hasDroped");
                        })

                    }
                    $(".overlay, .feedback_box, .feedback_box .close_popup").hide();
                    $(".feedback_box .right_feedback").hide();
                    $(".feedback_box .wrong_feedback").hide();
                    isUserCorrect = true;
                });
            }

            function exerciseFn_4() {


                var color_code = "";
                var class_name = "";
                var user_ans = [];
                var ansarr = ["triangle", "rectangle", "triangle", "square", "square", "rectangle", "circle", "circle", "triangle"];

                $(".unit_1_lesson_2 .exercise4 .color_picker").on("click", function() {
                    color_code = $(this).attr("data-attr");
                    class_name = $(this).attr("data-cname");
                })

                $(".unit_1_lesson_2 .exercise4 .color_drop").on("click", function() {
                    $(this).attr("d_value", class_name);
                    var class_name_shape = $(this).attr("shape_name");
                    var class_name_d = parseInt($(this).attr("shape_nd"));

                    if (color_code == "" || $(this).hasClass("dropped")) {
                        return;
                    }

                    if (class_name_shape == "triangle_div") {
                        switch (class_name_d) {
                            case 1:
                                $(this).css("border-right-color", color_code);
                                $(this).addClass("dropped");
                                break;
                            case 3:
                                $(this).css("border-left-color", color_code);
                                $(this).addClass("dropped");
                                break;
                            case 9:
                                $(this).css("border-bottom-color", color_code);
                                $(this).addClass("dropped");
                                break;
                        }

                    } else {
                        $(this).css("background", color_code);
                        $(this).addClass("dropped");
                    }

                })

                $(".unit_1_lesson_2 .exercise4 .reset").on("click", function() {
                    resetans();
                });

                $(".unit_1_lesson_2 .exercise4 .close_popup").on("click", function() {
                    $(".unit_1_lesson_2 .exercise4 .feedback_box").hide();
                    $(".unit_1_lesson_2 .exercise4 .overlay").hide();
                    $(".unit_1_lesson_2 .exercise4 .right_feedback").hide();
                    $(".unit_1_lesson_2 .exercise4 .wrong_feedback").hide();
                })

                function resetans() {
                    $(".color_drop").removeClass("dropped");
                    $(".div1").css("border-right-color", "transparent");
                    $(".div3").css("border-left-color", "transparent");
                    $(".div9").css("border-bottom-color", "transparent");
                    $(".div2, .div4, .div5, .div6, .div7, .div8").css("background", "transparent");
                    $(".color_drop").attr("d_value", "");
                    user_ans = [];
                }


                $(".unit_1_lesson_2 .exercise4 .submit").on("click", function() {
                    debugger;
                    var status_ans = true;
                    var get_ans_length = $(".color_drop").length;

                    for (var i = 0; i < get_ans_length; i++) {
                        var getvalue = $(".color_drop").eq(i).attr("d_value");
                        user_ans.push(getvalue);
                    }


                    for (var j = 0; j < get_ans_length; j++) {
                        if (ansarr[j] == user_ans[j]) {
                            status_ans = true;
                        } else {
                            status_ans = false;
                            break;
                        }
                    }

                    if (status_ans == true) {
                        $(".unit_1_lesson_2 .exercise4 .close_popup").fadeIn();
                        $(".unit_1_lesson_2 .exercise4 .feedback_box").fadeIn();
                        $(".unit_1_lesson_2 .exercise4 .overlay").fadeIn();
                        $(".unit_1_lesson_2 .exercise4 .right_feedback").show();
                        $(".unit_1_lesson_2 .exercise4 .wrong_feedback").hide();


                    } else {
                        $(".unit_1_lesson_2 .exercise4 .close_popup").on("click", function() {
                            resetans();
                        })
                        $(".unit_1_lesson_2 .exercise4 .feedback_box").fadeIn();
                        $(".unit_1_lesson_2 .exercise4 .overlay").fadeIn();
                        $(".unit_1_lesson_2 .exercise4 .right_feedback").hide();
                        $(".unit_1_lesson_2 .exercise4 .wrong_feedback").show();
                    }

                });

            }
        }

        function unitLesson_3_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {
                var isUserCorrectFour = true;

                $(".unit_1_lesson_3 .exercise2 .submit_btn").on('click', function() {

                    firstVal = $("#zero_three").val();
                    secodVal = $("#one_three").val();
                    therdVal = $("#two_three").val();

                    zeroVal = $("#zero_text").val();
                    oneVal = $("#one_text").val();
                    twoVal = $("#two_text").val();

                    if (firstVal === "333") {
                        isUserCorrectFour = true;
                    } else {
                        isUserCorrectFour = false;
                    }


                    if (isUserCorrectFour) {
                        $(".unit_1_lesson_3 .exercise2 .feedback_box, .overlay, .right_feedback").fadeIn();

                    } else {
                        $(".unit_1_lesson_3 .exercise2 .feedback_box, .overlay, .wrong_feedback").fadeIn();
                        if (isUserCorrectFour == false) {
                            console.log();
                            $(".unit_1_lesson_3 .exercise2 .close_popup").on('click', function() {
                                $('.unit_1_lesson_3 .exercise2 .main_box input').each(function() {
                                    $(this).val('');
                                });
                            });

                        } else {
                            $(".unit_1_lesson_3 .exercise2 .feedback_box, .overlay, .right_feedback").hide();
                            $(".unit_1_lesson_3 .exercise2 .feedback_box, .overlay, .wrong_feedback").hide();
                        }

                    }
                });

                $(".unit_1_lesson_3 .exercise2 .close_popup").on('click', function() {
                    $(".unit_1_lesson_3 .exercise2 .feedback_box, .overlay, .right_feedback").hide();
                    $(".unit_1_lesson_3 .exercise2 .feedback_box, .overlay, .wrong_feedback").hide();

                });
                $(".unit_1_lesson_3 .exercise2 .reload").on('click', function() {
                    $('.unit_1_lesson_3 .exercise2 .main_box input').each(function() {
                        $(this).val('');
                    });
                });
            }

            function exerciseFn_3() {

                var correctAns = ["1_3", "2_2", "3_1"];
                var userAns = ["", "", ""];
                var selectedNod = [];
                var isUserCor = true;
                $(".unit_1_lesson_3 .exercise3 .clikBox").off("click").on("click", function() {
                    $(this).css("pointer-events", "none");
                    var tempn = $(this).attr("id");

                    var tempFirst = eval(tempn.split("_")[0]);
                    var tempSecond = eval(tempn.split("_")[1]);

                    if (tempFirst == 1) {
                        selectedNod[0] = tempSecond;
                    } else if (tempFirst == 2) {
                        selectedNod[1] = tempSecond;
                    }

                    var tempCount = 0;
                    $.each(selectedNod, function(k, v) {
                        if (v != undefined) {
                            tempCount += 1;
                        }
                    });

                    if (tempCount == 2) {
                        $(".unit_1_lesson_3 .exercise3 .line[set='" + selectedNod[0] + "_" + selectedNod[1] + "']").show();
                        if (userAns[0] == "") {
                            userAns[0] = selectedNod[0] + "_" + selectedNod[1];
                        } else if (userAns[1] == "") {
                            userAns[1] = selectedNod[0] + "_" + selectedNod[1];
                        } else if (userAns[2] == "") {
                            userAns[2] = selectedNod[0] + "_" + selectedNod[1];
                        }
                        selectedNod = [];
                        tempCount = 0;
                    }
                });

                $(".unit_1_lesson_3 .exercise3 .reload").off("click").on("click", function() {
                    $(".unit_1_lesson_3 .exercise3 .line").hide();
                    $(".unit_1_lesson_3 .exercise3 .clikBox").css("pointer-events", "auto");
                    userAns = ["", "", ""];
                    isUserCor = true;
                });

                $(".unit_1_lesson_3 .exercise3 .submit_btn").off("click").on("click", function() {
                    $.each(userAns, function(k, v) {
                        if (v != correctAns[k]) {
                            isUserCor = false;
                        }
                    });

                    $(".unit_1_lesson_3 .exercise3 .feedback_box").show();
                    $(".unit_1_lesson_3 .exercise3 .close_popup").show();
                    $(".unit_1_lesson_3 .exercise3 .overlay").show();

                    if (isUserCor) {
                        $(".unit_1_lesson_3 .exercise3 .right_feedback").show();
                    } else {
                        $(".unit_1_lesson_3 .exercise3 .wrong_feedback").show();
                    }
                });

                $(".unit_1_lesson_3 .exercise3 .close_popup").off("click").on("click", function() {
                    $(".unit_1_lesson_3 .exercise3 .feedback_box").hide();
                    $(".unit_1_lesson_3 .exercise3 .close_popup").hide();
                    $(".unit_1_lesson_3 .exercise3 .right_feedback").hide();
                    $(".unit_1_lesson_3 .exercise3 .wrong_feedback").hide();
                    $(".unit_1_lesson_3 .exercise3 .overlay").hide();
                    if (!isUserCor) {
                        $(".unit_1_lesson_3 .exercise3 .line").hide();
                        $(".unit_1_lesson_3 .exercise3 .clikBox").css("pointer-events", "auto");
                        userAns = ["", "", ""];
                        isUserCor = true;
                    }
                });


            }

            function exerciseFn_4() {
                var correctAns = [5, 3, 4, 3, 4, 5];
                var userAns = [];
                var isUserCorrect = true;
                $(".unit_1_lesson_3 .exercise4 .number_enter .addme").on('click', function() {
                    $(this).parents(".red_box").find(".addme").removeClass("goluadd");
                    $(this).addClass("goluadd");
                });
                $(".unit_1_lesson_3 .exercise4 .fill_color").on('click', function() {
                    $(this).toggleClass("yellow");
                });

                $(".unit_1_lesson_3 .exercise4 .submit_btn").off("click").on("click", function() {
                    $(".unit_1_lesson_3 .exercise4 .tablebox").each(function(k, v) {
                        var tempN = $(v).find(".yellow").length;
                        userAns.push(tempN);
                    });

                    $(".unit_1_lesson_3 .exercise4 .red_box").each(function(a, b) {
                        $(b).find(".number_box .number_enter").each(function(x, y) {
                            var tempSel = $(y).find(".addme").hasClass("goluadd");
                            if (tempSel) {
                                var tempGetN = eval($(y).attr("valBox"));
                                userAns.push(tempGetN);
                            }
                        });
                    });

                    $.each(userAns, function(d, k) {
                        if (userAns[d] != correctAns[d]) {
                            isUserCorrect = false;
                        }
                    });

                    $(".unit_1_lesson_3 .exercise4 .feedback_box").show();
                    $(".unit_1_lesson_3 .exercise4 .close_popup").show();
                    $(".unit_1_lesson_3 .exercise4 .overlay").show();


                    if (isUserCorrect) {
                        $(".unit_1_lesson_3 .exercise4 .right_feedback").show();
                    } else {
                        $(".unit_1_lesson_3 .exercise4 .wrong_feedback").show();
                    }
                });

                $(".unit_1_lesson_3 .exercise4 .reload").off("click").on("click", function() {
                    userAns = [];
                    isUserCorrect = true;
                    $(".unit_1_lesson_3 .exercise4 .table_dot").removeClass("yellow");
                    $(".unit_1_lesson_3 .exercise4 .number_enter .addme").removeClass("goluadd");
                });

                $(".unit_1_lesson_3 .exercise4 .close_popup").off("click").on("click", function() {
                    userAns = [];
                    $(".unit_1_lesson_3 .exercise4 .feedback_box").hide();
                    $(".unit_1_lesson_3 .exercise4 .close_popup").hide();
                    $(".unit_1_lesson_3 .exercise4 .right_feedback").hide();
                    $(".unit_1_lesson_3 .exercise4 .wrong_feedback").hide();
                    $(".unit_1_lesson_3 .exercise4 .overlay").hide();
                    if (!isUserCorrect) {
                        $(".unit_1_lesson_3 .exercise4 .table_dot").removeClass("yellow");
                        $(".unit_1_lesson_3 .exercise4 .number_enter .addme").removeClass("goluadd");
                    }
                });

            }
        }

        function unitLesson_4_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {


                var kiteCorrectAns = {
                    "order1": [2, 3, 4, 1],
                    "order2": [2, 1, 4, 3]
                }

                var userAns = {
                    "box1_Ans": [],
                    "box2_Ans": []
                }

                var isUSerPassed = [false, false];
                var totalCorrectAns = 0;

                $(".unit_1_lesson_4 .exercise2 .one_pointer").off("click").on("click", function() {
                    var getParent = eval($(this).parent(".kiteBox").attr("id"));
                    var getIndex = $(this).addClass("active").index();
                    $(this).css("pointer-events", "none");
                    getIndex += 1;
                    if (getParent == 1) {
                        userAns.box1_Ans.push(getIndex)
                    } else if (getParent == 2) {
                        userAns.box2_Ans.push(getIndex)
                    }

                });

                $(".unit_1_lesson_4 .exercise2 .submit_btn").off("click").on("click", function() {
                    $.each(userAns, function(k, v) {
                        $.each(kiteCorrectAns, function(a, b) {
                            var tempMatch = 0;
                            $.each(b, function(d, s) {
                                if (k == "box1_Ans") {
                                    if (s == userAns.box1_Ans[d]) {
                                        tempMatch += 1;
                                    }
                                } else if (k == "box2_Ans") {
                                    if (s == userAns.box2_Ans[d]) {
                                        tempMatch += 1;
                                    }
                                }
                                if (tempMatch == 4) {
                                    if (k == "box1_Ans") {
                                        isUSerPassed[0] = true;
                                    } else if (k == "box2_Ans") {
                                        isUSerPassed[1] = true;
                                    }
                                    return false;
                                }
                            })
                        });
                    });

                    $(".unit_1_lesson_4 .exercise2 .feedback_box").show();
                    $(".unit_1_lesson_4 .exercise2 .close_popup").show();
                    $(".unit_1_lesson_4 .exercise2 .right_feedback").hide();
                    $(".unit_1_lesson_4 .exercise2 .wrong_feedback").hide();
                    $(".unit_1_lesson_4 .exercise2 .overlay").show();

                    $.each(isUSerPassed, function(x, y) {
                        if (y) {
                            $(".unit_1_lesson_4 .exercise2 .fill_color_" + (x + 1)).show();
                            totalCorrectAns += 1;
                        }
                    });

                    if (totalCorrectAns == ($(".unit_1_lesson_4 .exercise2 .kiteBox").length)) {
                        $(".unit_1_lesson_4 .exercise2 .right_feedback").show();
                    } else {
                        $(".unit_1_lesson_4 .exercise2 .wrong_feedback").show();
                    }

                });

                $(".unit_1_lesson_4 .exercise2 .reload").off("click").on("click", function() {
                    userAns = {
                        "box1_Ans": [],
                        "box2_Ans": []
                    }
                    isUSerPassed = [false, false];
                    totalCorrectAns = 0;
                    $(".unit_1_lesson_4 .exercise2 .one_pointer").removeClass("active");
                    $(".unit_1_lesson_4 .exercise2 .fillColorBox").hide();
                    $(".unit_1_lesson_4 .exercise2 .kiteBox .one_pointer").css("pointer-events", "auto");
                    $(".unit_1_lesson_4 .exercise2 .feedback_box").hide();
                    $(".unit_1_lesson_4 .exercise2 .close_popup").hide();
                    $(".unit_1_lesson_4 .exercise2 .right_feedback").hide();
                    $(".unit_1_lesson_4 .exercise2 .wrong_feedback").hide();
                    $(".unit_1_lesson_4 .exercise2 .overlay").hide();

                });

                $(".unit_1_lesson_4 .exercise2 .close_popup").off("click").on("click", function() {
                    if (totalCorrectAns != ($(".unit_1_lesson_4 .exercise2 .kiteBox").length)) {
                        userAns = {
                            "box1_Ans": [],
                            "box2_Ans": []
                        }
                        isUSerPassed = [false, false];
                        $(".unit_1_lesson_4 .exercise2 .fillColorBox").hide();
                        $(".unit_1_lesson_4 .exercise2 .kiteBox .one_pointer").css("pointer-events", "auto");
                        $(".unit_1_lesson_4 .exercise2 .one_pointer").removeClass("active");
                    }
                    $(".unit_1_lesson_4 .exercise2 .feedback_box").hide();
                    $(".unit_1_lesson_4 .exercise2 .close_popup").hide();
                    $(".unit_1_lesson_4 .exercise2 .right_feedback").hide();
                    $(".unit_1_lesson_4 .exercise2 .wrong_feedback").hide();
                    $(".unit_1_lesson_4 .exercise2 .overlay").hide();
                    totalCorrectAns = 0;
                });


            }

            function exerciseFn_3() {

            }

            function exerciseFn_4() {
                var isUserCorrect = true;
                $(".box_1").on('click', function() {
                    $(this).addClass("fill_1");
                });

                $(".box_2").on('click', function() {
                    $(this).addClass("fill_2");
                });

                $(".box_3").on('click', function() {
                    $(this).addClass("fill_3");
                });


                $(".box_4").on('click', function() {
                    $(this).addClass("fill_4");
                });

                $(".unit_1_lesson_4 .exercise4 .submit_btn").off("click").on("click", function() {
                    box_1 = $(".fill_1").length;
                    box_2 = $(".fill_2").length;
                    box_3 = $(".fill_3").length;
                    box_4 = $(".fill_4").length;

                    if (box_1 == 1 && box_2 == 1 && box_3 == 1 && box_4 == 1) {
                        isUserCorrect = true;

                    } else {
                        isUserCorrect = false;
                    }

                    if (isUserCorrect) {
                        $(".unit_1_lesson_4 .exercise4 .feedback_box, .overlay, .right_feedback").fadeIn();
                    } else {
                        $(".unit_1_lesson_4 .exercise4 .feedback_box, .overlay, .wrong_feedback").fadeIn();

                        if (isUserCorrect == false) {
                            $(".unit_1_lesson_4 .exercise4 .close_popup").off("click").on("click", function() {
                                $(".unit_1_lesson_4 .exercise4 .feedback_box, .overlay, .wrong_feedback").hide();
                                $(".box_1").removeClass("fill_1");
                                $(".box_2").removeClass("fill_2");
                                $(".box_3").removeClass("fill_3");
                                $(".box_4").removeClass("fill_4");
                            });

                        }
                    }

                });


                $(".unit_1_lesson_4 .exercise4 .close_popup").on('click', function() {
                    $(".feedback_box, .overlay, .right_feedback").hide();
                    $(".feedback_box, .overlay, .wrong_feedback").hide();

                });

                $(".unit_1_lesson_4 .exercise4 .reload").off("click").on("click", function() {
                    $(".box_1").removeClass("fill_1");
                    $(".box_2").removeClass("fill_2");
                    $(".box_3").removeClass("fill_3");
                    $(".box_4").removeClass("fill_4");
                });
            }
        }

        function unitLesson_5_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {
                var isUserCorrect = true;

                $(".unit1_lesson5 .exercise1 .submit_btn").on("click", function() {
                    firstrow1 = $("#firstrow1").val();
                    firstrow3 = $("#firstrow3").val();
                    firstrow5 = $("#firstrow5").val();

                    secndtrow0 = $("#secndtrow0").val();
                    secndrow2 = $("#secndrow2").val();
                    secndrow4 = $("#secndrow4").val();

                    thredrow1 = $("#thredrow1").val();
                    thredrow2 = $("#thredrow2").val();
                    thredrow3 = $("#thredrow3").val();
                    thredrow4 = $("#thredrow4").val();

                    if (firstrow1 === "1" && firstrow3 === "3" && firstrow5 === "5" && secndtrow0 === "0" && secndrow2 === "2" && secndrow4 === "4" && thredrow1 === "1" && thredrow2 === "2" && thredrow3 === "3" && thredrow4 === "4") {
                        isUserCorrect = true;
                    } else {
                        isUserCorrect = false;

                    }

                    if (isUserCorrect) {
                        $(".unit1_lesson5 .exercise1 .feedback_box, .overlay, .right_feedback").fadeIn();
                        $(".unit1_lesson5 .exercise1 .close_popup").off("click").on("click", function() {
                            $(".unit1_lesson5 .exercise1 .feedback_box, .overlay, .wrong_feedback").hide();
                        });
                    } else {

                        $(".unit1_lesson5 .exercise1 .feedback_box, .overlay, .wrong_feedback").fadeIn();
                        if (isUserCorrect == false) {
                            $(".unit1_lesson5 .exercise1 .close_popup").off("click").on("click", function() {
                                $('input').val('');
                                $(".unit1_lesson5 .exercise1 .feedback_box, .overlay, .wrong_feedback").hide();
                                isUserCorrect = true;
                            });
                        }
                    }

                });
            }

            function exerciseFn_2() {
                var correctAns = ["1_6", "2_1", "3_3", "4_2", "5_5", "6_4"];
                var userAns = ["", "", "", "", "", ""];
                var selectedNod = [];
                var isUserCor = true;
                $(".unit1_lesson5 .exercise2 .clikBox").off("click").on("click", function() {
                    $(this).css("pointer-events", "none");
                    var tempn = $(this).attr("id");

                    var tempFirst = eval(tempn.split("_")[0]);
                    var tempSecond = eval(tempn.split("_")[1]);

                    if (tempFirst == 1) {
                        selectedNod[0] = tempSecond;
                    } else if (tempFirst == 2) {
                        selectedNod[1] = tempSecond;
                    } else if (tempFirst == 3) {
                        selectedNod[2] = tempSecond;
                    } else if (tempFirst == 4) {
                        selectedNod[3] = tempSecond;
                    } else if (tempFirst == 5) {
                        selectedNod[4] = tempSecond;
                    } else if (tempFirst == 6) {
                        selectedNod[5] = tempSecond;
                    }

                    var tempCount = 0;
                    $.each(selectedNod, function(k, v) {
                        if (v != undefined) {
                            tempCount += 1;
                        }
                    });

                    if (tempCount == 2) {
                        $(".unit1_lesson5 .exercise2 .line[set='" + selectedNod[0] + "_" + selectedNod[1] + "']").show();
                        if (userAns[0] == "") {
                            userAns[0] = selectedNod[0] + "_" + selectedNod[1];
                        } else if (userAns[1] == "") {
                            userAns[1] = selectedNod[0] + "_" + selectedNod[1];
                        } else if (userAns[2] == "") {
                            userAns[2] = selectedNod[0] + "_" + selectedNod[1];
                        } else if (userAns[3] == "") {
                            userAns[3] = selectedNod[0] + "_" + selectedNod[1];
                        } else if (userAns[4] == "") {
                            userAns[4] = selectedNod[0] + "_" + selectedNod[1];
                        } else if (userAns[5] == "") {
                            userAns[5] = selectedNod[0] + "_" + selectedNod[1];
                        }
                        selectedNod = [];
                        tempCount = 0;
                    }
                });

                $(".unit1_lesson5 .exercise2 .reload").off("click").on("click", function() {
                    $(".unit1_lesson5 .exercise2 .line").hide();
                    $(".unit1_lesson5 .exercise2 .clikBox").css("pointer-events", "auto");
                    userAns = ["", "", "", "", "", ""];
                    isUserCor = true;
                });

                $(".unit1_lesson5 .exercise2 .submit_btn").off("click").on("click", function() {
                    $.each(userAns, function(k, v) {
                        if (v != correctAns[k]) {
                            isUserCor = false;
                        }
                    });

                    $(".unit1_lesson5 .exercise2 .feedback_box").show();
                    $(".unit1_lesson5 .exercise2 .close_popup").show();
                    $(".unit1_lesson5 .exercise2 .right_feedback").hide();
                    $(".unit1_lesson5 .exercise2 .wrong_feedback").hide();
                    $(".unit1_lesson5 .exercise2 .overlay").show();

                    if (isUserCor) {
                        $(".unit1_lesson5 .exercise2 .right_feedback").show();
                    } else {
                        $(".unit1_lesson5 .exercise2 .wrong_feedback").show();
                    }
                });

                $(".unit1_lesson5 .exercise2 .close_popup").off("click").on("click", function() {
                    $(".unit1_lesson5 .exercise2 .feedback_box").hide();
                    $(".unit1_lesson5 .exercise2 .close_popup").hide();
                    $(".unit1_lesson5 .exercise2 .right_feedback").hide();
                    $(".unit1_lesson5 .exercise2 .wrong_feedback").hide();
                    $(".unit1_lesson5 .exercise2 .overlay").hide();
                    if (!isUserCor) {
                        $(".unit1_lesson5 .exercise2 .line").hide();
                        $(".unit1_lesson5 .exercise2 .clikBox").css("pointer-events", "auto");
                        userAns = ["", "", "", "", "", ""];
                        isUserCor = true;
                    }
                });

            }

            function exerciseFn_3() {
                var correctAns = ["1_2", "2_5", "3_1", "4_3", "5_4"];
                var userAns = ["", "", "", "", ""];
                var selectedNod = [];
                var isUserCor = true;
                $(".unit1_lesson5 .exercise3 .clikBox").off("click").on("click", function() {
                    $(this).css("pointer-events", "none");
                    var tempn = $(this).attr("id");

                    var tempFirst = eval(tempn.split("_")[0]);
                    var tempSecond = eval(tempn.split("_")[1]);

                    if (tempFirst == 1) {
                        selectedNod[0] = tempSecond;
                    } else if (tempFirst == 2) {
                        selectedNod[1] = tempSecond;
                    } else if (tempFirst == 3) {
                        selectedNod[2] = tempSecond;
                    } else if (tempFirst == 4) {
                        selectedNod[3] = tempSecond;
                    } else if (tempFirst == 5) {
                        selectedNod[4] = tempSecond;
                    }


                    var tempCount = 0;
                    $.each(selectedNod, function(k, v) {
                        if (v != undefined) {
                            tempCount += 1;
                        }
                    });

                    if (tempCount == 2) {
                        $(".unit1_lesson5 .exercise3 .line[set='" + selectedNod[0] + "_" + selectedNod[1] + "']").show();
                        if (userAns[0] == "") {
                            userAns[0] = selectedNod[0] + "_" + selectedNod[1];
                        } else if (userAns[1] == "") {
                            userAns[1] = selectedNod[0] + "_" + selectedNod[1];
                        } else if (userAns[2] == "") {
                            userAns[2] = selectedNod[0] + "_" + selectedNod[1];
                        } else if (userAns[3] == "") {
                            userAns[3] = selectedNod[0] + "_" + selectedNod[1];
                        } else if (userAns[4] == "") {
                            userAns[4] = selectedNod[0] + "_" + selectedNod[1];
                        }

                        selectedNod = [];
                        tempCount = 0;
                    }
                });

                $(".unit1_lesson5 .exercise3 .reload").off("click").on("click", function() {
                    $(".unit1_lesson5 .exercise3 .line").hide();
                    $(".unit1_lesson5 .exercise3 .clikBox").css("pointer-events", "auto");
                    userAns = ["", "", "", "", ""];
                    isUserCor = true;
                });

                $(".unit1_lesson5 .exercise3 .submit_btn").off("click").on("click", function() {
                    $.each(userAns, function(k, v) {
                        if (v != correctAns[k]) {
                            isUserCor = false;
                        }
                    });

                    $(".unit1_lesson5 .exercise3 .feedback_box").show();
                    $(".unit1_lesson5 .exercise3 .close_popup").show();
                    $(".unit1_lesson5 .exercise3 .right_feedback").hide();
                    $(".unit1_lesson5 .exercise3 .wrong_feedback").hide();
                    $(".unit1_lesson5 .exercise3 .overlay").show();

                    if (isUserCor) {
                        $(".unit1_lesson5 .exercise3 .right_feedback").show();
                    } else {
                        $(".unit1_lesson5 .exercise3 .wrong_feedback").show();
                    }
                });

                $(".unit1_lesson5 .exercise3 .close_popup").off("click").on("click", function() {
                    $(".unit1_lesson5 .exercise3 .feedback_box").hide();
                    $(".unit1_lesson5 .exercise3 .close_popup").hide();
                    $(".unit1_lesson5 .exercise3 .right_feedback").hide();
                    $(".unit1_lesson5 .exercise3 .wrong_feedback").hide();
                    $(".unit1_lesson5 .exercise3 .overlay").hide();
                    if (!isUserCor) {
                        $(".unit1_lesson5 .exercise3 .line").hide();
                        $(".unit1_lesson5 .exercise3 .clikBox").css("pointer-events", "auto");
                        userAns = ["", "", "", "", ""];
                        isUserCor = true;
                    }
                });

            }

            function exerciseFn_4() {
                var usserSelectedColor = "";
                var isUserCor = true;
                $(".unit1_lesson5 .exercise4 .color_picker").off('click').on('click', function() {
                    usserSelectedColor = $(this).attr('data-cname');
                });
                $(".unit1_lesson5 .exercise4 .catPart").off('click').on('click', function() {
                    var tempPC = $(this).attr('parts');
                    var appCr = usserSelectedColor + "_" + tempPC;
                    usserSelectedColor = "";
                    $(this).removeAttr("id").attr("id", appCr);
                });

                $(".unit1_lesson5 .exercise4 .submit_btn").off('click').on('click', function() {
                    $(".unit1_lesson5 .exercise4 .catPart").each(function(k, v) {
                        if (v.id.split("_")[0] != v.getAttribute("cc")) {
                            isUserCor = false;
                        }
                    });

                    $(".unit1_lesson5 .exercise4 .feedback_box").show();
                    $(".unit1_lesson5 .exercise4 .close_popup").show();
                    $(".unit1_lesson5 .exercise4 .right_feedback").hide();
                    $(".unit1_lesson5 .exercise4 .wrong_feedback").hide();
                    $(".unit1_lesson5 .exercise4 .overlay").show();

                    if (isUserCor) {
                        $(".unit1_lesson5 .exercise4 .right_feedback").show();
                    } else {
                        $(".unit1_lesson5 .exercise4 .wrong_feedback").show();
                    }
                });

                $(".unit1_lesson5 .exercise4 .close_popup").off("click").on("click", function() {
                    $(".unit1_lesson5 .exercise4 .feedback_box").hide();
                    $(".unit1_lesson5 .exercise4 .close_popup").hide();
                    $(".unit1_lesson5 .exercise4 .right_feedback").hide();
                    $(".unit1_lesson5 .exercise4 .wrong_feedback").hide();
                    $(".unit1_lesson5 .exercise4 .overlay").hide();
                    if (!isUserCor) {
                        $(".unit1_lesson5 .exercise4 .catPart").removeAttr("id");
                    }
                });
                $(".unit1_lesson5 .exercise4 .reload").off("click").on("click", function() {
                    $(".unit1_lesson5 .exercise4 .catPart").removeAttr("id");
                    isUserCor = true;
                    usserSelectedColor = "";
                });
            }
        }
    },

    unit_2_Fn: function() {
        unitLesson_1_Fn();
        unitLesson_2_Fn();
        unitLesson_3_Fn();
        unitLesson_4_Fn();
        unitLesson_5_Fn();

        function unitLesson_1_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {}

            function exerciseFn_2() {
                var isUserCorrectOne = true;
                $(".unit2_lession1 .exercise2 .submit_btn").on('click', function() {

                    firstVal = $("#six_number").val();
                    secodVal = $("#seven_number").val();
                    therdVal = $("#eight_number").val();
                    zeroVal = $("#six_text").val();
                    oneVal = $("#seven_text").val();
                    twoVal = $("#eight_text").val();

                    if (firstVal === "666" && secodVal === "777" && therdVal === "888" && zeroVal === "six" && oneVal === "seven" && twoVal === "eight") {
                        isUserCorrectOne = true;
                    } else {
                        isUserCorrectOne = false;
                    }

                    if (isUserCorrectOne) {
                        $(".unit2_lession1 .exercise2 .feedback_box").show();
                        $(".unit2_lession1 .exercise2 .overlay").show();
                        $(".unit2_lession1 .exercise2 .right_feedback").show();

                    } else {
                        $(".unit2_lession1 .exercise2 .feedback_box").show();
                        $(".unit2_lession1 .exercise2 .overlay").show();
                        $(".unit2_lession1 .exercise2 .wrong_feedback").show();

                    }
                });

                $(".unit2_lession1 .exercise2 .close_popup").off("click").on("click", function() {
                    if (isUserCorrectOne == false) {
                        $('.unit2_lession1 .exercise2 .text_area_fill input').each(function() {
                            $(this).val('');
                        });
                    }
                    $(".unit2_lession1 .exercise2 .feedback_box").hide();
                    $(".unit2_lession1 .exercise2 .right_feedback").hide();
                    $(".unit2_lession1 .exercise2 .wrong_feedback").hide();
                    $(".unit2_lession1 .exercise2 .overlay").hide();
                });

                $(".unit2_lession1 .exercise2 .reload").on('click', function() {
                    $('.unit2_lession1 .exercise .text_area_fill input').each(function() {
                        $(this).val('');
                    });
                });
            }

            function exerciseFn_3() {
                var isUserCorrect = true;
                $(".unit2_lession1 .exercise3 .addcollor").on('click', function() {
                    $(this).toggleClass("yellow");
                });
                $(".unit2_lession1 .exercise3 .submit_btn").off("click").on("click", function() {
                    var temp1 = $(".sheep.yellow").length;
                    var temp2 = $(".duck.yellow").length;
                    var temp3 = $(".hen.yellow").length;

                    if (temp1 == 7 && temp2 == 8 && temp3 == 6) {
                        isUserCorrect = true;

                    } else {
                        isUserCorrect = false;
                    }

                    if (isUserCorrect == true) {
                        $(".unit2_lession1 .exercise3 .feedback_box").show();
                        $(".unit2_lession1 .exercise3 .overlay").show();
                        $(".unit2_lession1 .exercise3 .feedback_box .right_feedback").show();
                    } else {
                        $(".unit2_lession1 .exercise3 .feedback_box").show();
                        $(".unit2_lession1 .exercise3 .overlay").show();
                        $(".unit2_lession1 .exercise3 .feedback_box .wrong_feedback").show();
                    }
                });

                $(".unit2_lession1 .exercise3 .close_popup").off("click").on("click", function() {

                    if (isUserCorrect == false) {
                        console.log();
                        $(".unit2_lession1 .exercise3 .addcollor").removeClass("yellow");
                    }
                    $(".unit2_lession1 .exercise3 .feedback_box").hide();
                    $(".unit2_lession1 .exercise3 .right_feedback").hide();
                    $(".unit2_lession1 .exercise3 .wrong_feedback").hide();
                    $(".unit2_lession1 .exercise3 .overlay").hide();
                });

                $(".unit2_lession1 .exercise3 .reload").off("click").on("click", function() {
                    $(".unit2_lession1 .exercise3 .addcollor").removeClass("yellow");
                });

            }

            function exerciseFn_4() {
                var isUserCorrectOne = true;
                $(".unit2_lession1 .exercise4 .numbersClick").on('click', function() {
                    $(this).parent().find(".wrongClick").removeClass("numberBorder2");
                    $(this).addClass("numberBorder");
                });
                $(".unit2_lession1 .exercise4 .wrongClick").on('click', function() {
                    $(this).parent().find(".numbersClick").removeClass("numberBorder");
                    $(this).addClass("numberBorder2");
                });
                $(".unit2_lession1 .exercise4 #submit_exercise4").on('click', function() {
                    sixVal = $("#sixText").val();
                    sevenVal = $("#sevenText").val();
                    eightVal = $("#eightText").val();

                    CorrectLength = $(".numberBorder").length;
                    WrongLength = $(".numberBorder2").length;

                    if (sevenVal === "seven" && eightVal === "eight" && sixVal === "six" && CorrectLength === 2 && WrongLength === 0) {
                        isUserCorrectOne = true;
                    } else {
                        isUserCorrectOne = false;
                    }

                    if (isUserCorrectOne) {
                        $(".unit2_lession1 .exercise4 .feedback_box").show();
                        $(".unit2_lession1 .exercise4 .overlay").show();
                        $(".unit2_lession1 .exercise4 .right_feedback").show();

                    } else {
                        $(".unit2_lession1 .exercise4 .feedback_box").show();
                        $(".unit2_lession1 .exercise4 .overlay").show();
                        $(".unit2_lession1 .exercise4 .wrong_feedback").show();

                    }
                });

                $(".unit2_lession1 .exercise4 .close_popup").off("click").on("click", function() {
                    // alert(111); 
                    if (isUserCorrectOne == false) {
                        $('.unit2_lession1 .exercise4 .inputArea input').each(function() {
                            $(this).val('');
                        });
                        $(".numbers").removeClass("numberBorder2");
                        $(".numbers").removeClass("numberBorder");
                    }
                    $(".unit2_lession1 .exercise4 .feedback_box").hide();
                    $(".unit2_lession1 .exercise4 .right_feedback").hide();
                    $(".unit2_lession1 .exercise4 .wrong_feedback").hide();
                    $(".unit2_lession1 .exercise4 .overlay").hide();
                });

                $(".unit2_lession1 .exercise4 .reload").on('click', function() {
                    $('.unit2_lession1 .exercise4 .inputArea input').each(function() {
                        $(this).val('');
                    });
                    $(".numbers").removeClass("numberBorder2");
                    $(".numbers").removeClass("numberBorder");
                });
            }
        }

        function unitLesson_2_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {

                $(".unit_2_lesson_2 .exercise2 .click_btn").on('click', function() {
                    $(this).addClass("add_color");
                });

                $(".unit_2_lesson_2 .exercise2 .submit_btn").on('click', function() {
                    getClassVal = $(".add_color").length;

                    if (getClassVal == 4) {
                        $(".unit_2_lesson_2 .exercise2 .feedback_box, .overlay, .right_feedback").fadeIn();
                    } else {
                        $(".unit_2_lesson_2 .exercise2 .close_popup").off("click").on("click", function() {
                            $(".unit_2_lesson_2 .exercise2 .click_btn").removeClass("add_color")
                            $(".unit_2_lesson_2 .exercise2 .feedback_box").hide();
                            $(".unit_2_lesson_2 .exercise2 .right_feedback").hide();
                            $(".unit_2_lesson_2 .exercise2 .wrong_feedback").hide();
                            $(".unit_2_lesson_2 .exercise2 .overlay").hide();
                        });
                        $(".unit_2_lesson_2 .exercise2 .feedback_box, .overlay, .wrong_feedback").fadeIn();
                    }
                });

                $(".unit_2_lesson_2 .exercise2 .close_popup").off("click").on("click", function() {
                    $(".unit_2_lesson_2 .exercise2 .feedback_box").hide();
                    $(".unit_2_lesson_2 .exercise2 .right_feedback").hide();
                    $(".unit_2_lesson_2 .exercise2 .wrong_feedback").hide();
                    $(".unit_2_lesson_2 .exercise2 .overlay").hide();
                });


                $(".unit_2_lesson_2 .exercise2 .reload").on('click', function() {
                    $(".unit_2_lesson_2 .exercise2 .click_btn").removeClass("add_color");
                });


            }

            function exerciseFn_3() {

            }

            function exerciseFn_4() {
                $(".unit_2_lesson_2 .exercise4 .click_btn1").on('click', function() {
                    $(this).addClass("add_color");
                });

                $(".unit_2_lesson_2 .exercise4 .submit_btn").on('click', function() {
                    getClassVal = $(".add_color").length;

                    if (getClassVal == 4) {
                        $(".unit_2_lesson_2 .exercise4 .feedback_box, .overlay, .right_feedback").fadeIn();
                    } else {
                        $(".unit_2_lesson_2 .exercise4 .close_popup").off("click").on("click", function() {
                            $(".unit_2_lesson_2 .exercise4 .click_btn1").removeClass("add_color")
                            $(".unit_2_lesson_2 .exercise4 .feedback_box").hide();
                            $(".unit_2_lesson_2 .exercise4 .right_feedback").hide();
                            $(".unit_2_lesson_2 .exercise4 .wrong_feedback").hide();
                            $(".unit_2_lesson_2 .exercise4 .overlay").hide();
                        });
                        $(".unit_2_lesson_2 .exercise4 .feedback_box, .overlay, .wrong_feedback").fadeIn();
                    }
                });

                $(".unit_2_lesson_2 .exercise4 .close_popup").off("click").on("click", function() {
                    $(".unit_2_lesson_2 .exercise4 .feedback_box").hide();
                    $(".unit_2_lesson_2 .exercise4 .right_feedback").hide();
                    $(".unit_2_lesson_2 .exercise4 .wrong_feedback").hide();
                    $(".unit_2_lesson_2 .exercise4 .overlay").hide();
                });

                $(".unit_2_lesson_2 .exercise4 .reload").on('click', function() {
                    $(".unit_2_lesson_2 .exercise4 .click_btn1").removeClass("add_color");
                });
            }
        }

        function unitLesson_3_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {

                $(".unit_2_lesson_3 .exercise2 .submit_btn").on('click', function() {

                    NineNumberVal = $("#nine_number").val();
                    NineTextrVal = $("#nine_text").val();

                    TenNumberVal = $("#ten_number").val();
                    tenTextrVal = $("#ten_text").val();

                    if (NineNumberVal === "999" && TenNumberVal === "101010" && NineTextrVal === "nine" && tenTextrVal === "ten") {
                        $(".unit_2_lesson_3 .exercise2 .feedback_box, .overlay, .right_feedback").fadeIn();

                    } else {

                        $(".unit_2_lesson_3 .exercise2 .feedback_box, .overlay, .wrong_feedback").fadeIn();
                    }
                });

                $(".unit_2_lesson_3 .exercise2 .close_popup").off("click").on("click", function() {
                    $(".unit_2_lesson_3 .exercise2 .feedback_box").hide();
                    $(".unit_2_lesson_3 .exercise2 .right_feedback").hide();
                    $(".unit_2_lesson_3 .exercise2 .wrong_feedback").hide();
                    $(".unit_2_lesson_3 .exercise2 .overlay").hide();
                });
            }

            function exerciseFn_3() {

                $(".unit_2_lesson_3 .exercise3 .submit_btn").on('click', function() {

                    ten_number_l3 = $("#ten_number_l3").val();
                    ten_text_l3 = $(".ten_text_l3").val();

                    nine_number_l3 = $("#nine_number_l3").val();
                    nine_text_l3 = $("#nine_text_l3").val();

                    if (ten_number_l3 === "10" && ten_text_l3 === "ten" && nine_number_l3 === "9" && nine_text_l3 === "nine") {
                        $(".unit_2_lesson_3 .exercise3 .feedback_box, .overlay, .right_feedback").fadeIn();
                    } else {
                        $(".unit_2_lesson_3 .exercise3 .close_popup").off("click").on("click", function() {
                            console.log()
                            $(".unit_2_lesson_3 .exercise3 .feedback_box").hide();
                            $(".unit_2_lesson_3 .exercise3 .right_feedback").hide();
                            $(".unit_2_lesson_3 .exercise3 .wrong_feedback").hide();
                            $(".unit_2_lesson_3 .exercise3 .overlay").hide();
                            $('.unit_2_lesson_3 .exercise3 .input_area_box input').each(function() {
                                $(this).val('');
                            });
                        });
                        $(".unit_2_lesson_3 .exercise3 .feedback_box, .overlay, .wrong_feedback").fadeIn();
                    }
                });
                $(".unit_2_lesson_3 .exercise3 .close_popup").off("click").on("click", function() {
                    $(".unit_2_lesson_3 .exercise3 .feedback_box").hide();
                    $(".unit_2_lesson_3 .exercise3 .right_feedback").hide();
                    $(".unit_2_lesson_3 .exercise3 .wrong_feedback").hide();
                    $(".unit_2_lesson_3 .exercise3 .overlay").hide();
                });

            }

            function exerciseFn_4() {


                $(".unit_2_lesson_3 .exercise4 .dreg_box_item").draggable({
                    containment: ".unit_2_lesson_3 .exercise4",
                    zIndex: 10000,
                    revert: function(event, ui) {
                        $(this).data("uiDraggable").originalPosition = {
                            top: 0,
                            left: 0
                        };
                        return !event;
                    }
                });

                $(".unit_2_lesson_3 .exercise4 .drop_box").droppable({
                    drop: function(event, ui) {
                        var getDropedElmLen = $(this).children(".dreg_box_item").length;
                        if (getDropedElmLen <= 10) {
                            $(this).append($(ui.draggable).clone());
                        } else {
                            ui.draggable.mouseup();
                        }
                        ui.draggable.removeAttr("style").css("position", "relative");
                    }
                });

                var totalring = 0;
                var totalball = 0;
                var isUserCorrect = false;

                $(".unit_2_lesson_3 .exercise4 .submit_btn").off("click").on("click", function() {
                    $(".unit_2_lesson_3 .exercise4 .drop_box .dreg_box_item").each(function(k, v) {
                        if (v.id == "ring") {
                            totalring += 1;
                        } else if (v.id == "ball") {
                            totalball += 1;
                        }

                    });

                    $(".unit_2_lesson_3 .exercise4 .feedback_box, .unit_2_lesson_3 .exercise4 .close_popup").show();
                    $(".unit_2_lesson_3 .exercise4 .right_feedback").hide();
                    $(".unit_2_lesson_3 .exercise4 .wrong_feedback").hide();
                    $(".unit_2_lesson_3 .exercise4 .overlay").hide();

                    if (totalring == 8 && totalball === 9) {
                        isUserCorrect = true;
                        $(".unit_2_lesson_3 .exercise4 .right_feedback").show();
                        $(".unit_2_lesson_3 .exercise4 .overlay").show();
                    } else {
                        $(".unit_2_lesson_3 .exercise4 .wrong_feedback").show();
                        $(".unit_2_lesson_3 .exercise4 .overlay").show();
                    }
                });

                $(".unit_2_lesson_3 .exercise4 .reload").off("click").on("click", function() {
                    totalring = 0;
                    totalball = 0;

                    isUserCorrect = false;
                    $(".unit_2_lesson_3 .exercise4 .drop_box").html("");
                });

                $(".unit_2_lesson_3 .exercise4 .close_popup").off("click").on("click", function() {
                    if (!isUserCorrect) {
                        totalring = 0;
                        totalball = 0;
                        isUserCorrect = false;
                        $(".unit_2_lesson_3 .exercise4 .drop_box").html("");
                    }
                    $(".unit_2_lesson_3 .exercise4 .feedback_box, .unit_2_lesson_3 .exercise4 .close_popup").hide();
                    $(".unit_2_lesson_3 .exercise4 .right_feedback").hide();
                    $(".unit_2_lesson_3 .exercise4 .wrong_feedback").hide();
                    $(".unit_2_lesson_3 .exercise4 .overlay").hide();
                });

            }
        }

        function unitLesson_4_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {
                $(".unit_2_lesson_4 .exercise2 .click_box").on('click', function() {
                    $(this).addClass("red_color");
                });
                $(".unit_2_lesson_4 .exercise2 .submit_btn").on('click', function() {
                    getLenghtRed = $(".red_color").length;

                    if (getLenghtRed == 7) {
                        $(".feedback_box, .overlay, .right_feedback").fadeIn();
                        $(".unit_2_lesson_4 .exercise2 .wrong_feedback").hide();
                    } else {
                        $(".unit_2_lesson_4 .exercise2 .close_popup").off("click").on("click", function() {
                            $(".unit_2_lesson_4 .exercise2 .click_box").removeClass("red_color");
                            $(".unit_2_lesson_4 .exercise2 .feedback_box").hide();
                            $(".unit_2_lesson_4 .exercise2 .right_feedback").hide();
                            $(".unit_2_lesson_4 .exercise2 .wrong_feedback").hide();
                            $(".unit_2_lesson_4 .exercise2 .overlay").hide();
                        });
                        $(".feedback_box, .overlay, .wrong_feedback").fadeIn();
                        $(".unit_2_lesson_4 .exercise2 .right_feedback").hide();
                    }
                });

                $(".unit_2_lesson_4 .exercise2 .close_popup").off("click").on("click", function() {
                    $(".unit_2_lesson_4 .exercise2 .feedback_box").hide();
                    $(".unit_2_lesson_4 .exercise2 .right_feedback").hide();
                    $(".unit_2_lesson_4 .exercise2 .wrong_feedback").hide();
                    $(".unit_2_lesson_4 .exercise2 .overlay").hide();
                });



            }

            function exerciseFn_3() {

            }

            function exerciseFn_4() {
                $(".unit_2_lesson_4 .exercise4 .click_box").on('click', function() {
                    $(this).addClass("red_color");
                });
                $(".unit_2_lesson_4 .exercise4 .submit_btn").on('click', function() {
                    getLenghtRed = $(".red_color").length;

                    if (getLenghtRed == 4) {
                        $(".unit_2_lesson_4 .exercise4 .feedback_box, .overlay, .right_feedback").fadeIn();
                        $(".unit_2_lesson_4 .exercise4 .wrong_feedback").hide();
                    } else {
                        $(".unit_2_lesson_4 .exercise4 .feedback_box, .overlay, .wrong_feedback").fadeIn();
                        $(".unit_2_lesson_4 .exercise4 .right_feedback").hide();
                    }
                });

                $(".unit_2_lesson_4 .exercise4 .close_popup").off("click").on("click", function() {
                    $(".unit_2_lesson_4 .exercise4 .feedback_box").hide();
                    $(".unit_2_lesson_4 .exercise4 .right_feedback").hide();
                    $(".unit_2_lesson_4 .exercise4 .wrong_feedback").hide();
                    $(".unit_2_lesson_4 .exercise4 .overlay").hide();
                });



            }
        }

        function unitLesson_5_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

                var correctAns = ["1_2", "2_1", "3_4", "4_3"];
                var userAns = ["", "", "", ""];
                var selectedNod = [];
                var isUserCor = true;
                $(".unit2_lesson5 .exercise1 .clikBox").off("click").on("click", function() {

                    $(this).css("pointer-events", "none");
                    var tempn = $(this).attr("id");

                    var tempFirst = eval(tempn.split("_")[0]);
                    var tempSecond = eval(tempn.split("_")[1]);

                    if (tempFirst == 1) {
                        selectedNod[0] = tempSecond;
                    } else if (tempFirst == 2) {
                        selectedNod[1] = tempSecond;
                    } else if (tempFirst == 3) {
                        selectedNod[2] = tempSecond;
                    } else if (tempFirst == 4) {
                        selectedNod[3] = tempSecond;
                    }



                    var tempCount = 0;
                    $.each(selectedNod, function(k, v) {
                        if (v != undefined) {
                            tempCount += 1;
                        }
                    });

                    if (tempCount == 2) {
                        $(".unit2_lesson5 .exercise1 .line[set='" + selectedNod[0] + "_" + selectedNod[1] + "']").show();
                        if (userAns[0] == "") {
                            userAns[0] = selectedNod[0] + "_" + selectedNod[1];
                        } else if (userAns[1] == "") {
                            userAns[1] = selectedNod[0] + "_" + selectedNod[1];
                        } else if (userAns[2] == "") {
                            userAns[2] = selectedNod[0] + "_" + selectedNod[1];
                        } else if (userAns[3] == "") {
                            userAns[3] = selectedNod[0] + "_" + selectedNod[1];
                        }


                        selectedNod = [];
                        tempCount = 0;
                    }
                });

                $(".unit2_lesson5 .exercise1 .reload").off("click").on("click", function() {
                    $(".unit2_lesson5 .exercise1 .line").hide();
                    $(".unit2_lesson5 .exercise1 .clikBox").css("pointer-events", "auto");
                    userAns = ["", "", "", ""];
                    isUserCor = true;
                });

                $(".unit2_lesson5 .exercise1 .submit_btn").off("click").on("click", function() {
                    $.each(userAns, function(k, v) {
                        if (v != correctAns[k]) {
                            isUserCor = false;
                        }
                    });

                    $(".unit2_lesson5 .exercise1 .feedback_box").show();
                    $(".unit2_lesson5 .exercise1 .close_popup").show();
                    $(".unit2_lesson5 .exercise1 .right_feedback").hide();
                    $(".unit2_lesson5 .exercise1 .wrong_feedback").hide();
                    $(".unit2_lesson5 .exercise1 .overlay").show();

                    if (isUserCor) {
                        $(".unit2_lesson5 .exercise1 .right_feedback").show();
                    } else {
                        $(".unit2_lesson5 .exercise1 .wrong_feedback").show();
                    }
                });

                $(".unit2_lesson5 .exercise1 .close_popup").off("click").on("click", function() {
                    $(".unit2_lesson5 .exercise1 .feedback_box").hide();
                    $(".unit2_lesson5 .exercise1 .close_popup").hide();
                    $(".unit2_lesson5 .exercise1 .right_feedback").hide();
                    $(".unit2_lesson5 .exercise1 .wrong_feedback").hide();
                    $(".unit2_lesson5 .exercise1 .overlay").hide();
                    if (!isUserCor) {
                        $(".unit2_lesson5 .exercise1 .line").hide();
                        $(".unit2_lesson5 .exercise1 .clikBox").css("pointer-events", "auto");
                        userAns = ["", "", "", ""];
                        isUserCor = true;
                    }
                });


            }

            function exerciseFn_2() {
                var isUserCorrectOne = true;
                $(".unit2_lesson5 .exercise2 .correctBox").on('click', function() {
                    $(this).parent().find(".wrongBox").removeClass("check_wrong");
                    $(this).addClass("check_correct");
                });
                $(".unit2_lesson5 .exercise2 .wrongBox").on('click', function() {
                    $(this).parent().find(".correctBox").removeClass("check_correct");
                    $(this).addClass("check_wrong");
                });

                $(".unit2_lesson5 .exercise2 .submit_btn").on('click', function() {

                    checkWrong = $(".check_wrong").length;
                    checkCorrect = $(".check_correct").length;

                    if (checkWrong === 0 && checkCorrect === 4) {
                        isUserCorrectOne = true;
                    } else {
                        isUserCorrectOne = false;
                    }
                    if (isUserCorrectOne) {
                        $(".unit2_lesson5 .exercise2 .feedback_box").show();
                        $(".unit2_lesson5 .exercise2 .overlay").show();
                        $(".unit2_lesson5 .exercise2 .right_feedback").show();

                    } else {
                        $(".unit2_lesson5 .exercise2 .feedback_box").show();
                        $(".unit2_lesson5 .exercise2 .overlay").show();
                        $(".unit2_lesson5 .exercise2 .wrong_feedback").show();

                    }
                });

                $(".unit2_lesson5 .exercise2 .close_popup").off("click").on("click", function() {
                    if (isUserCorrectOne == false) {
                        $(".check_wrong").parent().find(".correctBox").addClass("check_correct2")
                    }

                    $(".unit2_lesson5 .exercise2 .feedback_box").hide();
                    $(".unit2_lesson5 .exercise2 .right_feedback").hide();
                    $(".unit2_lesson5 .exercise2 .wrong_feedback").hide();
                    $(".unit2_lesson5 .exercise2 .overlay").hide();

                });

                $(".unit2_lesson5 .exercise2 .reload").on('click', function() {
                    $(".wrongBox").removeClass("check_wrong");
                    $(".correctBox").removeClass("check_correct");
                    $(".correctBox").removeClass("check_correct2");
                });
            }

            function exerciseFn_3() {
                var isUserCorrectOne = true;
                $(".unit2_lesson5 .exercise3 .sixText").on('click', function() {
                    $(this).addClass("six_color");
                });
                $(".unit2_lesson5 .exercise3 .sixNumber").on('click', function() {
                    $(this).addClass("six_color");
                });
                $(".unit2_lesson5 .exercise3 .sevenText").on('click', function() {
                    $(this).addClass("seven_color");
                });
                $(".unit2_lesson5 .exercise3 .sevenNumber").on('click', function() {
                    $(this).addClass("seven_color");
                });
                $(".unit2_lesson5 .exercise3 .eightText").on('click', function() {
                    $(this).addClass("eight_color");
                });
                $(".unit2_lesson5 .exercise3 .eightNumber").on('click', function() {
                    $(this).addClass("eight_color");
                });
                $(".unit2_lesson5 .exercise3 .nineText").on('click', function() {
                    $(this).addClass("nine_color");
                });
                $(".unit2_lesson5 .exercise3 .nineNumber").on('click', function() {
                    $(this).addClass("nine_color");
                });
                $(".unit2_lesson5 .exercise3 .tenText").on('click', function() {
                    $(this).addClass("ten_color");
                });
                $(".unit2_lesson5 .exercise3 .tenNumber").on('click', function() {
                    $(this).addClass("ten_color");
                });

                $(".unit2_lesson5 .exercise3 .submit_btn").on('click', function() {
                    sixColor = $(".six_color").length;
                    sevenColor = $(".seven_color").length;
                    eightColor = $(".eight_color").length;
                    nineColor = $(".nine_color").length;
                    tenColor = $(".ten_color").length;

                    if (sixColor === 2 && sevenColor === 2 && eightColor === 2 && nineColor === 2 && tenColor === 2) {
                        isUserCorrectOne = true;
                    } else {
                        isUserCorrectOne = false;
                    }
                    if (isUserCorrectOne) {
                        $(".unit2_lesson5 .exercise3 .feedback_box").show();
                        $(".unit2_lesson5 .exercise3 .overlay").show();
                        $(".unit2_lesson5 .exercise3 .right_feedback").show();

                    } else {
                        $(".unit2_lesson5 .exercise3 .feedback_box").show();
                        $(".unit2_lesson5 .exercise3 .overlay").show();
                        $(".unit2_lesson5 .exercise3 .wrong_feedback").show();

                    }
                });
                $(".unit2_lesson5 .exercise3 .close_popup").off("click").on("click", function() {
                    if (isUserCorrectOne == false) {
                        $(".sixText, .sixNumber").removeClass("six_color");
                        $(".sevenText, .sevenNumber").removeClass("seven_color");
                        $(".eightText, .eightNumber").removeClass("eight_color");
                        $(".nineText, .nineNumber").removeClass("nine_color");
                        $(".tenText, .tenNumber").removeClass("ten_color");
                    }

                    $(".unit2_lesson5 .exercise3 .feedback_box").hide();
                    $(".unit2_lesson5 .exercise3 .right_feedback").hide();
                    $(".unit2_lesson5 .exercise3 .wrong_feedback").hide();
                    $(".unit2_lesson5 .exercise3 .overlay").hide();

                });
                $(".reload").on('click', function() {

                    $(".sixText, .sixNumber").removeClass("six_color");
                    $(".sevenText, .sevenNumber").removeClass("seven_color");
                    $(".eightText, .eightNumber").removeClass("eight_color");
                    $(".nineText, .nineNumber").removeClass("nine_color");
                    $(".tenText, .tenNumber").removeClass("ten_color");
                });
            }

            function exerciseFn_4() {
                var isUserCorrectOne = true;
                $(".unit2_lesson5 .exercise4 .submit_btn").on("click", function() {

                    firstrow2 = $("#firstrow2").val();
                    firstrow4 = $("#firstrow4").val();
                    firstrow6 = $("#firstrow6").val();
                    firstrow8 = $("#firstrow8").val();
                    firstrow10 = $("#firstrow10").val();

                    secondrow1 = $("#secondrow1").val();
                    secondrow3 = $("#secondrow3").val();
                    secondrow5 = $("#secondrow5").val();
                    secondrow7 = $("#secondrow7").val();
                    secondrow9 = $("#secondrow9").val();

                    thirdrow2 = $("#thirdrow2").val();
                    thirdrow3 = $("#thirdrow3").val();
                    thirdrow4 = $("#thirdrow4").val();
                    thirdrow5 = $("#thirdrow5").val();
                    thirdrow6 = $("#thirdrow6").val();
                    thirdrow7 = $("#thirdrow7").val();
                    thirdrow8 = $("#thirdrow8").val();
                    thirdrow9 = $("#thirdrow9").val();

                    if (firstrow2 === "2" && firstrow4 === "4" && firstrow6 === "6" && firstrow8 === "8" && firstrow10 === "10" && secondrow1 === "1" && secondrow3 === "3" && secondrow5 === "5" && secondrow7 === "7" && secondrow9 === "9" && thirdrow2 === "2" && thirdrow3 === "3" && thirdrow4 === "4" && thirdrow5 === "5" && thirdrow6 === "6" && thirdrow7 === "7" && thirdrow8 === "8" && thirdrow9 === "9") {
                        isUserCorrectOne = true;
                    } else {
                        isUserCorrectOne = false;
                    }
                    if (isUserCorrectOne) {
                        $(".unit2_lesson5 .exercise4 .feedback_box").show();
                        $(".unit2_lesson5 .exercise4 .overlay").show();
                        $(".unit2_lesson5 .exercise4 .right_feedback").show();

                    } else {
                        $(".unit2_lesson5 .exercise4 .feedback_box").show();
                        $(".unit2_lesson5 .exercise4 .overlay").show();
                        $(".unit2_lesson5 .exercise4 .wrong_feedback").show();

                    }
                });
                $(".unit2_lesson5 .exercise4 .close_popup").off("click").on("click", function() {
                    if (isUserCorrectOne == false) {
                        $('.unit2_lesson5 .exercise4 .conting_point input').each(function() {
                            $(this).val('');
                        });
                    }
                    $(".unit2_lesson5 .exercise4 .feedback_box").hide();
                    $(".unit2_lesson5 .exercise4 .right_feedback").hide();
                    $(".unit2_lesson5 .exercise4 .wrong_feedback").hide();
                    $(".unit2_lesson5 .exercise4 .overlay").hide();
                });

                $(".unit2_lesson5 .exercise4 .reload").on('click', function() {
                    $('.unit2_lesson5 .exercise4 .conting_point input').each(function() {
                        $(this).val('');
                    });
                });
            }
        }
    },

    unit_3_Fn: function() {

        unitLesson_1_Fn();
        unitLesson_2_Fn();
        unitLesson_3_Fn();
        unitLesson_4_Fn();
        unitLesson_5_Fn();

            function unitLesson_1_Fn() {
                exerciseFn_1();
                exerciseFn_2();
                exerciseFn_3();
                exerciseFn_4();

                    function exerciseFn_1() {

                    }

                    function exerciseFn_2() {

                        var isUserCorrectOne = true;
                        $(".unit_3_lesson_1 .exercise2 .submit_btn").on("click", function() {

                                elevenNumberVal= $("#eleven_number").val();
                                elevenTextVal= $("#eleven_text").val();

                                twelveNumberVal= $("#tvelve_number").val();
                                twelveTextVal= $("#tvelve_text").val();
                            

                            if (elevenNumberVal === "111111" && elevenTextVal === "eleven" && twelveNumberVal === "121212" && twelveTextVal === "twelve" ) {
                                isUserCorrectOne = true;
                            } else {
                                isUserCorrectOne = false;
                            }
                            if (isUserCorrectOne) {
                                $(".unit_3_lesson_1 .exercise2 .feedback_box").show();
                                $(".unit_3_lesson_1 .exercise2 .overlay").show();
                                $(".unit_3_lesson_1 .exercise2 .right_feedback").show();

                            } else {
                                $(".unit_3_lesson_1 .exercise2 .feedback_box").show();
                                $(".unit_3_lesson_1 .exercise2 .overlay").show();
                                $(".unit_3_lesson_1 .exercise2 .wrong_feedback").show();

                            }
                        });
                        $(".unit_3_lesson_1 .exercise2 .close_popup").off("click").on("click", function() {
                            if (isUserCorrectOne == false) {
                                $('.unit_3_lesson_1 .exercise2 .conting_point input').each(function() {
                                    $(this).val('');
                                });
                            }
                            $(".unit_3_lesson_1 .exercise2 .feedback_box").hide();
                            $(".unit_3_lesson_1 .exercise2 .right_feedback").hide();
                            $(".unit_3_lesson_1 .exercise2 .wrong_feedback").hide();
                            $(".unit_3_lesson_1 .exercise2 .overlay").hide();
                        });

                        $(".unit_3_lesson_1 .exercise2 .reload").on('click', function() {
                            $('.unit_3_lesson_1 .exercise2 .main_box input').each(function() {
                                $(this).val('');
                            });
                        });
                    
                    }

                    function exerciseFn_3() {

                        $(".unit_3_lesson_1 .exercise_3 .dreg_box_item").draggable({
                            containment: ".unit_3_lesson_1 .exercise_3",
                            zIndex: 9,
                            revert: function(event, ui) {
                                $(this).data("uiDraggable").originalPosition = {
                                    top: 0,
                                    left: 0
                                };
                                return !event;
                            }
                        });

                        $(".unit_3_lesson_1 .exercise_3 .drop_Box").droppable({
                            drop: function(event, ui) {
                                var getDropedElmLen = $(this).children(".dreg_box_item").length;
                                if (getDropedElmLen <= 20) {
                                    $(this).append($(ui.draggable).clone());
                                } else {
                                    ui.draggable.mouseup();
                                }
                                ui.draggable.removeAttr("style").css("position", "relative");
                            }
                        });

                        var totalcircles = 0;
                        var totaltriangles = 0;
                        var isUserCorrect = false;

                        $(".unit_3_lesson_1 .exercise_3 .submit_btn").off("click").on("click", function() {
                            $(".unit_3_lesson_1 .exercise_3 .drop_Box .dreg_box_item").each(function(k, v) {
                                if (v.id == "circles") {
                                    totalcircles += 1;
                                } else if (v.id == "triangles") {
                                    totaltriangles += 1;
                                }

                            });

                            $(".unit_3_lesson_1 .exercise_3 .feedback_box, .unit_3_lesson_1 .exercise_3 .close_popup").show();
                            $(".unit_3_lesson_1 .exercise_3 .right_feedback").hide();
                            $(".unit_3_lesson_1 .exercise_3 .wrong_feedback").hide();
                            $(".unit_3_lesson_1 .exercise_3 .overlay").hide();

                            if (totalcircles == 11 && totaltriangles === 12) {
                                isUserCorrect = true;
                                $(".unit_3_lesson_1 .exercise_3 .right_feedback").show();
                                $(".unit_3_lesson_1 .exercise_3 .overlay").show();
                            } else {
                                $(".unit_3_lesson_1 .exercise_3 .wrong_feedback").show();
                                $(".unit_3_lesson_1 .exercise_3 .overlay").show();
                            }
                        });

                        $(".unit_3_lesson_1 .exercise_3 .reload").off("click").on("click", function() {
                            $(".unit_3_lesson_1 .exercise_3 .drop_Box").html("");
                            totalcircles = 0;
                            totaltriangles = 0;

                            isUserCorrect = false;
                            $(".unit_3_lesson_1 .exercise_3 .drop_Box").html("");
                        });

                        $(".unit_3_lesson_1 .exercise_3 .close_popup").off("click").on("click", function() {
                            if (!isUserCorrect) {
                                totalcircles = 0;
                                totaltriangles = 0;
                                isUserCorrect = false;
                                $(".unit_3_lesson_1 .exercise_3 .drop_Box").html("");
                            }
                            $(".unit_3_lesson_1 .exercise_3 .feedback_box, .unit_3_lesson_1 .exercise_3 .close_popup").hide();
                            $(".unit_3_lesson_1 .exercise_3 .right_feedback").hide();
                            $(".unit_3_lesson_1 .exercise_3 .wrong_feedback").hide();
                            $(".unit_3_lesson_1 .exercise_3 .overlay").hide();
                        });

                    }

                    function exerciseFn_4() {
                        var bagLength = 0;
                        var bookLength = 0;
                        var isUserCorrect = true;
                        $(".unit_3_lesson_1 .exercise_4 .bag_box").off('click').on('click', function() {
                            $(this).toggleClass("bag_active");
                        });
                        $(".unit_3_lesson_1 .exercise_4 .book_box").off('click').on('click', function() {
                            $(this).toggleClass("book_active");
                        });

                        $(".unit_3_lesson_1 .exercise_4 .submit_btn").on("click", function() {
                            bagLength = $(".bag_active").length;
                            bookLength = $(".book_active").length;

                            if (bagLength == 11 && bookLength == 12) {
                                isUserCorrect = true;
                                $(".unit_3_lesson_1 .exercise_4 .feedback_box").show();
                                $(".unit_3_lesson_1 .exercise_4 .right_feedback").show();
                                $(".unit_3_lesson_1 .exercise_4 .overlay").show();

                            } else {
                                isUserCorrect = false;
                                if (isUserCorrect == false) {
                                    $(".unit_3_lesson_1 .exercise_4 .close_popup").off("click").on("click", function() {
                                        $(".unit_3_lesson_1 .exercise_4 .feedback_box").hide();
                                        $(".unit_3_lesson_1 .exercise_4 .right_feedback").hide();
                                        $(".unit_3_lesson_1 .exercise_4 .wrong_feedback").hide();
                                        $(".unit_3_lesson_1 .exercise_4 .overlay").hide();
                                        $(".bag_box").removeClass("bag_active");
                                        $(".book_box").removeClass("book_active");
                                    });
                                }
                                $(".unit_3_lesson_1 .exercise_4 .feedback_box").show();
                                $(".unit_3_lesson_1 .exercise_4 .wrong_feedback").show();
                                $(".unit_3_lesson_1 .exercise_4 .overlay").show();

                            }
                        });
                        $(".unit_3_lesson_1 .exercise_4 .close_popup").off("click").on("click", function() {
                            $(".unit_3_lesson_1 .exercise_4 .feedback_box").hide();
                            $(".unit_3_lesson_1 .exercise_4 .right_feedback").hide();
                            $(".unit_3_lesson_1 .exercise_4 .wrong_feedback").hide();
                            $(".unit_3_lesson_1 .exercise_4 .overlay").hide();
                        });
                    }

                }

                function unitLesson_2_Fn() {            
                exerciseFn_1();
                exerciseFn_2();
                exerciseFn_3();
                exerciseFn_4();

                function exerciseFn_1(){

                }

                function exerciseFn_2(){
                   
                }

                function exerciseFn_3(){
                    
                }

                function exerciseFn_4(){
                    
                }
            }

            function unitLesson_2_Fn() {
                exerciseFn_1();
                exerciseFn_2();
                exerciseFn_3();
                exerciseFn_4();

                function exerciseFn_1() {

                }

                function exerciseFn_2() {
                    var isUserCorrectOne = true;
                    $(".unit_3_lesson_2 .exercise2 .submit_btn").on('click', function() {

                        firstVal = $("#numberTwo").val();
                        secondVal = $("#numberFour").val();
                        thirdVal = $("#numberThree").val();

                        if (firstVal === "2" && secondVal === "4" && thirdVal === "3") {
                            isUserCorrectOne = true;
                        } else {
                            isUserCorrectOne = false;
                        }

                        if (isUserCorrectOne) {
                            $(".unit_3_lesson_2 .exercise2 .feedback_box").show();
                            $(".unit_3_lesson_2 .exercise2 .overlay").show();
                            $(".unit_3_lesson_2 .exercise2 .right_feedback").show();

                        } else {
                            $(".unit_3_lesson_2 .exercise2 .feedback_box").show();
                            $(".unit_3_lesson_2 .exercise2 .overlay").show();
                            $(".unit_3_lesson_2 .exercise2 .wrong_feedback").show();

                        }
                    });

                    $(".unit_3_lesson_2 .exercise2 .close_popup").off("click").on("click", function() {
                        if (isUserCorrectOne == false) {
                            $('.unit_3_lesson_2 .exercise2 input').each(function() {
                                $(this).val('');
                            });
                        }
                        $(".unit_3_lesson_2 .exercise2 .feedback_box").hide();
                        $(".unit_3_lesson_2 .exercise2 .right_feedback").hide();
                        $(".unit_3_lesson_2 .exercise2 .wrong_feedback").hide();
                        $(".unit_3_lesson_2 .exercise2 .overlay").hide();
                    });

                    $(".unit_3_lesson_2 .exercise2 .reload").on('click', function() {
                        $('.unit_3_lesson_2 .exercise input').each(function() {
                            $(this).val('');
                        });
                    });
                }

                function exerciseFn_3() {
                    var isUserCorrectOne = true;
                    $(".unit_3_lesson_2 .exercise3 .submit_btn").on('click', function() {

                        firstVal = $("#numberThree2").val();
                        secondVal = $("#numberFour2").val();
                        thirdVal = $("#numberFive2").val();

                        if (firstVal === "3" && secondVal === "4" && thirdVal === "5") {
                            isUserCorrectOne = true;
                        } else {
                            isUserCorrectOne = false;
                        }

                        if (isUserCorrectOne) {
                            $(".unit_3_lesson_2 .exercise3 .feedback_box").show();
                            $(".unit_3_lesson_2 .exercise3 .overlay").show();
                            $(".unit_3_lesson_2 .exercise3 .right_feedback").show();

                        } else {
                            $(".unit_3_lesson_2 .exercise3 .feedback_box").show();
                            $(".unit_3_lesson_2 .exercise3 .overlay").show();
                            $(".unit_3_lesson_2 .exercise3 .wrong_feedback").show();

                        }
                    });

                    $(".unit_3_lesson_2 .exercise3 .close_popup").off("click").on("click", function() {
                        if (isUserCorrectOne == false) {
                            $('.unit_3_lesson_2 .exercise3 input').each(function() {
                                $(this).val('');
                            });
                        }
                        $(".unit_3_lesson_2 .exercise3 .feedback_box").hide();
                        $(".unit_3_lesson_2 .exercise3 .right_feedback").hide();
                        $(".unit_3_lesson_2 .exercise3 .wrong_feedback").hide();
                        $(".unit_3_lesson_2 .exercise3 .overlay").hide();
                    });

                    $(".unit_3_lesson_2 .exercise3 .reload").on('click', function() {
                        $('.unit_3_lesson_2 .exercise input').each(function() {
                            $(this).val('');
                        });
                    });
                }

                function exerciseFn_4() {
                    var isUserCorrectOne = true;
                    $(".unit_3_lesson_2 .exercise4 .submit_btn").on('click', function() {

                        firstVal = $("#numberThree3").val();
                        secondVal = $("#numberFour3").val();
                        thirdVal = $("#numberFive3").val();

                        if (firstVal === "three" && secondVal === "four" && thirdVal === "five") {
                            isUserCorrectOne = true;
                        } else {
                            isUserCorrectOne = false;
                        }

                        if (isUserCorrectOne) {
                            $(".unit_3_lesson_2 .exercise4 .feedback_box").show();
                            $(".unit_3_lesson_2 .exercise4 .overlay").show();
                            $(".unit_3_lesson_2 .exercise4 .right_feedback").show();

                        } else {
                            $(".unit_3_lesson_2 .exercise4 .feedback_box").show();
                            $(".unit_3_lesson_2 .exercise4 .overlay").show();
                            $(".unit_3_lesson_2 .exercise4 .wrong_feedback").show();

                        }
                    });

                    $(".unit_3_lesson_2 .exercise4 .close_popup").off("click").on("click", function() {
                        if (isUserCorrectOne == false) {
                            $('.unit_3_lesson_2 .exercise4 input').each(function() {
                                $(this).val('');
                            });
                        }
                        $(".unit_3_lesson_2 .exercise4 .feedback_box").hide();
                        $(".unit_3_lesson_2 .exercise4 .right_feedback").hide();
                        $(".unit_3_lesson_2 .exercise4 .wrong_feedback").hide();
                        $(".unit_3_lesson_2 .exercise4 .overlay").hide();
                    });

                    $(".unit_3_lesson_2 .exercise4 .reload").on('click', function() {
                        $('.unit_3_lesson_2 .exercise input').each(function() {
                            $(this).val('');
                        });
                    });
                }
            }

            function unitLesson_3_Fn() {
                exerciseFn_1();
                exerciseFn_2();
                exerciseFn_3();
                exerciseFn_4();

                function exerciseFn_1() {

                }

                function exerciseFn_2() {


                        var isUserCorrectOne = true;
                        $(".unit_3_lesson_3 .exercise2 .submit_btn").on("click", function() {

                                elevenNumberVal= $("#thirteen_number").val();
                                elevenTextVal= $("#thirteen_text").val();

                                twelveNumberVal= $("#fourteen_number").val();
                                twelveTextVal= $("#fourteen_text").val();
                            

                            if (elevenNumberVal === "131313" && elevenTextVal === "thirteen" && twelveNumberVal === "141414" && twelveTextVal === "fourteen" ) {
                                isUserCorrectOne = true;
                            } else {
                                isUserCorrectOne = false;
                            }
                            if (isUserCorrectOne) {
                                $(".unit_3_lesson_3 .exercise2 .feedback_box").show();
                                $(".unit_3_lesson_3 .exercise2 .overlay").show();
                                $(".unit_3_lesson_3 .exercise2 .right_feedback").show();

                            } else {
                                $(".unit_3_lesson_3 .exercise2 .feedback_box").show();
                                $(".unit_3_lesson_3 .exercise2 .overlay").show();
                                $(".unit_3_lesson_3 .exercise2 .wrong_feedback").show();

                            }
                        });
                        $(".unit_3_lesson_3 .exercise2 .close_popup").off("click").on("click", function() {
                            if (isUserCorrectOne == false) {
                                $('.unit_3_lesson_3 .exercise2 .conting_point input').each(function() {
                                    $(this).val('');
                                });
                            }
                            $(".unit_3_lesson_3 .exercise2 .feedback_box").hide();
                            $(".unit_3_lesson_3 .exercise2 .right_feedback").hide();
                            $(".unit_3_lesson_3 .exercise2 .wrong_feedback").hide();
                            $(".unit_3_lesson_3 .exercise2 .overlay").hide();
                        });

                        $(".unit_3_lesson_3 .exercise2 .reload").on('click', function() {
                            $('.unit_3_lesson_3 .exercise2 .main_box input').each(function() {
                                $(this).val('');
                            });
                        });
                    
                    
                }

                function exerciseFn_3() {

                    $(".unit_3_lesson_3 .exercise_3 .dreg_box_item").draggable({
                        containment: ".unit_3_lesson_3 .exercise_3",
                        zIndex: 9,
                        revert: function(event, ui) {
                            $(this).data("uiDraggable").originalPosition = {
                                top: 0,
                                left: 0
                            };
                            return !event;
                        }
                    });

                    $(".unit_3_lesson_3 .exercise_3 .drop_Box").droppable({
                        drop: function(event, ui) {
                            var getDropedElmLen = $(this).children(".dreg_box_item").length;
                            if (getDropedElmLen <= 20) {
                                $(this).append($(ui.draggable).clone());
                            } else {
                                ui.draggable.mouseup();
                            }
                            ui.draggable.removeAttr("style").css("position", "relative");
                        }
                    });

                    var totalcircles = 0;
                    var totaltriangles = 0;
                    var isUserCorrect = false;

                    $(".unit_3_lesson_3 .exercise_3 .submit_btn").off("click").on("click", function() {
                        $(".unit_3_lesson_3 .exercise_3 .drop_Box .dreg_box_item").each(function(k, v) {
                            if (v.id == "circles") {
                                totalcircles += 1;
                            } else if (v.id == "triangles") {
                                totaltriangles += 1;
                            }

                        });

                        $(".unit_3_lesson_3 .exercise_3 .feedback_box, .unit_3_lesson_3 .exercise_3 .close_popup").show();
                        $(".unit_3_lesson_3 .exercise_3 .right_feedback").hide();
                        $(".unit_3_lesson_3 .exercise_3 .wrong_feedback").hide();
                        $(".unit_3_lesson_3 .exercise_3 .overlay").hide();

                        if (totalcircles == 13 && totaltriangles === 14) {
                            isUserCorrect = true;
                            $(".unit_3_lesson_3 .exercise_3 .right_feedback").show();
                            $(".unit_3_lesson_3 .exercise_3 .overlay").show();
                        } else {
                            $(".unit_3_lesson_3 .exercise_3 .wrong_feedback").show();
                            $(".unit_3_lesson_3 .exercise_3 .overlay").show();
                        }
                    });

                    $(".unit_3_lesson_3 .exercise_3 .reload").off("click").on("click", function() {
                        $(".unit_3_lesson_3 .exercise_3 .drop_Box").html("");
                        totalcircles = 0;
                        totaltriangles = 0;

                        isUserCorrect = false;
                        $(".unit_3_lesson_3 .exercise_3 .drop_Box").html("");
                    });

                    $(".unit_3_lesson_3 .exercise_3 .close_popup").off("click").on("click", function() {
                        if (!isUserCorrect) {
                            totalcircles = 0;
                            totaltriangles = 0;
                            isUserCorrect = false;
                            $(".unit_3_lesson_3 .exercise_3 .drop_Box").html("");
                        }
                        $(".unit_3_lesson_3 .exercise_3 .feedback_box, .unit_3_lesson_3 .exercise_3 .close_popup").hide();
                        $(".unit_3_lesson_3 .exercise_3 .right_feedback").hide();
                        $(".unit_3_lesson_3 .exercise_3 .wrong_feedback").hide();
                        $(".unit_3_lesson_3 .exercise_3 .overlay").hide();
                    });



                }

                function exerciseFn_4() {

                    var correctAns = ["1_2", "2_1"];
                    var userAns = ["", ""];
                    var selectedNod = [];
                    var isUserCor = true;

                    $(".unit_3_lesson_3 .exercise_4 .clikBox").on("click", function() {
                        $(this).css("pointer-events", "none");
                        var tempn = $(this).attr("id");

                        var tempFirst = eval(tempn.split("_")[0]);
                        var tempSecond = eval(tempn.split("_")[1]);

                        if (tempFirst == 1) {
                            selectedNod[0] = tempSecond;
                        } else if (tempFirst == 2) {
                            selectedNod[1] = tempSecond;
                        }



                        var tempCount = 0;
                        $.each(selectedNod, function(k, v) {
                            if (v != undefined) {
                                tempCount += 1;
                            }
                        });

                        if (tempCount == 2) {
                            $(".unit_3_lesson_3 .exercise_4 .line[set='" + selectedNod[0] + "_" + selectedNod[1] + "']").show();
                            if (userAns[0] == "") {
                                userAns[0] = selectedNod[0] + "_" + selectedNod[1];
                            } else if (userAns[1] == "") {
                                userAns[1] = selectedNod[0] + "_" + selectedNod[1];
                            }


                            selectedNod = [];
                            tempCount = 0;
                        }
                    });

                    $(".unit_3_lesson_3 .exercise_4 .reload").on("click", function() {
                        $(".unit_3_lesson_3 .exercise_4 .line").hide();
                        $(".unit_3_lesson_3 .exercise_4 .clikBox").css("pointer-events", "auto");
                        userAns = ["", ""];
                        isUserCor = true;
                    });

                    $(".unit_3_lesson_3 .exercise_4 .submit_btn").on("click", function() {
                        $.each(userAns, function(k, v) {
                            if (v != correctAns[k]) {
                                isUserCor = false;
                            }
                        });

                        $(".unit_3_lesson_3 .exercise_4 .feedback_box").show();
                        $(".unit_3_lesson_3 .exercise_4 .close_popup").show();
                        $(".unit_3_lesson_3 .exercise_4 .right_feedback").hide();
                        $(".unit_3_lesson_3 .exercise_4 .wrong_feedback").hide();
                        $(".unit_3_lesson_3 .exercise_4 .overlay").show();

                        if (isUserCor) {
                            $(".unit_3_lesson_3 .exercise_4 .right_feedback").show();
                        } else {
                            $(".unit_3_lesson_3 .exercise_4 .wrong_feedback").show();
                        }
                    });

                    $(".unit_3_lesson_3 .exercise_4 .close_popup").on("click", function() {
                        $(".unit_3_lesson_3 .exercise_4 .feedback_box").hide();
                        $(".unit_3_lesson_3 .exercise_4 .close_popup").hide();
                        $(".unit_3_lesson_3 .exercise_4 .right_feedback").hide();
                        $(".unit_3_lesson_3 .exercise_4 .wrong_feedback").hide();
                        $(".unit_3_lesson_3 .exercise_4 .overlay").hide();
                        if (!isUserCor) {
                            $(".unit_3_lesson_3 .exercise_4 .line").hide();
                            $(".unit_3_lesson_3 .exercise_4 .clikBox").css("pointer-events", "auto");
                            userAns = ["", ""];
                            isUserCor = true;
                        }
                    });



                }
            }

            function unitLesson_4_Fn() {
                exerciseFn_1();
                exerciseFn_2();
                exerciseFn_3();
                exerciseFn_4();

                function exerciseFn_1() {

                }

                function exerciseFn_2() {

                }

                function exerciseFn_3() {

                }

                function exerciseFn_4() {

                }
            }

            function unitLesson_5_Fn() {
                exerciseFn_1();
                exerciseFn_2();
                exerciseFn_3();
                exerciseFn_4();

                function exerciseFn_1() {

                }

                function exerciseFn_2() {

                }

                function exerciseFn_3() {

                }

                function exerciseFn_4() {

                }
            }
        },
  

    unit_4_Fn: function() {
        unitLesson_1_Fn();
        unitLesson_2_Fn();
        unitLesson_3_Fn();
        unitLesson_4_Fn();
        unitLesson_5_Fn();

        function unitLesson_1_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {
                var isUserCorrectOne = false;
                $(".unit_4_lesson_1 .exercise2 .submit_btn").on('click', function() {
                   const sixNumber = $("#sixNumber").val();
                   const sixText = $("#sixText").val();
                   const sevenNumber = $("#sevenNumber").val();
                   const sevenText = $("#sevenText").val();                   
                   isUserCorrectOne = (sixNumber === "161616" && sixText === "sixteen" && sevenNumber === "171717" && sevenText === "seventeen") ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_4_lesson_1 .exercise2 .feedback_box, .unit_4_lesson_1 .exercise2 .overlay, .unit_4_lesson_1 .exercise2 .right_feedback").show();
                        $(".unit_4_lesson_1 .exercise2 .wrong_feedback").hide();
                    } else {
                        $(".unit_4_lesson_1 .exercise2 .feedback_box, .unit_4_lesson_1 .exercise2 .overlay, .unit_4_lesson_1 .exercise2 .wrong_feedback").show();
                        $(".unit_4_lesson_1 .exercise2 .right_feedback").hide();
                    }
                });

                $(".unit_4_lesson_1 .exercise2 .close_popup").off("click").on("click", function() {
                    $(".unit_4_lesson_1 .exercise2 .feedback_box, .unit_4_lesson_1 .exercise2 .overlay, .unit_4_lesson_1 .exercise2 .wrong_feedback").hide();
                    if (isUserCorrectOne === false) {
                        $('.unit_4_lesson_1 .exercise2 .text_area_fill input').each(function() {
                            $(this).val('');
                        });
                    }
                });

                $(".unit_4_lesson_1 .exercise2 .reload").on('click', function() {
                    $('.unit_4_lesson_1 .exercise .text_area_fill input').each(function() {
                        $(this).val('');
                    });
                });
            }

            function exerciseFn_3() {
                $(".unit_4_lesson_1 .exercise3 .dreg_box_item").draggable({
                    containment: ".unit_4_lesson_1 .exercise_3",
                    zIndex: 9,
                    revert: function(event, ui) {
                        $(this).data("uiDraggable").originalPosition = {
                            top: 0,
                            left: 0
                        };
                        return !event;
                    }
                });

                $(".unit_4_lesson_1 .exercise3 .drop_Box").droppable({
                    drop: function(event, ui) {
                        var getDropedElmLen = $(this).children(".dreg_box_item").length;
                        if (getDropedElmLen <= 20) {
                            $(this).append($(ui.draggable).clone());
                        } else {
                            ui.draggable.mouseup();
                        }
                    }
                });

                var isUserCorrect = false;
                var totalCircles = 0;
                var totalRhombus = 0;

                $(".unit_4_lesson_1 .exercise3 .submit_btn").off("click").on("click", function() {
                    totalCircles = $(".unit_4_lesson_1 .exercise3 .right_dreg_drop_area .drop_Box").first().find(".icon_box").length;
                    totalCircles = totalCircles > 9 ? 10 : totalCircles;
                    totalCircles+=$(".unit_4_lesson_1 .exercise3 .right_dreg_drop_area .drop_Box").last().find(".icon_box").length;
                    totalRhombus = $(".unit_4_lesson_1 .exercise3 .left_dreg_drop_area .drop_Box").first().find(".icon_box").length;
                    totalRhombus = totalRhombus > 9 ? 10 : totalRhombus;
                    totalRhombus+=$(".unit_4_lesson_1 .exercise3 .left_dreg_drop_area .drop_Box").last().find(".icon_box").length;

                    $(".unit_4_lesson_1 .exercise3 .feedback_box").show();
                    $(".unit_4_lesson_1 .exercise3 .right_feedback").hide();
                    $(".unit_4_lesson_1 .exercise3 .wrong_feedback").hide();
                    $(".unit_4_lesson_1 .exercise3 .overlay").hide();

                    if (totalRhombus == 16 && totalCircles === 17) {
                        isUserCorrect = true;
                        $(".unit_4_lesson_1 .exercise3 .right_feedback, .unit_4_lesson_1 .exercise3 .overlay").show();
                    } else {
                        $(".unit_4_lesson_1 .exercise3 .wrong_feedback, .unit_4_lesson_1 .exercise3 .overlay").show();
                    }
                });

                $(".unit_4_lesson_1 .exercise3 .close_popup").off("click").on("click", function() {
                    if (!isUserCorrect) {
                        totalcircles = 0;
                        totaltriangles = 0;
                        isUserCorrect = false;
                        $(".unit_4_lesson_1 .exercise3 .drop_Box").html("");
                    }
                    $(".unit_4_lesson_1 .exercise3 .feedback_box").hide();
                    $(".unit_4_lesson_1 .exercise3 .right_feedback").hide();
                    $(".unit_4_lesson_1 .exercise3 .wrong_feedback").hide();
                    $(".unit_4_lesson_1 .exercise3 .overlay").hide();
                });

                $(".unit_4_lesson_1 .exercise3 .reload").off("click").on("click", function() {
                    $(".unit_4_lesson_1 .exercise3 .drop_Box").html("");
                    totalcircles = 0;
                    totaltriangles = 0;
                    isUserCorrect = false;
                });
            }

            function exerciseFn_4() {
                var seventeenCircle = false;
                var sixteenCircle = false;
                var isUserCorrect = false;

                $(".unit_4_lesson_1 .exercise4 .two_box_number:first-child .image_area .redCircle").click(function(){
                    $(".unit_4_lesson_1 .exercise4 .two_box_number:first-child .image_area .redCircle").removeClass('selected');
                    $(this).addClass('selected');
                    seventeenCircle = $(this).hasClass('seventeenCircle') ? true : false;
                });
                $(".unit_4_lesson_1 .exercise4 .two_box_number:last-child .image_area .redCircle").click(function(){
                    $(".unit_4_lesson_1 .exercise4 .two_box_number:last-child .image_area .redCircle").removeClass('selected');
                    $(this).addClass('selected');
                    sixteenCircle = $(this).hasClass('sixteenCircle') ? true : false;
                });

                $(".unit_4_lesson_1 .exercise4 .submit_btn").off("click").on("click", function() {
                    if(seventeenCircle && sixteenCircle){
                        isUserCorrect = true;
                        $(".unit_4_lesson_1 .exercise4 .feedback_box, .unit_4_lesson_1 .exercise4 .right_feedback, .unit_4_lesson_1 .exercise4 .overlay").show();
                    } else {
                        $(".unit_4_lesson_1 .exercise4 .feedback_box, .unit_4_lesson_1 .exercise4 .wrong_feedback, .unit_4_lesson_1 .exercise4 .overlay").show();
                    }
                });

                $(".unit_4_lesson_1 .exercise4 .close_popup").off("click").on("click", function() {
                    if (!isUserCorrect) {
                        seventeenCircle = false;
                        sixteenCircle = false;
                        isUserCorrect = false;
                        $(".unit_4_lesson_1 .exercise4 .two_box_number .image_area .redCircle").removeClass('selected');
                    }
                    $(".unit_4_lesson_1 .exercise4 .feedback_box, .unit_4_lesson_1 .exercise4 .wrong_feedback, .unit_4_lesson_1 .exercise4 .overlay").hide();
                });

                /*************** match ************/
                var line_start = '';
                var line_end = '';
                var totalSelectedLine = 0;
                $(".clikBox").click(function(){
                    if($(this).hasClass('leftMatch')) {
                        line_start = $(this).data('id');
                    } else {
                        line_end = $(this).data('id');
                    }

                    totalSelectedLine = $(".match_box .line:visible").length;

                    $(".match_box .line").each(function(){
                        if($(this).data('id') === line_start + '_' + line_end && totalSelectedLine < 2) {
                            $(this).show();
                            line_start = '';
                            line_end = '';
                        }
                    })
                });

                $(".unit_4_lesson_1 .exercise4 .reload").off("click").on("click", function() {
                    $(".unit_4_lesson_1 .exercise4 .two_box_number .image_area .redCircle").removeClass('selected');
                    $(".match_box .line").hide();
                    line_start = '';
                    line_end = '';
                    seventeenCircle = false;
                    sixteenCircle = false;
                    isUserCorrect = false;
                });
            }
        }

        function unitLesson_2_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {
                var isUserCorrect = false;

                $(".unit_4_lesson_2 .exercise2 .dreg_box").draggable();

                $(".unit_4_lesson_2 .exercise2 .drop_box").droppable({
                    drop: function(event, ui) {
                        var getDropedElmLen = $(this).children(".dreg_box").length;
                        if (getDropedElmLen <= 4) {
                            $(this).append($(ui.draggable).clone());
                        } else {
                            ui.draggable.mouseup();
                        }
                    }
                });

                $(".unit_4_lesson_2 .exercise2 .submit_btn").off("click").on("click", function() {
                    const square_less = $(".unit_4_lesson_2 .exercise2 .square_box > div").first().find(".square_image").length;
                    const square_more = $(".unit_4_lesson_2 .exercise2 .square_box > div").last().find(".square_image").length;
                    const triangle_less = $(".unit_4_lesson_2 .exercise2 .triangle_box > div").first().find(".triangle_image").length;
                    const triangle_more = $(".unit_4_lesson_2 .exercise2 .triangle_box > div").last().find(".triangle_image").length;
                    const circle_less = $(".unit_4_lesson_2 .exercise2 .circle_box > div").first().find(".circle_image").length;
                    const circle_more = $(".unit_4_lesson_2 .exercise2 .circle_box > div").last().find(".circle_image").length;

                    if((square_less === 1 && square_more === 3) && (triangle_less === 2 && triangle_more === 4) && (circle_less === 3 && circle_more === 5)) {
                        $(".unit_4_lesson_2 .exercise2 .feedback_box, .unit_4_lesson_2 .exercise2 .overlay, .unit_4_lesson_2 .exercise2 .right_feedback").show();
                        $(".unit_4_lesson_2 .exercise2 .wrong_feedback").hide();
                        isUserCorrect = true;
                    } else {
                        $(".unit_4_lesson_2 .exercise2 .feedback_box, .unit_4_lesson_2 .exercise2 .overlay, .unit_4_lesson_2 .exercise2 .wrong_feedback").show();
                        $(".unit_4_lesson_2 .exercise2 .right_feedback").hide();
                    }
                });

                $(".unit_4_lesson_2 .exercise2 .close_popup").off("click").on("click", function() {
                    $(".unit_4_lesson_2 .exercise2 .feedback_box, .unit_4_lesson_2 .exercise2 .overlay, .unit_4_lesson_2 .exercise2 .wrong_feedback").hide();
                    if (isUserCorrect === false) {
                        $(".unit_4_lesson_2 .exercise2 .drop_box").html("");
                    }
                });

                $(".unit_4_lesson_2 .exercise2 .reload").off("click").on("click", function() {
                    $(".unit_4_lesson_2 .exercise2 .drop_box").html("");
                    isUserCorrect = false;
                });

            }

            function exerciseFn_3() {

                var isUserCorrect = false;
                var number1 = 0;
                var number2 = 0;
                var number3 = 0;
                $(".unit_4_lesson_2 .exercise3 .submit_btn").off("click").on("click", function() {
                    number1 = $(".unit_4_lesson_2 .exercise3 .text_box1").val();
                    number2 = $(".unit_4_lesson_2 .exercise3 .text_box2").val();
                    number3 = $(".unit_4_lesson_2 .exercise3 .text_box3").val();

                    if(number1 === '2' && number2 === '4' && number3 === '1'){
                        $(".unit_4_lesson_2 .exercise3 .feedback_box, .unit_4_lesson_2 .exercise3 .overlay, .unit_4_lesson_2 .exercise3 .right_feedback").show();
                        $(".unit_4_lesson_2 .exercise3 .wrong_feedback").hide();
                        isUserCorrect = true;
                    } else {
                        $(".unit_4_lesson_2 .exercise3 .feedback_box, .unit_4_lesson_2 .exercise3 .overlay, .unit_4_lesson_2 .exercise3 .wrong_feedback").show();
                        $(".unit_4_lesson_2 .exercise3 .right_feedback").hide();
                    }
                });

                $(".unit_4_lesson_2 .exercise3 .close_popup").off("click").on("click", function() {
                    $(".unit_4_lesson_2 .exercise3 .feedback_box, .unit_4_lesson_2 .exercise3 .overlay, .unit_4_lesson_2 .exercise3 .wrong_feedback").hide();
                    if (isUserCorrect === false) {
                        $('.unit_4_lesson_2 .exercise3 input').each(function() {
                            $(this).val('');
                        });
                    }
                });

                $(".unit_4_lesson_2 .exercise3 .reload").on('click', function() {
                    $('.unit_4_lesson_2 .exercise3 input').each(function() {
                        $(this).val('');
                    });
                });
            }

            function exerciseFn_4() {

                var isUserCorrect = false;
                var number1 = 0;
                var number2 = 0;
                var number3 = 0;
                $(".unit_4_lesson_2 .exercise4 .submit_btn").off("click").on("click", function() {
                    number1 = $(".unit_4_lesson_2 .exercise4 .text_box1").val();
                    number2 = $(".unit_4_lesson_2 .exercise4 .text_box2").val();
                    number3 = $(".unit_4_lesson_2 .exercise4 .text_box3").val();

                    if(number1 === '3' && number2 === '2' && number3 === '5'){
                        $(".unit_4_lesson_2 .exercise4 .feedback_box, .unit_4_lesson_2 .exercise4 .overlay, .unit_4_lesson_2 .exercise4 .right_feedback").show();
                        $(".unit_4_lesson_2 .exercise4 .wrong_feedback").hide();
                        isUserCorrect = true;
                    } else {
                        $(".unit_4_lesson_2 .exercise4 .feedback_box, .unit_4_lesson_2 .exercise4 .overlay, .unit_4_lesson_2 .exercise4 .wrong_feedback").show();
                        $(".unit_4_lesson_2 .exercise4 .right_feedback").hide();
                    }
                });

                $(".unit_4_lesson_2 .exercise4 .close_popup").off("click").on("click", function() {
                    $(".unit_4_lesson_2 .exercise4 .feedback_box, .unit_4_lesson_2 .exercise4 .overlay, .unit_4_lesson_2 .exercise4 .wrong_feedback").hide();
                    if (isUserCorrect === false) {
                        $('.unit_4_lesson_2 .exercise4 input').each(function() {
                            $(this).val('');
                        });
                    }
                });

                $(".unit_4_lesson_2 .exercise4 .reload").on('click', function() {
                    $('.unit_4_lesson_2 .exercise4 input').each(function() {
                        $(this).val('');
                    });
                });
            }
        }

        function unitLesson_3_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {

                var isUserCorrectOne = false;
                $(".unit_4_lesson_3 .exercise2 .submit_btn").on('click', function() {
                const sixNumber = $("#sixNumber").val();
                const sixText = $("#sixText").val();
                const sevenNumber = $("#sevenNumber").val();
                const sevenText = $("#sevenText").val();                   
                isUserCorrectOne = (sixNumber === "181818" && sixText === "eighteen" && sevenNumber === "191919" && sevenText === "nineteen") ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_4_lesson_3 .exercise2 .feedback_box, .unit_4_lesson_3 .exercise2 .overlay, .unit_4_lesson_3 .exercise2 .right_feedback").show();
                        $(".unit_4_lesson_3 .exercise2 .wrong_feedback").hide();
                    } else {
                        $(".unit_4_lesson_3 .exercise2 .feedback_box, .unit_4_lesson_3 .exercise2 .overlay, .unit_4_lesson_3 .exercise2 .wrong_feedback").show();
                        $(".unit_4_lesson_3 .exercise2 .right_feedback").hide();
                    }
                });

                $(".unit_4_lesson_3 .exercise2 .close_popup").off("click").on("click", function() {
                    $(".unit_4_lesson_3 .exercise2 .feedback_box, .unit_4_lesson_3 .exercise2 .overlay, .unit_4_lesson_3 .exercise2 .wrong_feedback").hide();
                    if (isUserCorrectOne === false) {
                        $('.unit_4_lesson_3 .exercise2 .text_area_fill input').each(function() {
                            $(this).val('');
                        });
                    }
                });

                $(".unit_4_lesson_3 .exercise2 .reload").on('click', function() {
                    $('.unit_4_lesson_3 .exercise .text_area_fill input').each(function() {
                        $(this).val('');
                    });
                });
            }

            function exerciseFn_3() {
                $(".unit_4_lesson_3 .exercise3 .dreg_box_item").draggable({
                    containment: ".unit_4_lesson_3 .exercise_3",
                    zIndex: 9,
                    revert: function(event, ui) {
                        $(this).data("uiDraggable").originalPosition = {
                            top: 0,
                            left: 0
                        };
                        return !event;
                    }
                });

                $(".unit_4_lesson_3 .exercise3 .drop_Box").droppable({
                    drop: function(event, ui) {
                        var getDropedElmLen = $(this).children(".dreg_box_item").length;
                        if (getDropedElmLen <= 20) {
                            $(this).append($(ui.draggable).clone());
                        } else {
                            ui.draggable.mouseup();
                        }
                    }
                });

                var isUserCorrect = false;
                var totalCircles = 0;
                var totalRhombus = 0;

                $(".unit_4_lesson_3 .exercise3 .submit_btn").off("click").on("click", function() {
                    totalCircles = $(".unit_4_lesson_3 .exercise3 .right_dreg_drop_area .drop_Box").first().find(".icon_box").length;
                    totalCircles = totalCircles > 9 ? 10 : totalCircles;
                    totalCircles+=$(".unit_4_lesson_3 .exercise3 .right_dreg_drop_area .drop_Box").last().find(".icon_box").length;
                    totalRhombus = $(".unit_4_lesson_3 .exercise3 .left_dreg_drop_area .drop_Box").first().find(".icon_box").length;
                    totalRhombus = totalRhombus > 9 ? 10 : totalRhombus;
                    totalRhombus+=$(".unit_4_lesson_3 .exercise3 .left_dreg_drop_area .drop_Box").last().find(".icon_box").length;

                    $(".unit_4_lesson_3 .exercise3 .feedback_box").show();
                    $(".unit_4_lesson_3 .exercise3 .right_feedback").hide();
                    $(".unit_4_lesson_3 .exercise3 .wrong_feedback").hide();
                    $(".unit_4_lesson_3 .exercise3 .overlay").hide();

                    if (totalRhombus == 18 && totalCircles === 19) {
                        isUserCorrect = true;
                        $(".unit_4_lesson_3 .exercise3 .right_feedback, .unit_4_lesson_3 .exercise3 .overlay").show();
                    } else {
                        $(".unit_4_lesson_3 .exercise3 .wrong_feedback, .unit_4_lesson_3 .exercise3 .overlay").show();
                    }
                });

                $(".unit_4_lesson_3 .exercise3 .close_popup").off("click").on("click", function() {
                    if (!isUserCorrect) {
                        totalcircles = 0;
                        totaltriangles = 0;
                        isUserCorrect = false;
                        $(".unit_4_lesson_3 .exercise3 .drop_Box").html("");
                    }
                    $(".unit_4_lesson_3 .exercise3 .feedback_box").hide();
                    $(".unit_4_lesson_3 .exercise3 .right_feedback").hide();
                    $(".unit_4_lesson_3 .exercise3 .wrong_feedback").hide();
                    $(".unit_4_lesson_3 .exercise3 .overlay").hide();
                });

                $(".unit_4_lesson_3 .exercise3 .reload").off("click").on("click", function() {
                    $(".unit_4_lesson_3 .exercise3 .drop_Box").html("");
                    totalcircles = 0;
                    totaltriangles = 0;
                    isUserCorrect = false;
                });

            }

            function exerciseFn_4() {
                var isUserCorrect = false;
                var waterdrop = 0;
                var firedrop = 0;

                $(".water_drop .drop").click(function(){
                    $(this).addClass("selected");
                });

                $(".unit_4_lesson_3 .exercise4 .submit_btn").off("click").on("click", function() {
                    waterdrop = $(".waterdrop_box .drop.selected").length;
                    firedrop = $(".fire_box .drop.selected").length;
                    if(waterdrop === 18 && firedrop === 19) {
                        $(".unit_4_lesson_3 .exercise4 .feedback_box, .unit_4_lesson_3 .exercise4 .overlay, .unit_4_lesson_3 .exercise4 .right_feedback").show();
                        $(".unit_4_lesson_3 .exercise4 .wrong_feedback").hide();
                        isUserCorrect = true;
                    } else {
                        $(".unit_4_lesson_3 .exercise4 .feedback_box, .unit_4_lesson_3 .exercise4 .overlay, .unit_4_lesson_3 .exercise4 .wrong_feedback").show();
                        $(".unit_4_lesson_3 .exercise4 .right_feedback").hide();
                    }
                });

                $(".unit_4_lesson_3 .exercise4 .close_popup").off("click").on("click", function() {
                    if (!isUserCorrect) {
                        waterdrop = 0;
                        firedrop = 0;
                        isUserCorrect = false;
                        $(".unit_4_lesson_3 .exercise4 .water_drop .drop").removeClass('selected');
                    }
                    $(".unit_4_lesson_3 .exercise4 .feedback_box").hide();
                    $(".unit_4_lesson_3 .exercise4 .right_feedback").hide();
                    $(".unit_4_lesson_3 .exercise4 .wrong_feedback").hide();
                    $(".unit_4_lesson_3 .exercise4 .overlay").hide();
                });

                /*************** match ************/
                var line_start = '';
                var line_end = '';
                var totalSelectedLine = 0;
                $(".clikBox").click(function(){
                    if($(this).hasClass('leftMatch')) {
                        line_start = $(this).data('id');
                    } else {
                        line_end = $(this).data('id');
                    }

                    totalSelectedLine = $(".match_box .line:visible").length;

                    $(".match_box .line").each(function(){
                        if($(this).data('id') === line_start + '_' + line_end && totalSelectedLine < 2) {
                            $(this).show();
                            line_start = '';
                            line_end = '';
                        }
                    })
                });

                $(".unit_4_lesson_3 .exercise4 .reload").off("click").on("click", function() {
                    $(".unit_4_lesson_3 .exercise4 .water_drop .drop").removeClass('selected');
                    $(".match_box .line").hide();
                    line_start = '';
                    line_end = '';
                    waterdrop = 0;
                    firedrop = 0;
                    isUserCorrect = false;
                });
            }
        }

        function unitLesson_4_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {

                var isUserCorrect = false;
                var number1 = 0;
                var number2 = 0;
                var number3 = 0;
                var number4 = 0;
                var number5 = 0;
                var number6 = 0;
                $(".unit_4_lesson_4 .exercise2 .submit_btn").off("click").on("click", function() {
                    number1 = $(".unit_4_lesson_4 .exercise2 .text_box1").val();
                    number2 = $(".unit_4_lesson_4 .exercise2 .text_box2").val();
                    number3 = $(".unit_4_lesson_4 .exercise2 .text_box3").val();
                    number4 = $(".unit_4_lesson_4 .exercise2 .text_box4").val();
                    number5 = $(".unit_4_lesson_4 .exercise2 .text_box5").val();
                    number6 = $(".unit_4_lesson_4 .exercise2 .text_box6").val();

                    if(number1 === '1' && number2 === '2' && number3 === '3' && number4 === '1' && number5 === '2' && number6 === '3'){
                        $(".unit_4_lesson_4 .exercise2 .feedback_box, .unit_4_lesson_4 .exercise2 .overlay, .unit_4_lesson_4 .exercise2 .right_feedback").show();
                        $(".unit_4_lesson_4 .exercise2 .wrong_feedback").hide();
                        isUserCorrect = true;
                    } else {
                        $(".unit_4_lesson_4 .exercise2 .feedback_box, .unit_4_lesson_4 .exercise2 .overlay, .unit_4_lesson_4 .exercise2 .wrong_feedback").show();
                        $(".unit_4_lesson_4 .exercise2 .right_feedback").hide();
                    }
                });

                $(".unit_4_lesson_4 .exercise2 .close_popup").off("click").on("click", function() {
                    $(".unit_4_lesson_4 .exercise2 .feedback_box, .unit_4_lesson_4 .exercise2 .overlay, .unit_4_lesson_4 .exercise2 .wrong_feedback").hide();
                    if (isUserCorrect === false) {
                        $('.unit_4_lesson_4 .exercise2 input').each(function() {
                            $(this).val('');
                        });
                    }
                });

                $(".unit_4_lesson_4 .exercise2 .reload").on('click', function() {
                    $('.unit_4_lesson_4 .exercise2 input').each(function() {
                        $(this).val('');
                    });
                });

            }

            function exerciseFn_3() {

            }

            function exerciseFn_4() {
                var circle1 = false;
                var circle2 = false;
                var circle3 = false;
                var isUserCorrect = false;

                $(".unit_4_lesson_4 .exercise4 .circleArea1 .redCircle").click(function(){
                    $(".unit_4_lesson_4 .exercise4 .circleArea1 .redCircle").removeClass('selected');
                    $(this).addClass('selected');
                    circle1 = $(this).hasClass('correct') ? true : false;
                });
                $(".unit_4_lesson_4 .exercise4 .circleArea2 .redCircle").click(function(){
                    $(".unit_4_lesson_4 .exercise4 .circleArea2 .redCircle").removeClass('selected');
                    $(this).addClass('selected');
                    circle2 = $(this).hasClass('correct') ? true : false;
                });
                $(".unit_4_lesson_4 .exercise4 .circleArea3 .redCircle").click(function(){
                    $(".unit_4_lesson_4 .exercise4 .circleArea3 .redCircle").removeClass('selected');
                    $(this).addClass('selected');
                    circle3 = $(this).hasClass('correct') ? true : false;
                });

                $(".unit_4_lesson_4 .exercise4 .submit_btn").off("click").on("click", function() {
                    if(circle1 && circle2 && circle3){
                        isUserCorrect = true;
                        $(".unit_4_lesson_4 .exercise4 .feedback_box, .unit_4_lesson_4 .exercise4 .right_feedback, .unit_4_lesson_4 .exercise4 .overlay").show();
                    } else {
                        $(".unit_4_lesson_4 .exercise4 .feedback_box, .unit_4_lesson_4 .exercise4 .wrong_feedback, .unit_4_lesson_4 .exercise4 .overlay").show();
                    }
                });

                $(".unit_4_lesson_4 .exercise4 .close_popup").off("click").on("click", function() {
                    if (!isUserCorrect) {
                        circle1 = false;
                        circle2 = false;
                        circle3 = false;
                        isUserCorrect = false;
                        $(".unit_4_lesson_4 .exercise4 .redCircle").removeClass('selected');
                    }
                    $(".unit_4_lesson_4 .exercise4 .feedback_box, .unit_4_lesson_4 .exercise4 .wrong_feedback, .unit_4_lesson_4 .exercise4 .overlay").hide();
                });

                $(".unit_4_lesson_4 .exercise4 .reload").off("click").on("click", function() {
                    $(".unit_4_lesson_4 .exercise4 .redCircle").removeClass('selected');
                    circle1 = false;
                    circle2 = false;
                    circle3 = false;
                    isUserCorrect = false;
                });
            }
        }

        function unitLesson_5_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {
                var isUserCorrectOne = false;
                $(".unit_4_lesson_5 .exercise2 .submit_btn").on('click', function() {
                const twentyNumber = $("#zero_three").val();
                const twentyText = $("#zero_text").val();                 
                isUserCorrectOne = (twentyNumber === "2020" && twentyText === "twenty") ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_4_lesson_5 .exercise2 .feedback_box, .unit_4_lesson_5 .exercise2 .overlay, .unit_4_lesson_5 .exercise2 .right_feedback").show();
                        $(".unit_4_lesson_5 .exercise2 .wrong_feedback").hide();
                    } else {
                        $(".unit_4_lesson_5 .exercise2 .feedback_box, .unit_4_lesson_5 .exercise2 .overlay, .unit_4_lesson_5 .exercise2 .wrong_feedback").show();
                        $(".unit_4_lesson_5 .exercise2 .right_feedback").hide();
                    }
                });

                $(".unit_4_lesson_5 .exercise2 .close_popup").off("click").on("click", function() {
                    $(".unit_4_lesson_5 .exercise2 .feedback_box, .unit_4_lesson_5 .exercise2 .overlay, .unit_4_lesson_5 .exercise2 .wrong_feedback").hide();
                    if (isUserCorrectOne === false) {
                        $('.unit_4_lesson_5 .exercise2 .text_area_fill input').each(function() {
                            $(this).val('');
                        });
                    }
                });

                $(".unit_4_lesson_5 .exercise2 .reload").on('click', function() {
                    $('.unit_4_lesson_5 .exercise .text_area_fill input').each(function() {
                        $(this).val('');
                    });
                });
            }

            function exerciseFn_3() {
                var isUserCorrectOne = false;
                $(".unit_4_lesson_5 .exercise3 .table_area .table_dot").click(function(){
                    $(this).addClass("addcolor");
                });

                $(".unit_4_lesson_5 .exercise3 .submit_btn").on('click', function() {
                    const addcolorDiv = $(".unit_4_lesson_5 .exercise3 .table_area .addcolor").length;
                    isUserCorrectOne = addcolorDiv === 20 ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_4_lesson_5 .exercise3 .feedback_box, .unit_4_lesson_5 .exercise3 .overlay, .unit_4_lesson_5 .exercise3 .right_feedback").show();
                        $(".unit_4_lesson_5 .exercise3 .wrong_feedback").hide();
                    } else {
                        $(".unit_4_lesson_5 .exercise3 .feedback_box, .unit_4_lesson_5 .exercise3 .overlay, .unit_4_lesson_5 .exercise3 .wrong_feedback").show();
                        $(".unit_4_lesson_5 .exercise3 .right_feedback").hide();
                    }
                });

                $(".unit_4_lesson_5 .exercise3 .close_popup").off("click").on("click", function() {
                    $(".unit_4_lesson_5 .exercise3 .feedback_box, .unit_4_lesson_5 .exercise3 .overlay, .unit_4_lesson_5 .exercise3 .wrong_feedback").hide();
                    if (isUserCorrectOne === false) {
                        $(".unit_4_lesson_5 .exercise3 .table_area .table_dot").removeClass('addcolor');
                    }
                });

                $(".unit_4_lesson_5 .exercise3 .reload").on('click', function() {
                    $(".unit_4_lesson_5 .exercise3 .table_area .table_dot").removeClass('addcolor');
                });
            }

            function exerciseFn_4() {
                var isUserCorrectOne = false;

                $(".unit_4_lesson_5 .exercise4 .dotline_area .dotline").click(function(){
                    var selectedDot = false;
                    if($(this).hasClass('line1_dot')){
                        $(this).addClass('selected');
                    } else {
                        if($(this).prev().prev().hasClass('selected')){
                            $(this).prev().addClass('selected');
                            $(this).addClass('selected');
                        }
                    }
                });

                $(".unit_4_lesson_5 .exercise4 .submit_btn").on('click', function() {
                    const selectedDot = $(".unit_4_lesson_5 .exercise4  .dotline_area .dotline.selected").length;
                    isUserCorrectOne = selectedDot === 20 ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_4_lesson_5 .exercise4 .feedback_box, .unit_4_lesson_5 .exercise4 .overlay, .unit_4_lesson_5 .exercise4 .right_feedback").show();
                        $(".unit_4_lesson_5 .exercise4 .wrong_feedback").hide();
                    } else {
                        $(".unit_4_lesson_5 .exercise4 .feedback_box, .unit_4_lesson_5 .exercise4 .overlay, .unit_4_lesson_5 .exercise4 .wrong_feedback").show();
                        $(".unit_4_lesson_5 .exercise4 .right_feedback").hide();
                    }
                });

                $(".unit_4_lesson_5 .exercise4 .close_popup").off("click").on("click", function() {
                    $(".unit_4_lesson_5 .exercise4 .feedback_box, .unit_4_lesson_5 .exercise4 .overlay, .unit_4_lesson_5 .exercise4 .wrong_feedback").hide();
                });

                $(".unit_4_lesson_5 .exercise4 .reload").on('click', function() {
                    $(".unit_4_lesson_5 .exercise4 .dotline_area .dotline, .unit_4_lesson_5 .exercise4 .dotline_area .singleline").removeClass('selected');
                });
            }
        }
    },

    unit_5_Fn: function() {
        unitLesson_1_Fn();
        unitLesson_2_Fn();
        unitLesson_3_Fn();
        unitLesson_4_Fn();
        unitLesson_5_Fn();

        function unitLesson_1_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {
                var isUserCorrectThree = true;

                $(".unit_5_lesson_1 .exercise2 .row1").on('click', function() {                    
                    $(this).toggleClass("blue");
                });
                $(".unit_5_lesson_1 .exercise2 .row2").on('click', function() {
                    $(this).toggleClass("yellow");
                });
                $(".unit_5_lesson_1 .exercise2 .row3").on('click', function() {
                    $(this).toggleClass("red");
                });
                $(".unit_5_lesson_1 .exercise2 .submit_btn").off("click").on("click", function() {
                    var temp1 = $(".row1.blue").length;
                    var temp2 = $(".row2.yellow").length;
                    var temp3 = $(".row3.red").length;


                    if (temp1 == 10 && temp2 == 10 && temp3 == 10) {
                        isUserCorrectThree = true;

                    } else {
                        isUserCorrectThree = false;
                    }


                    if (isUserCorrectThree == true) {
                        $(".unit_5_lesson_1 .exercise2 .feedback_box").show();
                        $(".unit_5_lesson_1 .exercise2 .overlay").show();
                        $(".unit_5_lesson_1 .exercise2 .feedback_box .right_feedback").show();
                    } else {
                        $(".unit_5_lesson_1 .exercise2 .feedback_box").show();
                        $(".unit_5_lesson_1 .exercise2 .overlay").show();
                        $(".unit_5_lesson_1 .exercise2 .feedback_box .wrong_feedback").show();
                    }

                });

                $(".unit_5_lesson_1 .exercise2 .close_popup").off("click").on("click", function() {

                    if (isUserCorrectThree == false) {
                        console.log();
                        $(".unit_5_lesson_1 .exercise2 .row1").removeClass("blue");
                        $(".unit_5_lesson_1 .exercise2 .row2").removeClass("yellow");
                        $(".unit_5_lesson_1 .exercise2 .row3").removeClass("red");

                    }
                    $(".unit_5_lesson_1 .exercise2 .feedback_box").hide();
                    $(".unit_5_lesson_1 .exercise2 .right_feedback").hide();
                    $(".unit_5_lesson_1 .exercise2 .wrong_feedback").hide();
                    $(".unit_5_lesson_1 .exercise2 .overlay").hide();

                });

                $(".unit_5_lesson_1 .exercise2 .reload").off("click").on("click", function() {
                    $(".unit_5_lesson_1 .exercise2 .row1").removeClass("blue");
                    $(".unit_5_lesson_1 .exercise2 .row2").removeClass("yellow");
                    $(".unit_5_lesson_1 .exercise2 .row3").removeClass("red");

                });
            }

            function exerciseFn_3() {
                var isUserCorrectThree = true;

                $(".unit_5_lesson_1 .exercise3 .correctBox").on('click', function() {                    
                    $(this).toggleClass("greenCross");
                });
                $(".unit_5_lesson_1 .exercise3 .wrongBox").on('click', function() {
                    $(this).toggleClass("redCross");
                });
                $(".unit_5_lesson_1 .exercise3 .submit_btn").off("click").on("click", function() {
                    var temp1 = $(".correctBox.greenCross").length;
                    var temp2 = $(".wrongBox.redCross").length;


                    if (temp1 == 6 && temp2 == 0) {
                        isUserCorrectThree = true;

                    } else {
                        isUserCorrectThree = false;
                    }


                    if (isUserCorrectThree == true) {
                        $(".unit_5_lesson_1 .exercise3 .feedback_box").show();
                        $(".unit_5_lesson_1 .exercise3 .overlay").show();
                        $(".unit_5_lesson_1 .exercise3 .feedback_box .right_feedback").show();
                    } else {
                        $(".unit_5_lesson_1 .exercise3 .feedback_box").show();
                        $(".unit_5_lesson_1 .exercise3 .overlay").show();
                        $(".unit_5_lesson_1 .exercise3 .feedback_box .wrong_feedback").show();
                    }

                });

                $(".unit_5_lesson_1 .exercise3 .close_popup").off("click").on("click", function() {

                    if (isUserCorrectThree == false) {
                        console.log();
                        $(".unit_5_lesson_1 .exercise3 .correctBox").removeClass("greenCross");
                        $(".unit_5_lesson_1 .exercise3 .wrongBox").removeClass("redCross");

                    }
                    $(".unit_5_lesson_1 .exercise3 .feedback_box").hide();
                    $(".unit_5_lesson_1 .exercise3 .right_feedback").hide();
                    $(".unit_5_lesson_1 .exercise3 .wrong_feedback").hide();
                    $(".unit_5_lesson_1 .exercise3 .overlay").hide();

                });

                $(".unit_5_lesson_1 .exercise3 .reload").off("click").on("click", function() {
                    $(".unit_5_lesson_1 .exercise3 .correctBox").removeClass("greenCross");
                    $(".unit_5_lesson_1 .exercise3 .wrongBox").removeClass("redCross");
                });
            }

            function exerciseFn_4() {
                var isUserCorrectOne = true;

                $(".unit_5_lesson_1 .exercise4 .submit_btn").on("click", function() {                   
                    FirstVal_2 = $("#two").val();
                    FirstVal_4 = $("#four").val();
                    FirstVal_6 = $("#six").val();
                    FirstVal_8 = $("#eight").val();
                    FirstVal_10 = $("#ten").val();
                    FirstVal_12 = $("#twelve").val();
                    FirstVal_14 = $("#fourteen").val();
                    FirstVal_16 = $("#sixteen").val();
                    FirstVal_18 = $("#eighteen").val();
                    FirstVal_20 = $("#twenty").val();
                    FirstVal_22 = $("#twentytwo").val();

                    FirstVal_24 = $("#twentyfour").val();
                    FirstVal_26 = $("#twentysix").val();
                    FirstVal_28 = $("#twentyeight").val();
                    FirstVal_30 = $("#thirty").val();
                   

                    if (FirstVal_2 === "2" && FirstVal_4 === "4" && FirstVal_6 === "6" && FirstVal_8 === "8" && FirstVal_10 === "10" && FirstVal_12 === "12" && FirstVal_14 === "14" && FirstVal_16 === "16" && FirstVal_18 === "18" && FirstVal_20 === "20" && FirstVal_22 === "22" && FirstVal_24 === "24" && FirstVal_26 === "26" && FirstVal_28 === "28" && FirstVal_30 === "30") {
                        isUserCorrectOne = true;
                    } else {
                        isUserCorrectOne = false;
                    }
                    if (isUserCorrectOne) {
                        $(".unit_5_lesson_1 .exercise4 .feedback_box").show();
                        $(".unit_5_lesson_1 .exercise4 .overlay").show();
                        $(".unit_5_lesson_1 .exercise4 .right_feedback").show();

                    } else {
                        $(".unit_5_lesson_1 .exercise4 .feedback_box").show();
                        $(".unit_5_lesson_1 .exercise4 .overlay").show();
                        $(".unit_5_lesson_1 .exercise4 .wrong_feedback").show();

                    }
                });
                $(".unit_5_lesson_1 .exercise4 .close_popup").off("click").on("click", function() {
                    if (isUserCorrectOne == false) {
                        $('.unit_5_lesson_1 .exercise4 .input_number_box input').each(function() {
                            $(this).val('');
                        });
                    }
                    $(".unit_5_lesson_1 .exercise4 .feedback_box").hide();
                    $(".unit_5_lesson_1 .exercise4 .right_feedback").hide();
                    $(".unit_5_lesson_1 .exercise4 .wrong_feedback").hide();
                    $(".unit_5_lesson_1 .exercise4 .overlay").hide();
                });

                $(".unit_5_lesson_1 .exercise4 .reload").on('click', function() {
                    $('.unit_5_lesson_1 .exercise4 .input_number_box input').each(function() {
                        $(this).val('');
                    });
                });
            }
        }

        function unitLesson_2_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {

            }

            function exerciseFn_3() {

            }

            function exerciseFn_4() {

            }
        }

        function unitLesson_3_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {
                var isUserCorrectThree = true;

                $(".unit_5_lesson_3 .exercise2 .row1").on('click', function() {                    
                    $(this).toggleClass("color1");
                });
                $(".unit_5_lesson_3 .exercise2 .row2").on('click', function() {
                    $(this).toggleClass("color2");
                });
                $(".unit_5_lesson_3 .exercise2 .row3").on('click', function() {
                    $(this).toggleClass("color3");
                });
                $(".unit_5_lesson_3 .exercise2 .row4").on('click', function() {
                    $(this).toggleClass("color4");
                });
                $(".unit_5_lesson_3 .exercise2 .submit_btn").off("click").on("click", function() {
                    var temp1 = $(".row1.color1").length;
                    var temp2 = $(".row2.color2").length;
                    var temp3 = $(".row3.color3").length;
                    var temp4 = $(".row4.color4").length;


                    if (temp1 == 10 && temp2 == 10 && temp3 == 10 && temp4 == 10) {
                        isUserCorrectThree = true;

                    } else {
                        isUserCorrectThree = false;
                    }


                    if (isUserCorrectThree == true) {
                        $(".unit_5_lesson_3 .exercise2 .feedback_box").show();
                        $(".unit_5_lesson_3 .exercise2 .overlay").show();
                        $(".unit_5_lesson_3 .exercise2 .feedback_box .right_feedback").show();
                    } else {
                        $(".unit_5_lesson_3 .exercise2 .feedback_box").show();
                        $(".unit_5_lesson_3 .exercise2 .overlay").show();
                        $(".unit_5_lesson_3 .exercise2 .feedback_box .wrong_feedback").show();
                    }

                });

                $(".unit_5_lesson_3 .exercise2 .close_popup").off("click").on("click", function() {

                    if (isUserCorrectThree == false) {
                        console.log();
                        $(".unit_5_lesson_3 .exercise2 .row1").removeClass("color1");
                        $(".unit_5_lesson_3 .exercise2 .row2").removeClass("color2");
                        $(".unit_5_lesson_3 .exercise2 .row3").removeClass("color3");
                        $(".unit_5_lesson_3 .exercise2 .row4").removeClass("color4");

                    }
                    $(".unit_5_lesson_3 .exercise2 .feedback_box").hide();
                    $(".unit_5_lesson_3 .exercise2 .right_feedback").hide();
                    $(".unit_5_lesson_3 .exercise2 .wrong_feedback").hide();
                    $(".unit_5_lesson_3 .exercise2 .overlay").hide();

                });

                $(".unit_5_lesson_3 .exercise2 .reload").off("click").on("click", function() {
                    $(".unit_5_lesson_3 .exercise2 .row1").removeClass("color1");
                    $(".unit_5_lesson_3 .exercise2 .row2").removeClass("color2");
                    $(".unit_5_lesson_3 .exercise2 .row3").removeClass("color3");
                    $(".unit_5_lesson_3 .exercise2 .row4").removeClass("color4");
                });
            }

            function exerciseFn_3() {
                var isUserCorrectOne = true;

                $(".unit_5_lesson_3 .exercise3 .submit_btn").on("click", function() {                   
                    FirstVal_1 = $("#number1").val();
                    FirstVal_2 = $("#number2").val();
                    FirstVal_3 = $("#number3").val();
                    FirstVal_4 = $("#number4").val();
                    FirstVal_5 = $("#number5").val();
                    FirstVal_6 = $("#number6").val();
                    FirstVal_7 = $("#number7").val();
                    FirstVal_8 = $("#number8").val();
                   

                    if (FirstVal_1 === "31" && FirstVal_2 === "32" && FirstVal_3 === "33" && FirstVal_4 === "34" && FirstVal_5 === "36" && FirstVal_6 === "37" && FirstVal_7 === "38" && FirstVal_8 === "39") {
                        isUserCorrectOne = true;
                    } else {
                        isUserCorrectOne = false;
                    }
                    if (isUserCorrectOne) {
                        $(".unit_5_lesson_3 .exercise3 .feedback_box").show();
                        $(".unit_5_lesson_3 .exercise3 .overlay").show();
                        $(".unit_5_lesson_3 .exercise3 .right_feedback").show();

                    } else {
                        $(".unit_5_lesson_3 .exercise3 .feedback_box").show();
                        $(".unit_5_lesson_3 .exercise3 .overlay").show();
                        $(".unit_5_lesson_3 .exercise3 .wrong_feedback").show();

                    }
                });
                $(".unit_5_lesson_3 .exercise3 .close_popup").off("click").on("click", function() {
                    if (isUserCorrectOne == false) {
                        $('.unit_5_lesson_3 .exercise3 .input_number_box input').each(function() {
                            $(this).val('');
                        });
                    }
                    $(".unit_5_lesson_3 .exercise3 .feedback_box").hide();
                    $(".unit_5_lesson_3 .exercise3 .right_feedback").hide();
                    $(".unit_5_lesson_3 .exercise3 .wrong_feedback").hide();
                    $(".unit_5_lesson_3 .exercise3 .overlay").hide();
                });

                $(".unit_5_lesson_3 .exercise3 .reload").on('click', function() {
                    $('.unit_5_lesson_3 .exercise3 .input_number_box input').each(function() {
                        $(this).val('');
                    });
                });
            }

            function exerciseFn_4() {
                var isUserCorrectThree = true;

                $(".unit_5_lesson_3 .exercise4 .correctBox").on('click', function() {                    
                    $(this).toggleClass("greenCircle");
                });
                $(".unit_5_lesson_3 .exercise4 .wrongBox").on('click', function() {
                    $(this).toggleClass("redCircle");
                });
                $(".unit_5_lesson_3 .exercise4 .submit_btn").off("click").on("click", function() {
                    var temp1 = $(".correctBox.greenCircle").length;
                    var temp2 = $(".wrongBox.redCircle").length;


                    if (temp1 == 5 && temp2 == 0) {
                        isUserCorrectThree = true;

                    } else {
                        isUserCorrectThree = false;
                    }


                    if (isUserCorrectThree == true) {
                        $(".unit_5_lesson_3 .exercise4 .feedback_box").show();
                        $(".unit_5_lesson_3 .exercise4 .overlay").show();
                        $(".unit_5_lesson_3 .exercise4 .feedback_box .right_feedback").show();
                    } else {
                        $(".unit_5_lesson_3 .exercise4 .feedback_box").show();
                        $(".unit_5_lesson_3 .exercise4 .overlay").show();
                        $(".unit_5_lesson_3 .exercise4 .feedback_box .wrong_feedback").show();
                    }

                });

                $(".unit_5_lesson_3 .exercise4 .close_popup").off("click").on("click", function() {

                    if (isUserCorrectThree == false) {
                        console.log();
                        $(".unit_5_lesson_3 .exercise4 .correctBox").removeClass("greenCircle");
                        $(".unit_5_lesson_3 .exercise4 .wrongBox").removeClass("redCircle");

                    }
                    $(".unit_5_lesson_3 .exercise4 .feedback_box").hide();
                    $(".unit_5_lesson_3 .exercise4 .right_feedback").hide();
                    $(".unit_5_lesson_3 .exercise4 .wrong_feedback").hide();
                    $(".unit_5_lesson_3 .exercise4 .overlay").hide();

                });

                $(".unit_5_lesson_3 .exercise4 .reload").off("click").on("click", function() {
                    $(".unit_5_lesson_3 .exercise4 .correctBox").removeClass("greenCircle");
                    $(".unit_5_lesson_3 .exercise4 .wrongBox").removeClass("redCircle");
                });
            }
        }

        function unitLesson_4_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {
                var isUserCorrectOne = true;
                $(".unit_5_lesson_4 .exercise2 .correctBox").on('click', function() {
                    $(this).parent().find(".wrongBox").removeClass("check_wrong");
                    $(this).addClass("check_correct");
                });
                $(".unit_5_lesson_4 .exercise2 .wrongBox").on('click', function() {
                    $(this).parent().find(".correctBox").removeClass("check_correct");
                    $(this).addClass("check_wrong");
                });

                $(".unit_5_lesson_4 .exercise2 .submit_btn").on('click', function() {

                    checkWrong = $(".check_wrong").length;
                    checkCorrect = $(".check_correct").length;

                    if (checkWrong === 0 && checkCorrect === 2) {
                        isUserCorrectOne = true;
                    } else {
                        isUserCorrectOne = false;
                    }
                    if (isUserCorrectOne) {
                        $(".unit_5_lesson_4 .exercise2 .feedback_box").show();
                        $(".unit_5_lesson_4 .exercise2 .overlay").show();
                        $(".unit_5_lesson_4 .exercise2 .right_feedback").show();

                    } else {
                        $(".unit_5_lesson_4 .exercise2 .feedback_box").show();
                        $(".unit_5_lesson_4 .exercise2 .overlay").show();
                        $(".unit_5_lesson_4 .exercise2 .wrong_feedback").show();

                    }
                });

                $(".unit_5_lesson_4 .exercise2 .close_popup").off("click").on("click", function() {
                    if (isUserCorrectOne == false) {
                        $(".check_wrong").parent().find(".correctBox").addClass("check_correct2")
                    }

                    $(".unit_5_lesson_4 .exercise2 .feedback_box").hide();
                    $(".unit_5_lesson_4 .exercise2 .right_feedback").hide();
                    $(".unit_5_lesson_4 .exercise2 .wrong_feedback").hide();
                    $(".unit_5_lesson_4 .exercise2 .overlay").hide();

                });

                $(".unit_5_lesson_4 .exercise2 .reload").on('click', function() {
                    $(".wrongBox").removeClass("check_wrong");
                    $(".correctBox").removeClass("check_correct");
                    $(".correctBox").removeClass("check_correct2");
                });
            }

            function exerciseFn_3() {
                var isUserCorrectOne = true;
                $(".unit_5_lesson_4 .exercise3 .correctBox").on('click', function() {
                    $(this).parent().find(".wrongBox").removeClass("check_wrong");
                    $(this).addClass("check_correct");
                });
                $(".unit_5_lesson_4 .exercise3 .wrongBox").on('click', function() {
                    $(this).parent().find(".correctBox").removeClass("check_correct");
                    $(this).addClass("check_wrong");
                });

                $(".unit_5_lesson_4 .exercise3 .submit_btn").on('click', function() {

                    checkWrong = $(".check_wrong").length;
                    checkCorrect = $(".check_correct").length;

                    if (checkWrong === 0 && checkCorrect === 2) {
                        isUserCorrectOne = true;
                    } else {
                        isUserCorrectOne = false;
                    }
                    if (isUserCorrectOne) {
                        $(".unit_5_lesson_4 .exercise3 .feedback_box").show();
                        $(".unit_5_lesson_4 .exercise3 .overlay").show();
                        $(".unit_5_lesson_4 .exercise3 .right_feedback").show();

                    } else {
                        $(".unit_5_lesson_4 .exercise3 .feedback_box").show();
                        $(".unit_5_lesson_4 .exercise3 .overlay").show();
                        $(".unit_5_lesson_4 .exercise3 .wrong_feedback").show();

                    }
                });

                $(".unit_5_lesson_4 .exercise3 .close_popup").off("click").on("click", function() {
                    if (isUserCorrectOne == false) {
                        $(".check_wrong").parent().find(".correctBox").addClass("check_correct2")
                    }

                    $(".unit_5_lesson_4 .exercise3 .feedback_box").hide();
                    $(".unit_5_lesson_4 .exercise3 .right_feedback").hide();
                    $(".unit_5_lesson_4 .exercise3 .wrong_feedback").hide();
                    $(".unit_5_lesson_4 .exercise3 .overlay").hide();

                });

                $(".unit_5_lesson_4 .exercise3 .reload").on('click', function() {
                    $(".wrongBox").removeClass("check_wrong");
                    $(".correctBox").removeClass("check_correct");
                    $(".correctBox").removeClass("check_correct2");
                });
            }

            function exerciseFn_4() {
                var isUserCorrectOne = true;

                $(".unit_5_lesson_4 .exercise4 .submit_btn").on("click", function() {                   
                    FirstVal_1 = $("#number1").val();
                    FirstVal_2 = $("#number2").val();
                    FirstVal_3 = $("#number3").val();
                    FirstVal_4 = $("#number4").val();
                   

                    if (FirstVal_1 === "6" && FirstVal_2 === "2" && FirstVal_3 === "5" && FirstVal_4 === "2") {
                        isUserCorrectOne = true;
                    } else {
                        isUserCorrectOne = false;
                    }
                    if (isUserCorrectOne) {
                        $(".unit_5_lesson_4 .exercise4 .feedback_box").show();
                        $(".unit_5_lesson_4 .exercise4 .overlay").show();
                        $(".unit_5_lesson_4 .exercise4 .right_feedback").show();

                    } else {
                        $(".unit_5_lesson_4 .exercise4 .feedback_box").show();
                        $(".unit_5_lesson_4 .exercise4 .overlay").show();
                        $(".unit_5_lesson_4 .exercise4 .wrong_feedback").show();

                    }
                });
                $(".unit_5_lesson_4 .exercise4 .close_popup").off("click").on("click", function() {
                    if (isUserCorrectOne == false) {
                        $('.unit_5_lesson_4 .exercise4 .input_area_box input').each(function() {
                            $(this).val('');
                        });
                    }
                    $(".unit_5_lesson_4 .exercise4 .feedback_box").hide();
                    $(".unit_5_lesson_4 .exercise4 .right_feedback").hide();
                    $(".unit_5_lesson_4 .exercise4 .wrong_feedback").hide();
                    $(".unit_5_lesson_4 .exercise4 .overlay").hide();
                });

                $(".unit_5_lesson_4 .exercise4 .reload").on('click', function() {
                    $('.unit_5_lesson_4 .exercise4 .input_area_box input').each(function() {
                        $(this).val('');
                    });
                });
            }
        }

        function unitLesson_5_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {
                var isUserCorrectThree = true;

                $(".unit_5_lesson_5 .exercise2 .row1").on('click', function() {                    
                    $(this).toggleClass("color1");
                });
                $(".unit_5_lesson_5 .exercise2 .row2").on('click', function() {
                    $(this).toggleClass("color2");
                });
                $(".unit_5_lesson_5 .exercise2 .row3").on('click', function() {
                    $(this).toggleClass("color3");
                });
                $(".unit_5_lesson_5 .exercise2 .row4").on('click', function() {
                    $(this).toggleClass("color4");
                });
                $(".unit_5_lesson_5 .exercise2 .row5").on('click', function() {
                    $(this).toggleClass("color5");
                });
                $(".unit_5_lesson_5 .exercise2 .submit_btn").off("click").on("click", function() {
                    var temp1 = $(".row1.color1").length;
                    var temp2 = $(".row2.color2").length;
                    var temp3 = $(".row3.color3").length;
                    var temp4 = $(".row4.color4").length;
                    var temp5 = $(".row5.color5").length;


                    if (temp1 == 10 && temp2 == 10 && temp3 == 10 && temp4 == 10 && temp5 == 10) {
                        isUserCorrectThree = true;

                    } else {
                        isUserCorrectThree = false;
                    }


                    if (isUserCorrectThree == true) {
                        $(".unit_5_lesson_5 .exercise2 .feedback_box").show();
                        $(".unit_5_lesson_5 .exercise2 .overlay").show();
                        $(".unit_5_lesson_5 .exercise2 .feedback_box .right_feedback").show();
                    } else {
                        $(".unit_5_lesson_5 .exercise2 .feedback_box").show();
                        $(".unit_5_lesson_5 .exercise2 .overlay").show();
                        $(".unit_5_lesson_5 .exercise2 .feedback_box .wrong_feedback").show();
                    }

                });

                $(".unit_5_lesson_5 .exercise2 .close_popup").off("click").on("click", function() {

                    if (isUserCorrectThree == false) {
                        console.log();
                        $(".unit_5_lesson_5 .exercise2 .row1").removeClass("color1");
                        $(".unit_5_lesson_5 .exercise2 .row2").removeClass("color2");
                        $(".unit_5_lesson_5 .exercise2 .row3").removeClass("color3");
                        $(".unit_5_lesson_5 .exercise2 .row4").removeClass("color4");
                        $(".unit_5_lesson_5 .exercise2 .row5").removeClass("color5");

                    }
                    $(".unit_5_lesson_5 .exercise2 .feedback_box").hide();
                    $(".unit_5_lesson_5 .exercise2 .right_feedback").hide();
                    $(".unit_5_lesson_5 .exercise2 .wrong_feedback").hide();
                    $(".unit_5_lesson_5 .exercise2 .overlay").hide();

                });

                $(".unit_5_lesson_5 .exercise2 .reload").off("click").on("click", function() {
                    $(".unit_5_lesson_5 .exercise2 .row1").removeClass("color1");
                    $(".unit_5_lesson_5 .exercise2 .row2").removeClass("color2");
                    $(".unit_5_lesson_5 .exercise2 .row3").removeClass("color3");
                    $(".unit_5_lesson_5 .exercise2 .row4").removeClass("color4");
                    $(".unit_5_lesson_5 .exercise2 .row5").removeClass("color5");
                });
            }

            function exerciseFn_3() {
                var isUserCorrectOne = true;

                $(".unit_5_lesson_5 .exercise3 .submit_btn").on("click", function() {                   
                    FirstVal_1 = $("#number1").val();
                    FirstVal_2 = $("#number2").val();
                    FirstVal_3 = $("#number3").val();
                    FirstVal_4 = $("#number4").val();
                    FirstVal_5 = $("#number5").val();
                    FirstVal_6 = $("#number6").val();
                    FirstVal_7 = $("#number7").val();
                   

                    if (FirstVal_1 === "41" && FirstVal_2 === "42" && FirstVal_3 === "44" && FirstVal_4 === "45" && FirstVal_5 === "47" && FirstVal_6 === "48" && FirstVal_7 === "50") {
                        isUserCorrectOne = true;
                    } else {
                        isUserCorrectOne = false;
                    }
                    if (isUserCorrectOne) {
                        $(".unit_5_lesson_5 .exercise3 .feedback_box").show();
                        $(".unit_5_lesson_5 .exercise3 .overlay").show();
                        $(".unit_5_lesson_5 .exercise3 .right_feedback").show();

                    } else {
                        $(".unit_5_lesson_5 .exercise3 .feedback_box").show();
                        $(".unit_5_lesson_5 .exercise3 .overlay").show();
                        $(".unit_5_lesson_5 .exercise3 .wrong_feedback").show();

                    }
                });
                $(".unit_5_lesson_5 .exercise3 .close_popup").off("click").on("click", function() {
                    if (isUserCorrectOne == false) {
                        $('.unit_5_lesson_5 .exercise3 .input_number_box input').each(function() {
                            $(this).val('');
                        });
                    }
                    $(".unit_5_lesson_5 .exercise3 .feedback_box").hide();
                    $(".unit_5_lesson_5 .exercise3 .right_feedback").hide();
                    $(".unit_5_lesson_5 .exercise3 .wrong_feedback").hide();
                    $(".unit_5_lesson_5 .exercise3 .overlay").hide();
                });

                $(".unit_5_lesson_5 .exercise3 .reload").on('click', function() {
                    $('.unit_5_lesson_5 .exercise3 .input_number_box input').each(function() {
                        $(this).val('');
                    });
                });
            }

            function exerciseFn_4() {

            }
        }
    },

    unit_6_Fn: function() {
        unitLesson_1_Fn();
        unitLesson_2_Fn();
        unitLesson_3_Fn();
        unitLesson_4_Fn();
        unitLesson_5_Fn();

        function unitLesson_1_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {

            }

            function exerciseFn_3() {

            }

            function exerciseFn_4() {

            }
        }

        function unitLesson_2_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {

            }

            function exerciseFn_3() {

            }

            function exerciseFn_4() {

            }
        }

        function unitLesson_3_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {

            }

            function exerciseFn_3() {

            }

            function exerciseFn_4() {

            }
        }

        function unitLesson_4_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {

            }

            function exerciseFn_3() {

            }

            function exerciseFn_4() {

            }
        }

        function unitLesson_5_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {

            }

            function exerciseFn_3() {

            }

            function exerciseFn_4() {

            }
        }
    },

    unit_7_Fn: function() {
        unitLesson_1_Fn();
        unitLesson_2_Fn();
        unitLesson_3_Fn();
        unitLesson_4_Fn();
        unitLesson_5_Fn();

        function unitLesson_1_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {
                var isUserCorrectOne = false;
                $(".unit_7_lesson_1 .exercise2 .numberPanel .numberRow > div").click(function(){
                    $(this).addClass('selected');
                });
                $(".unit_7_lesson_1 .exercise2 .submit_btn").on('click', function() {
                    const selectedDot = $(".unit_7_lesson_1 .exercise2 .numberPanel .numberRow div.selected").length
                    isUserCorrectOne = selectedDot === 80 ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_7_lesson_1 .exercise2 .feedback_box, .unit_7_lesson_1 .exercise2 .overlay, .unit_7_lesson_1 .exercise2 .right_feedback").show();
                        $(".unit_7_lesson_1 .exercise2 .wrong_feedback").hide();
                    } else {
                        $(".unit_7_lesson_1 .exercise2 .feedback_box, .unit_7_lesson_1 .exercise2 .overlay, .unit_7_lesson_1 .exercise2 .wrong_feedback").show();
                        $(".unit_7_lesson_1 .exercise2 .right_feedback").hide();
                    }
                });

                $(".unit_7_lesson_1 .exercise2 .close_popup").off("click").on("click", function() {
                    $(".unit_7_lesson_1 .exercise2 .feedback_box, .unit_7_lesson_1 .exercise2 .overlay, .unit_7_lesson_1 .exercise2 .wrong_feedback").hide();
                });

                $(".unit_7_lesson_1 .exercise2 .reload").on('click', function() {
                    $(".unit_7_lesson_1 .exercise2 .numberPanel .numberRow div").removeClass('selected');
                });
            }

            function exerciseFn_3() {
                var isUserCorrectOne = false;

                $(".unit_7_lesson_1 .exercise3 .dotline_area .dotline").click(function(){
                    var selectedDot = false;
                    if($(this).hasClass('line1_dot')){
                        $(this).addClass('selected');
                    } else {
                        if($(this).prev().prev().hasClass('selected')){
                            $(this).prev().addClass('selected');
                            $(this).addClass('selected');
                        }
                    }
                });

                $(".unit_7_lesson_1 .exercise3 .submit_btn").on('click', function() {
                    const selectedDot = $(".unit_7_lesson_1 .exercise3  .dotline_area .dotline.selected").length;
                    isUserCorrectOne = selectedDot === 10 ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_7_lesson_1 .exercise3 .feedback_box, .unit_7_lesson_1 .exercise3 .overlay, .unit_7_lesson_1 .exercise3 .right_feedback").show();
                        $(".unit_7_lesson_1 .exercise3 .wrong_feedback").hide();
                    } else {
                        $(".unit_7_lesson_1 .exercise3 .feedback_box, .unit_7_lesson_1 .exercise3 .overlay, .unit_7_lesson_1 .exercise3 .wrong_feedback").show();
                        $(".unit_7_lesson_1 .exercise3 .right_feedback").hide();
                    }
                });

                $(".unit_7_lesson_1 .exercise3 .close_popup").off("click").on("click", function() {
                    $(".unit_7_lesson_1 .exercise3 .feedback_box, .unit_7_lesson_1 .exercise3 .overlay, .unit_7_lesson_1 .exercise3 .wrong_feedback").hide();
                });

                $(".unit_7_lesson_1 .exercise3 .reload").on('click', function() {
                    $(".unit_7_lesson_1 .exercise3 .dotline_area .dotline, .unit_7_lesson_1 .exercise3 .dotline_area .singleline").removeClass('selected');
                });
            }

            function exerciseFn_4() {
                var isUserCorrectOne = false;
                var correctArray = [72,74,76,78,80];
                var answerArray = [];
                $(".unit_7_lesson_1 .exercise4 .numberPanel .numberRow > div").click(function(){
                    $(this).addClass('selected');
                });
                $(".unit_7_lesson_1 .exercise4 .submit_btn").on('click', function() {
                    answerArray = [];
                    $(".unit_7_lesson_1 .exercise4 .numberPanel .numberRow div.selected").each(function(){
                        answerArray.push(1*$(this).text());
                    });

                    isUserCorrectOne = JSON.stringify(answerArray.sort()) == JSON.stringify(correctArray) ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_7_lesson_1 .exercise4 .feedback_box, .unit_7_lesson_1 .exercise4 .overlay, .unit_7_lesson_1 .exercise4 .right_feedback").show();
                        $(".unit_7_lesson_1 .exercise4 .wrong_feedback").hide();
                    } else {
                        $(".unit_7_lesson_1 .exercise4 .feedback_box, .unit_7_lesson_1 .exercise4 .overlay, .unit_7_lesson_1 .exercise4 .wrong_feedback").show();
                        $(".unit_7_lesson_1 .exercise4 .right_feedback").hide();
                    }
                });

                $(".unit_7_lesson_1 .exercise4 .close_popup").off("click").on("click", function() {
                    $(".unit_7_lesson_1 .exercise4 .feedback_box, .unit_7_lesson_1 .exercise4 .overlay, .unit_7_lesson_1 .exercise4 .wrong_feedback").hide();
                });

                $(".unit_7_lesson_1 .exercise4 .reload").on('click', function() {
                    $(".unit_7_lesson_1 .exercise4 .numberPanel .numberRow div").removeClass('selected');
                });
            }
        }

        function unitLesson_2_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();
            exerciseFn_5();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {
                var isUserCorrectOne = false;
                $(".unit_7_lesson_2 .exercise2 .box_uper .selectedArea").click(function(){
                    if($(this).hasClass('square1')){
                        $(this).parent().addClass('big');
                        $(this).parent().removeClass('small');
                    } else if($(this).hasClass('square2')) {
                        $(this).parent().removeClass('big');
                        $(this).parent().addClass('small');
                    } else if($(this).hasClass('circle1')){
                        $(this).parent().removeClass('big');
                        $(this).parent().addClass('small');
                    } else if($(this).hasClass('circle2')) {
                        $(this).parent().addClass('big');
                        $(this).parent().removeClass('small');
                    }
                });
                $(".unit_7_lesson_2 .exercise2 .submit_btn").on('click', function() {
                    isUserCorrectOne = $(".unit_7_lesson_2 .exercise2 .full_box .box1").hasClass('big') && $(".unit_7_lesson_2 .exercise2 .full_box .box2").hasClass('big') ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_7_lesson_2 .exercise2 .feedback_box, .unit_7_lesson_2 .exercise2 .overlay, .unit_7_lesson_2 .exercise2 .right_feedback").show();
                        $(".unit_7_lesson_2 .exercise2 .wrong_feedback").hide();
                    } else {
                        $(".unit_7_lesson_2 .exercise2 .feedback_box, .unit_7_lesson_2 .exercise2 .overlay, .unit_7_lesson_2 .exercise2 .wrong_feedback").show();
                        $(".unit_7_lesson_2 .exercise2 .right_feedback").hide();
                    }
                });

                $(".unit_7_lesson_2 .exercise2 .close_popup").off("click").on("click", function() {
                    $(".unit_7_lesson_2 .exercise2 .feedback_box, .unit_7_lesson_2 .exercise2 .overlay, .unit_7_lesson_2 .exercise2 .wrong_feedback").hide();
                });

                $(".unit_7_lesson_2 .exercise2 .reload").on('click', function() {
                    $(".unit_7_lesson_2 .exercise2 .full_box .box1, .unit_7_lesson_2 .exercise2 .full_box .box2").removeClass('big');
                    $(".unit_7_lesson_2 .exercise2 .full_box .box1, .unit_7_lesson_2 .exercise2 .full_box .box2").removeClass('small');
                });
            }

            function exerciseFn_3() {
                var isUserCorrectOne = false;
                $(".unit_7_lesson_2 .exercise3 .box_uper .box1 .selectedArea").click(function(){
                    $(".unit_7_lesson_2 .exercise3 .box_uper .box1 .selectedArea").removeClass('selected');
                    $(this).addClass('selected');
                });
                $(".unit_7_lesson_2 .exercise3 .box_uper .box2 .selectedArea").click(function(){
                    $(".unit_7_lesson_2 .exercise3 .box_uper .box2 .selectedArea").removeClass('selected');
                    $(this).addClass('selected');
                });
                $(".unit_7_lesson_2 .exercise3 .submit_btn").on('click', function() {
                    isUserCorrectOne = $(".unit_7_lesson_2 .exercise3 .full_box .box1 .selectedArea.small").hasClass('selected') && $(".unit_7_lesson_2 .exercise3 .full_box .box2 .selectedArea.small2").hasClass('selected') ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_7_lesson_2 .exercise3 .feedback_box, .unit_7_lesson_2 .exercise3 .overlay, .unit_7_lesson_2 .exercise3 .right_feedback").show();
                        $(".unit_7_lesson_2 .exercise3 .wrong_feedback").hide();
                    } else {
                        $(".unit_7_lesson_2 .exercise3 .feedback_box, .unit_7_lesson_2 .exercise3 .overlay, .unit_7_lesson_2 .exercise3 .wrong_feedback").show();
                        $(".unit_7_lesson_2 .exercise3 .right_feedback").hide();
                    }
                });

                $(".unit_7_lesson_2 .exercise3 .close_popup").off("click").on("click", function() {
                    $(".unit_7_lesson_2 .exercise3 .feedback_box, .unit_7_lesson_2 .exercise3 .overlay, .unit_7_lesson_2 .exercise3 .wrong_feedback").hide();
                });

                $(".unit_7_lesson_2 .exercise3 .reload").on('click', function() {
                    $(".unit_7_lesson_2 .exercise3 .box_uper .selectedArea").removeClass('selected');
                });
            }

            function exerciseFn_4() {
                var isUserCorrectOne = false;
                var bigCircle = '';
                var smallCircle = '';

                $(".unit_7_lesson_2 .exercise4 .submit_btn").on('click', function() {
                    bigCircle = $(".unit_7_lesson_2 .exercise4 .bottom_box .left_txt input").val();
                    smallCircle = $(".unit_7_lesson_2 .exercise4 .bottom_box .right_txt input").val();
                    isUserCorrectOne = bigCircle === '5' && smallCircle === '8' ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_7_lesson_2 .exercise4 .feedback_box, .unit_7_lesson_2 .exercise4 .overlay, .unit_7_lesson_2 .exercise4 .right_feedback").show();
                        $(".unit_7_lesson_2 .exercise4 .wrong_feedback").hide();
                    } else {
                        $(".unit_7_lesson_2 .exercise4 .feedback_box, .unit_7_lesson_2 .exercise4 .overlay, .unit_7_lesson_2 .exercise4 .wrong_feedback").show();
                        $(".unit_7_lesson_2 .exercise4 .right_feedback").hide();
                    }
                });

                $(".unit_7_lesson_2 .exercise4 .close_popup").off("click").on("click", function() {
                    $(".unit_7_lesson_2 .exercise4 .feedback_box, .unit_7_lesson_2 .exercise4 .overlay, .unit_7_lesson_2 .exercise4 .wrong_feedback").hide();
                });

                $(".unit_7_lesson_2 .exercise4 .reload").on('click', function() {
                    $(".unit_7_lesson_2 .exercise4 .bottom_box input").val('');
                });
            }

            function exerciseFn_5() {
                var isUserCorrectOne = false;
                var bigCircle = '';
                var smallCircle = '';

                $(".unit_7_lesson_2 .exercise5 .submit_btn").on('click', function() {
                    bigCircle = $(".unit_7_lesson_2 .exercise5 .bottom_box .left_txt input").val();
                    smallCircle = $(".unit_7_lesson_2 .exercise5 .bottom_box .right_txt input").val();
                    isUserCorrectOne = bigCircle === '4' && smallCircle === '10' ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_7_lesson_2 .exercise5 .feedback_box, .unit_7_lesson_2 .exercise5 .overlay, .unit_7_lesson_2 .exercise5 .right_feedback").show();
                        $(".unit_7_lesson_2 .exercise5 .wrong_feedback").hide();
                    } else {
                        $(".unit_7_lesson_2 .exercise5 .feedback_box, .unit_7_lesson_2 .exercise5 .overlay, .unit_7_lesson_2 .exercise5 .wrong_feedback").show();
                        $(".unit_7_lesson_2 .exercise5 .right_feedback").hide();
                    }
                });

                $(".unit_7_lesson_2 .exercise5 .close_popup").off("click").on("click", function() {
                    $(".unit_7_lesson_2 .exercise5 .feedback_box, .unit_7_lesson_2 .exercise5 .overlay, .unit_7_lesson_2 .exercise5 .wrong_feedback").hide();
                });

                $(".unit_7_lesson_2 .exercise5 .reload").on('click', function() {
                    $(".unit_7_lesson_2 .exercise5 .bottom_box input").val('');
                });
            }
        }

        function unitLesson_3_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {
                var isUserCorrectOne = false;
                $(".unit_7_lesson_3 .exercise2 .numberPanel .numberRow > div").click(function(){
                    $(this).addClass('selected');
                });
                $(".unit_7_lesson_3 .exercise2 .submit_btn").on('click', function() {
                    const selectedDot = $(".unit_7_lesson_3 .exercise2 .numberPanel .numberRow div.selected").length
                    isUserCorrectOne = selectedDot === 90 ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_7_lesson_3 .exercise2 .feedback_box, .unit_7_lesson_3 .exercise2 .overlay, .unit_7_lesson_3 .exercise2 .right_feedback").show();
                        $(".unit_7_lesson_3 .exercise2 .wrong_feedback").hide();
                    } else {
                        $(".unit_7_lesson_3 .exercise2 .feedback_box, .unit_7_lesson_3 .exercise2 .overlay, .unit_7_lesson_3 .exercise2 .wrong_feedback").show();
                        $(".unit_7_lesson_3 .exercise2 .right_feedback").hide();
                    }
                });

                $(".unit_7_lesson_3 .exercise2 .close_popup").off("click").on("click", function() {
                    $(".unit_7_lesson_3 .exercise2 .feedback_box, .unit_7_lesson_3 .exercise2 .overlay, .unit_7_lesson_3 .exercise2 .wrong_feedback").hide();
                });

                $(".unit_7_lesson_3 .exercise2 .reload").on('click', function() {
                    $(".unit_7_lesson_3 .exercise2 .numberPanel .numberRow div").removeClass('selected');
                });
            }

            function exerciseFn_3() {
                var isUserCorrectOne = false;
                var textbox1 = '';
                var textbox2 = '';
                var textbox3 = '';
                var textbox4 = '';
                var textbox5 = '';
                var textbox6 = '';

                $(".unit_7_lesson_3 .exercise3 .submit_btn").on('click', function() {
                    textbox1 = $(".unit_7_lesson_3 .exercise3 .input_area input.inputbox1").val();
                    textbox2 = $(".unit_7_lesson_3 .exercise3 .input_area input.inputbox2").val();
                    textbox3 = $(".unit_7_lesson_3 .exercise3 .input_area input.inputbox3").val();
                    textbox4 = $(".unit_7_lesson_3 .exercise3 .input_area input.inputbox4").val();
                    textbox5 = $(".unit_7_lesson_3 .exercise3 .input_area input.inputbox5").val();
                    textbox6 = $(".unit_7_lesson_3 .exercise3 .input_area input.inputbox6").val();
                    isUserCorrectOne = (textbox1 === '80' && textbox2 === '82' && textbox3 === '84' && textbox4 === '86' && textbox5 === '88' && textbox6 === '90') ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_7_lesson_3 .exercise3 .feedback_box, .unit_7_lesson_3 .exercise3 .overlay, .unit_7_lesson_3 .exercise3 .right_feedback").show();
                        $(".unit_7_lesson_3 .exercise3 .wrong_feedback").hide();
                    } else {
                        $(".unit_7_lesson_3 .exercise3 .feedback_box, .unit_7_lesson_3 .exercise3 .overlay, .unit_7_lesson_3 .exercise3 .wrong_feedback").show();
                        $(".unit_7_lesson_3 .exercise3 .right_feedback").hide();
                        $(".unit_7_lesson_3 .exercise3 .input_area input").val('');
                    }
                });

                $(".unit_7_lesson_3 .exercise3 .close_popup").off("click").on("click", function() {
                    $(".unit_7_lesson_3 .exercise3 .feedback_box, .unit_7_lesson_3 .exercise3 .overlay, .unit_7_lesson_3 .exercise3 .wrong_feedback").hide();
                });

                $(".unit_7_lesson_3 .exercise3 .reload").on('click', function() {
                    $(".unit_7_lesson_3 .exercise3 .input_area input").val('');
                });
            }

            function exerciseFn_4() {
                var isUserCorrectOne = false;
                var correctArray = [81,83,85,87,89];
                var answerArray = [];
                $(".unit_7_lesson_3 .exercise4 .numberPanel .numberRow > div").click(function(){
                    $(this).addClass('selected');
                });
                $(".unit_7_lesson_3 .exercise4 .submit_btn").on('click', function() {
                    answerArray = [];
                    $(".unit_7_lesson_3 .exercise4 .numberPanel .numberRow div.selected").each(function(){
                        answerArray.push(1*$(this).text());
                    });

                    isUserCorrectOne = JSON.stringify(answerArray.sort()) == JSON.stringify(correctArray) ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_7_lesson_3 .exercise4 .feedback_box, .unit_7_lesson_3 .exercise4 .overlay, .unit_7_lesson_3 .exercise4 .right_feedback").show();
                        $(".unit_7_lesson_3 .exercise4 .wrong_feedback").hide();
                    } else {
                        $(".unit_7_lesson_3 .exercise4 .feedback_box, .unit_7_lesson_3 .exercise4 .overlay, .unit_7_lesson_3 .exercise4 .wrong_feedback").show();
                        $(".unit_7_lesson_3 .exercise4 .right_feedback").hide();
                    }
                });

                $(".unit_7_lesson_3 .exercise4 .close_popup").off("click").on("click", function() {
                    $(".unit_7_lesson_3 .exercise4 .feedback_box, .unit_7_lesson_3 .exercise4 .overlay, .unit_7_lesson_3 .exercise4 .wrong_feedback").hide();
                });

                $(".unit_7_lesson_3 .exercise4 .reload").on('click', function() {
                    $(".unit_7_lesson_3 .exercise4 .numberPanel .numberRow div").removeClass('selected');
                });
            }
        }

        function unitLesson_4_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {
                var isUserCorrectOne = false;
                $(".unit_7_lesson_4 .exercise2 .box_uper .box1 .selectedArea").click(function(){
                    $(".unit_7_lesson_4 .exercise2 .box_uper .box1 .selectedArea").removeClass('selected');
                    $(this).addClass('selected');
                });
                $(".unit_7_lesson_4 .exercise2 .box_uper .box2 .selectedArea").click(function(){
                    $(".unit_7_lesson_4 .exercise2 .box_uper .box2 .selectedArea").removeClass('selected');
                    $(this).addClass('selected');
                });
                $(".unit_7_lesson_4 .exercise2 .submit_btn").on('click', function() {
                    isUserCorrectOne = $(".unit_7_lesson_4 .exercise2 .full_box .box1 .selectedArea.big").hasClass('selected') && $(".unit_7_lesson_4 .exercise2 .full_box .box2 .selectedArea.big2").hasClass('selected') ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_7_lesson_4 .exercise2 .feedback_box, .unit_7_lesson_4 .exercise2 .overlay, .unit_7_lesson_4 .exercise2 .right_feedback").show();
                        $(".unit_7_lesson_4 .exercise2 .wrong_feedback").hide();
                    } else {
                        $(".unit_7_lesson_4 .exercise2 .feedback_box, .unit_7_lesson_4 .exercise2 .overlay, .unit_7_lesson_4 .exercise2 .wrong_feedback").show();
                        $(".unit_7_lesson_4 .exercise2 .right_feedback").hide();
                    }
                });

                $(".unit_7_lesson_4 .exercise2 .close_popup").off("click").on("click", function() {
                    $(".unit_7_lesson_4 .exercise2 .feedback_box, .unit_7_lesson_4 .exercise2 .overlay, .unit_7_lesson_4 .exercise2 .wrong_feedback").hide();
                });

                $(".unit_7_lesson_4 .exercise2 .reload").on('click', function() {
                    $(".unit_7_lesson_4 .exercise2 .box_uper .selectedArea").removeClass('selected');
                });
            }

            function exerciseFn_3() {

            }

            function exerciseFn_4() {

            }
        }

        function unitLesson_5_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {
                var isUserCorrectOne = false;
                $(".unit_7_lesson_5 .exercise2 .numberPanel .numberRow > div").click(function(){
                    $(this).addClass('selected');
                });
                $(".unit_7_lesson_5 .exercise2 .submit_btn").on('click', function() {
                    const selectedDot = $(".unit_7_lesson_5 .exercise2 .numberPanel .numberRow div.selected").length
                    isUserCorrectOne = selectedDot === 100 ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_7_lesson_5 .exercise2 .feedback_box, .unit_7_lesson_5 .exercise2 .overlay, .unit_7_lesson_5 .exercise2 .right_feedback").show();
                        $(".unit_7_lesson_5 .exercise2 .wrong_feedback").hide();
                    } else {
                        $(".unit_7_lesson_5 .exercise2 .feedback_box, .unit_7_lesson_5 .exercise2 .overlay, .unit_7_lesson_5 .exercise2 .wrong_feedback").show();
                        $(".unit_7_lesson_5 .exercise2 .right_feedback").hide();
                    }
                });

                $(".unit_7_lesson_5 .exercise2 .close_popup").off("click").on("click", function() {
                    $(".unit_7_lesson_5 .exercise2 .feedback_box, .unit_7_lesson_5 .exercise2 .overlay, .unit_7_lesson_5 .exercise2 .wrong_feedback").hide();
                });

                $(".unit_7_lesson_5 .exercise2 .reload").on('click', function() {
                    $(".unit_7_lesson_5 .exercise2 .numberPanel .numberRow div").removeClass('selected');
                });
            }

            function exerciseFn_3() {
                var isUserCorrectOne = false;
                var textbox1 = '';
                var textbox2 = '';
                var textbox3 = '';
                var textbox4 = '';
                var textbox5 = '';

                $(".unit_7_lesson_5 .exercise3 .submit_btn").on('click', function() {
                    textbox1 = $(".unit_7_lesson_5 .exercise3 .text_box_area input.textbox1").val();
                    textbox2 = $(".unit_7_lesson_5 .exercise3 .text_box_area input.textbox2").val();
                    textbox3 = $(".unit_7_lesson_5 .exercise3 .text_box_area input.textbox3").val();
                    textbox4 = $(".unit_7_lesson_5 .exercise3 .text_box_area input.textbox4").val();
                    textbox5 = $(".unit_7_lesson_5 .exercise3 .text_box_area input.textbox5").val();
                    isUserCorrectOne = textbox1 === '92' && textbox2 === '94' && textbox3 === '96' && textbox4 === '98' && textbox5 === '100' ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_7_lesson_5 .exercise3 .feedback_box, .unit_7_lesson_5 .exercise3 .overlay, .unit_7_lesson_5 .exercise3 .right_feedback").show();
                        $(".unit_7_lesson_5 .exercise3 .wrong_feedback").hide();
                    } else {
                        $(".unit_7_lesson_5 .exercise3 .feedback_box, .unit_7_lesson_5 .exercise3 .overlay, .unit_7_lesson_5 .exercise3 .wrong_feedback").show();
                        $(".unit_7_lesson_5 .exercise3 .right_feedback").hide();
                    }
                });

                $(".unit_7_lesson_5 .exercise3 .close_popup").off("click").on("click", function() {
                    $(".unit_7_lesson_5 .exercise3 .feedback_box, .unit_7_lesson_5 .exercise3 .overlay, .unit_7_lesson_5 .exercise3 .wrong_feedback").hide();
                });

                $(".unit_7_lesson_5 .exercise3 .reload").on('click', function() {
                    $(".unit_7_lesson_5 .exercise3 .text_box_area input.textbox1").val('');
                    $(".unit_7_lesson_5 .exercise3 .text_box_area input.textbox2").val('');
                    $(".unit_7_lesson_5 .exercise3 .text_box_area input.textbox3").val('');
                    $(".unit_7_lesson_5 .exercise3 .text_box_area input.textbox4").val('');
                    $(".unit_7_lesson_5 .exercise3 .text_box_area input.textbox5").val('');
                });
            }

            function exerciseFn_4() {
                var isUserCorrectOne = false;
                var textbox1 = '';
                var textbox2 = '';
                var textbox3 = '';
                var textbox4 = '';
                var textbox5 = '';
                var textbox6 = '';
                var textbox7 = '';
                var textbox8 = '';
                var textbox9 = '';
                var textbox10 = '';
                $(".unit_7_lesson_5 .exercise4 .submit_btn").on('click', function() {
                    textbox1 = $(".unit_7_lesson_5 .exercise4 .numberRow input.textbox1").val();
                    textbox2 = $(".unit_7_lesson_5 .exercise4 .numberRow input.textbox2").val();
                    textbox3 = $(".unit_7_lesson_5 .exercise4 .numberRow input.textbox3").val();
                    textbox4 = $(".unit_7_lesson_5 .exercise4 .numberRow input.textbox4").val();
                    textbox5 = $(".unit_7_lesson_5 .exercise4 .numberRow input.textbox5").val();
                    textbox6 = $(".unit_7_lesson_5 .exercise4 .numberRow input.textbox6").val();
                    textbox7 = $(".unit_7_lesson_5 .exercise4 .numberRow input.textbox7").val();
                    textbox8 = $(".unit_7_lesson_5 .exercise4 .numberRow input.textbox8").val();
                    textbox9 = $(".unit_7_lesson_5 .exercise4 .numberRow input.textbox9").val();
                    textbox10 = $(".unit_7_lesson_5 .exercise4 .numberRow input.textbox10").val();
                    isUserCorrectOne = textbox1 === '91' && textbox2 === '92' && textbox3 === '93' && textbox4 === '94' && textbox5 === '95' && textbox6 === '96' && textbox7 === '97' && textbox8 === '98' && textbox9 === '99' && textbox10 === '100' ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_7_lesson_5 .exercise4 .feedback_box, .unit_7_lesson_5 .exercise4 .overlay, .unit_7_lesson_5 .exercise4 .right_feedback").show();
                        $(".unit_7_lesson_5 .exercise4 .wrong_feedback").hide();
                    } else {
                        $(".unit_7_lesson_5 .exercise4 .feedback_box, .unit_7_lesson_5 .exercise4 .overlay, .unit_7_lesson_5 .exercise4 .wrong_feedback").show();
                        $(".unit_7_lesson_5 .exercise4 .right_feedback").hide();
                    }
                });

                $(".unit_7_lesson_5 .exercise4 .close_popup").off("click").on("click", function() {
                    $(".unit_7_lesson_5 .exercise4 .feedback_box, .unit_7_lesson_5 .exercise4 .overlay, .unit_7_lesson_5 .exercise4 .wrong_feedback").hide();
                });

                $(".unit_7_lesson_5 .exercise4 .reload").on('click', function() {
                    $(".unit_7_lesson_5 .exercise4 .numberRow input.textbox1").val('');
                    $(".unit_7_lesson_5 .exercise4 .numberRow input.textbox2").val('');
                    $(".unit_7_lesson_5 .exercise4 .numberRow input.textbox3").val('');
                    $(".unit_7_lesson_5 .exercise4 .numberRow input.textbox4").val('');
                    $(".unit_7_lesson_5 .exercise4 .numberRow input.textbox5").val('');
                    $(".unit_7_lesson_5 .exercise4 .numberRow input.textbox6").val('');
                    $(".unit_7_lesson_5 .exercise4 .numberRow input.textbox7").val('');
                    $(".unit_7_lesson_5 .exercise4 .numberRow input.textbox8").val('');
                    $(".unit_7_lesson_5 .exercise4 .numberRow input.textbox9").val('');
                    $(".unit_7_lesson_5 .exercise4 .numberRow input.textbox10").val('');
                });
            }
        }
    },

    unit_8_Fn: function() {
        unitLesson_1_Fn();
        unitLesson_2_Fn();
        unitLesson_3_Fn();
        unitLesson_4_Fn();
        unitLesson_5_Fn();

        function unitLesson_1_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {

            }

            function exerciseFn_3() {

            }

            function exerciseFn_4() {

            }
        }

        function unitLesson_2_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {

            }

            function exerciseFn_3() {

            }

            function exerciseFn_4() {

            }
        }

        function unitLesson_3_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {

            }

            function exerciseFn_3() {

            }

            function exerciseFn_4() {

            }
        }

        function unitLesson_4_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {

            }

            function exerciseFn_3() {

            }

            function exerciseFn_4() {

            }
        }

        function unitLesson_5_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {

            }

            function exerciseFn_3() {

            }

            function exerciseFn_4() {

            }
        }
    }
}