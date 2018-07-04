window.onload=function(){
   var proj1Section = document.getElementById('proj1-section');
   var proj2Section = document.getElementById('proj2-section');
   var proj3Section = document.getElementById('proj3-section');
   var proj4Section = document.getElementById('proj4-section');
   var projectPadding = document.getElementById('project-padding');
   var projectsMenu = document.getElementById('projects-menu');
   var backArrow = document.getElementById('back-arrow');
   var proj1ImagePath1 = './assets/images/gymtracker-images/create-workout.jpg';
   var proj1ImagePath2 = './assets/images/gymtracker-images/exercises.jpg';
   var proj1ImagePath3 = './assets/images/gymtracker-images/create-workout-save.jpg';
   var proj1ImagePath4 = './assets/images/gymtracker-images/save-workout.jpg';
   var proj1ImagePath5 = './assets/images/gymtracker-images/saved-workouts.jpg';
   var proj1ImagePath6 = './assets/images/gymtracker-images/create-workout-start.jpg';
   var proj1ImagePath7 = './assets/images/gymtracker-images/workout.jpg';
   var proj1ImagePath8 = './assets/images/gymtracker-images/incline-barbell-press.jpg';
   var proj1ImagePath9 = './assets/images/gymtracker-images/create-workout-log.jpg';
   var proj1ImagePath10 = './assets/images/gymtracker-images/dates.jpg';
   var proj1ImagePath11 = './assets/images/gymtracker-images/log.jpg';
   
   var proj1Description1 = 'This is the workout builder of the application. The following screenshots will walk through and demonstrate the process of creating custom workouts, entering exercise data, and viewing workout history.';
   var proj1Description2 = 'Clicking the add button leads us to this screen where the user can select which exercises he or she want to add to a custom workout.';
   var proj1Description3 = 'Each time user selects an exercise it is added to a list on the workout builder screen.';
   var proj1Description4 = 'Once user is satisfied with the exercises that were selected, pressing save will prompt user to choose a name for the custom workout.';
   var proj1Description5 = 'The workout building process is complete, and user can now select from a list of custom workouts he or she created in addition to the previous.';
   var proj1Description6 = 'Selecting a workout from the saved workout list will display the corresponding exercises on the main menu ready to click start in order to begin the workout itself.';
   var proj1Description7 = 'The application is now in workout mode. The user is now expected to select an exercise that he or she is currently performing.';
   var proj1Description8 = 'The user is now able to input weight and reps performed in addition to add more sets. Once finished with the current exercise, pressing log sets will save the data that was entered.';
   var proj1Description9 = 'Once workout is over we return to the main menu where we can now select the log button.';
   var proj1Description10 = 'A list of dates are displayed corresponding to the days that the user worked out. Selecting a specific date will display the contents of that workout';
   var proj1Description11= 'The date selected conveniently displays the exercise, weight, and reps in a set-by-set manner.';


   var proj1ImagePaths = [proj1ImagePath1, proj1ImagePath2, proj1ImagePath3, proj1ImagePath4, proj1ImagePath5, proj1ImagePath6, proj1ImagePath7, proj1ImagePath8, proj1ImagePath9, proj1ImagePath10, proj1ImagePath11];
   var proj1Descriptions = [proj1Description1, proj1Description2, proj1Description3, proj1Description4, proj1Description5, proj1Description6, proj1Description7, proj1Description8, proj1Description9, proj1Description10, proj1Description11];
   var imageIndex = 0;
   var descriptionIndex = 0;

   var proj2Description1 = 'This is the main menu of the video game. Here a user can either start a new game, load a previously saved one, or quit out of the game completely.';
   var proj2Description2 = 'If we choose to start a brand new game, the user is prompted to input a number which will serve as a seed to randomly generate a 2D world for the user to explore.';
   var proj2Description3 = 'A world is generated with randomly placed rooms and hallways connecting them and two players are placed at bottom right corner.';
   var proj2Description4 = 'Two players are able to simultaneously control their player using the s, d, f, e and j, k, l, i keys. User can press :q in order to quit the game or :s to save it.';
   var proj2Descriptions = [proj2Description1, proj2Description2, proj2Description3, proj2Description4];

   function activateButton(name, action, isId) {
      var el = document.getElementById(name)
      if (el) {
         isId ? el.addEventListener('click', function(e) {action();}) : document.getElementById(name).addEventListener('click', function(e) {
         action();});
      }
   }


   function getwrapCrementIndex(arr, i, isIncrement) {
      if (isIncrement) {
         i = i + 1;
         return i == arr.length ? 0 : i;
      } else {
         i = i - 1;
         return i == -1 ? arr.length - 1 : i;
      }
   }
               
   function crementImageAction1(isIncrement) {
      imageIndex = getwrapCrementIndex(proj1ImagePaths, imageIndex, isIncrement);
      document.getElementById('proj1-displayed-img').src=proj1ImagePaths[imageIndex];
   }
   
   function crementDescriptionAction1(isIncrement) {
      descriptionIndex = getwrapCrementIndex(proj1Descriptions, descriptionIndex, isIncrement);
      document.getElementById('projectDescription1').innerHTML=proj1Descriptions[descriptionIndex];
   }
   
   function rightArrowAction1() {
      crementImageAction1(true);
      crementDescriptionAction1(true);
   }
   
   function leftArrowAction1() {
      crementImageAction1(false);
      crementDescriptionAction1(false);
   }
   
   activateButton('right-arrow1', rightArrowAction1, true);
   activateButton('left-arrow1', leftArrowAction1, true);
   
   //first project image functions above


   var proj2ImagePath1 = './assets/images/80s-video-game-images/menu.jpg';
   var proj2ImagePath2 = './assets/images/80s-video-game-images/seed.jpg';
   var proj2ImagePath3 = './assets/images/80s-video-game-images/world.jpg';
   var proj2ImagePath4 = './assets/images/80s-video-game-images/characters.jpg';

   var proj2ImagePaths = [proj2ImagePath1, proj2ImagePath2, proj2ImagePath3, proj2ImagePath4];

   function rightArrowAction2() {
      crementImageAction2(true);
      crementDescriptionAction2(true);
   }

   function leftArrowAction2() {
      crementImageAction2(false);
      crementDescriptionAction2(false);
   }

   function crementImageAction2(isIncrement) {
      imageIndex = getwrapCrementIndex(proj2ImagePaths, imageIndex, isIncrement);
      document.getElementById('proj2-displayed-img').src=proj2ImagePaths[imageIndex];
   }

   function crementDescriptionAction2(isIncrement) {
      descriptionIndex = getwrapCrementIndex(proj2Descriptions, descriptionIndex, isIncrement);
      document.getElementById('projectDescription2').innerHTML=proj2Descriptions[descriptionIndex];
   }

   activateButton('right-arrow2', rightArrowAction2, true);
   activateButton('left-arrow2', leftArrowAction2, true);

   //second project image functions above
   
   function getwrapCrementIndex(arr, i, isIncrement) {
      if (isIncrement) {
         i = i + 1;
         return i == arr.length ? 0 : i;
      } else {
         i = i - 1;
         return i == -1 ? arr.length - 1 : i;
      }
   }
   
   var proj3ImagePath1 = './assets/images/maps-images/out.jpg';
   var proj3ImagePath2 = './assets/images/maps-images/in.jpg';
   var proj3ImagePath3 = './assets/images/maps-images/astar.gif';
   
   var proj3ImagePaths = [proj3ImagePath1, proj3ImagePath2, proj3ImagePath3];
   
   
   function rightArrowAction3() {
      crementImageAction3(true);
      crementDescriptionAction3(true);
   }
   
   function leftArrowAction3() {
      crementImageAction3(false);
      crementDescriptionAction3(false);
   }
   
   function crementImageAction3(isIncrement) {
      imageIndex = getwrapCrementIndex(proj3ImagePaths, imageIndex, isIncrement);
      document.getElementById('proj3-displayed-img').src=proj3ImagePaths[imageIndex];
   }
   
   function crementDescriptionAction3(isIncrement) {
      descriptionIndex = getwrapCrementIndex(proj1Descriptions, descriptionIndex, isIncrement);
      document.getElementById('projectDescription3').innerHTML=proj1Descriptions[descriptionIndex];
   }
   
   activateButton('right-arrow3', rightArrowAction3, true);
   activateButton('left-arrow3', leftArrowAction3, true);


   //third project image functions above

   
   proj4SectionStyleDisplay = 'none'
   
   var proj4ImagePath1 = './assets/images/3d-graphics-images/jupiter2.jpg';
   var proj4ImagePath2 = './assets/images/3d-graphics-images/jupiter1.jpg';
   var proj4ImagePath3 = './assets/images/3d-graphics-images/egg2.jpg';
   var proj4ImagePath4 = './assets/images/3d-graphics-images/egg1.jpg';
   var proj4ImagePath5 = './assets/images/3d-graphics-images/stack2.jpg';
   var proj4ImagePath6 = './assets/images/3d-graphics-images/stack1.jpg';
   var proj4ImagePath7 = './assets/images/3d-graphics-images/rear2.jpg';
   var proj4ImagePath8 = './assets/images/3d-graphics-images/rear1.jpg';
   var proj4ImagePath9 = './assets/images/3d-graphics-images/all2.jpg';
   var proj4ImagePath10 = './assets/images/3d-graphics-images/all1.jpg';
   
   var proj4ImagePaths = [proj4ImagePath1, proj4ImagePath2, proj4ImagePath3, proj4ImagePath4, proj4ImagePath5, proj4ImagePath6, proj4ImagePath7, proj4ImagePath8, proj4ImagePath9, proj4ImagePath10];

   
   function rightArrowAction4() {
      crementImageAction4(true);
      crementDescriptionAction4(true);
   }
   
   function leftArrowAction4() {
      crementImageAction4(false);
      crementDescriptionAction4(false);
   }
   
   function crementImageAction4(isIncrement) {
      imageIndex = getwrapCrementIndex(proj4ImagePaths, imageIndex, isIncrement);
      document.getElementById('proj4-displayed-img').src=proj4ImagePaths[imageIndex];
   }
   
   function crementDescriptionAction4(isIncrement) {
      descriptionIndex = getwrapCrementIndex(proj1Descriptions, descriptionIndex, isIncrement);
      document.getElementById('projectDescription4').innerHTML=proj1Descriptions[descriptionIndex];
   }
   
   activateButton('right-arrow4', rightArrowAction4, true);
   activateButton('left-arrow4', leftArrowAction4, true);

   //project 4 image functions above

      $(document).ready(function(){
       $("#project-btn").click(function () {
          $("html, body").animate({ scrollTop: $("#projects-menu").offset().top }, 500);
          return true;
      });
   });
  
  
   function findPos(obj) {
       var curtop = 0;
       if (obj.offsetParent) {
           do {
               curtop += obj.offsetTop;
           } while (obj = obj.offsetParent);
       return [curtop];
       }
   }
}
