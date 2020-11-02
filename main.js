Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("camera");

Webcam.attach('#camera');

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
      
  function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }

dont_be_sad_array = ["Don't be sad and don't give up on your dreams. Dreams will come true one day. There's no person as beautiful as a person who dreams",
"Don't be sad! Because God sends hope in the most desperate moments. Don't forget, the heaviest rain comes out of the darkest clouds.",
"Don't be sad about the goodbyes! Because in many farewells, better unions are hidden!",
"Don't be sad about the goodbyes! Because in many farewells, better unions are hidden!"];

function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    
    //write a code to store the speech API in variable, store the label property of result which we want the system to speak ,use the speech synthesis function to convert text to speech and then use speak() to read out the text provided
    
    
    
    
    
    
 document.getElementById("result_emotion_name").innerHTML = results[0].label;
document.getElementById("result_emotion_name2").innerHTML = results[1].label;
    if(results[0].label == "happy")
    {
    document.getElementById("update_emoji").innerHTML = "&#128522;";
    }
    if(results[0].label == "sad")
    {
 document.getElementById("update_emoji").innerHTML = "&#128532;";
     
    }
    if(results[0].label == "angry")
    {
	    document.getElementById("update_emoji").innerHTML = "&#128548;";
    }

    if(results[1].label == "happy")
    {
	    document.getElementById("update_emoji2").innerHTML = "&#128522;";
    }
    if(results[1].label == "sad")
    {
	    document.getElementById("update_emoji2").innerHTML = "&#128532;";
    }
    if(results[1].label == "angry")
    {
	    document.getElementById("update_emoji2").innerHTML = "&#128548;";
    }

  }
}