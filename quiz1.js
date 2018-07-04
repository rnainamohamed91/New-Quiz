var pos=0, test, test_status, question, choice, choices, ch_1,ch_2,ch_3,answer =0; 
var questions = [
  ["what is my name","n","a","naina","C"],
  ["what is 10+1","9","11","1","B"],
  ["what is 10+2","12","1","2","A"],
  ["what is 10+3","2","13","3","B"],  
];

function _(x){ 
  return document.getElementById(x);
}

function renderQuestion(){
  if(pos>=questions.length)
  {
    _("test_status").innerHTML = "Test Completed";
    
    test.innerHTML = answer + " correct answers out of " + questions.length; 
   pos =0;
   answer=0;
    return false;
  }
 _("test_status").innerHTML = "Question" + (pos+1) + " of " + questions.length;
  test = _("test");
  question = questions[pos][0];
  ch_1 = questions[pos][1];
  ch_2 = questions[pos][2];
  ch_3 = questions[pos][3];
  test.innerHTML = question + "<br>";
test.innerHTML += "<input type ='radio' name ='choices' value ='A'>" + ch_1 +     "<br>";
test.innerHTML +="<input type ='radio' name ='choices' value ='B'>" + ch_2 +    "<br>";
 test.innerHTML += "<input type ='radio' name ='choices' value ='C'>" + ch_3 +     "<br>";
test.innerHTML += "<button onclick='checkAnswer()'>Submit</button>";
}

function checkAnswer(){
  choices =document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++)
  {
    if(choices[i].checked)
      {
        choice = choices[i].value;
      }
  }
  if(choice == questions[pos][4])
    { 
      answer++;
    }
  pos++;
  renderQuestion();
}

window.addEventListener("load", renderQuestion, false);