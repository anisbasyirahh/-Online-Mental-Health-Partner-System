(function() 
 {
  var allQuestions = [{
    question: "I couldn't seem to experience any positive feeling at all",
    options: ["0 (Not at all)", "1", "2", "3 (All the time)"],
    answer: 3
  }, {
    question: "I experienced breathing difficulty (eg, excessively rapid breathing, breathlessness in the absence of physical exertion)",
    options: ["0 (Not at all)", "1", "2", "3 (All the time)"],
    answer: 3
  },{
    question: "I tended to over-react to situations",
    options: ["0 (Not at all)", "1", "2", "3 (All the time)"],
    answer: 3
  }, {
    question: "I had a feeling of shakiness (eg, legs going to give way)",
    options: ["0 (Not at all)", "1", "2", "3 (All the time)"],
    answer: 3
  },{
    question: "I found myself in situations that made me so anxious I was most relieved when they ended",
    options: ["0 (Not at all)", "1", "2", "3 (All the time)"],
    answer: 3
  },{
    question: "I felt that life wasn't worthwhile",
    options: ["0 (Not at all)", "1", "2", "3 (All the time)"],
    answer: 3
  },{
    question: "I was aware of the action of my heart in the absence of physical exertion (eg, sense of heart rate increase, heart missing a beat)",
    options: ["0 (Not at all)", "1", "2", "3 (All the time)"],
    answer: 3
  },{
    question: "I found that I was very irritable",
    options: ["0 (Not at all)", "1", "2", "3 (All the time)"],
    answer: 3
  },{
    question: "I felt I was close to panic",
    options: ["0 (Not at all)", "1", "2", "3 (All the time)"],
    answer: 3
  },{
    question: "I felt scared without any good reason",
    options: ["0 (Not at all)", "1", "2", "3 (All the time)"],
    answer: 3
  },{
    question: "I experienced trembling (eg, in the hands)",
    options: ["0 (Not at all)", "1", "2", "3 (All the time)"],
    answer: 3
  },{
    question: "I was worried about situations in which I might panic and make a fool of myself",
    options: ["0 (Not at all)", "1", "2", "3 (All the time)"],
    answer: 3
  },{
    question: "I could see nothing in the future to be hopeful about",
    options: ["0 (Not at all)", "1", "2", "3 (All the time)"],
    answer: 3
  },{
    question: "I felt I was pretty worthless",
    options: ["0 (Not at all)", "1", "2", "3 (All the time)"],
    answer: 3
  },{
    question: "I was in a state of nervous tension",
    options: ["0 (Not at all)", "1", "2", "3 (All the time)"],
    answer: 3
  },{
    question: "I felt sad and depressed",
    options: ["0 (Not at all)", "1", "2", "3 (All the time)"],
    answer: 3
  },{
    question: "I perspired noticeably (eg, hands sweaty) in the absence of high temperatures or physical exertiond",
    options: ["0 (Not at all)", "1", "2", "3 (All the time)"],
    answer: 3
  },{
    question: "I felt I wasn't worth much as a person",
    options: ["0 (Not at all)", "1", "2", "3 (All the time)"],
    answer: 3
    }];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('Your mental health symptoms ' + correct + ' out of ' +allQuestions.length);
        return score;
  }
})();

