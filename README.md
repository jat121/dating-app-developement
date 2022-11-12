# dating-app-developement

#Run project?
1. npm i --force
2. expo start will generate a QR code that can be scanned by expo go app it will automatically generate the app in your phone
3. after expo start press "w" to open web
4. Download expo go app on mobile and scan the given QR code  make sure mobile and laptop are on same wifi, if it doesnt run in one run try closing the app
  and closing your terminal and run expo start again and scan the new QR code "use cmd"..

#Folder Structure
  App.js is the entry file

#components Folder
  AssetExample.js is a garbage component completely ignore it
  Container.js is basiically the inner and main div for design purpose(tumne banvaya tha)
  MainScreen.js ko ignore krdo vo samjhaunga me aaram se but for breif it basically has the bottom tab bar used for navigating to home, add post, likes, profile
  
  #Swipe.js (Main component which renders the whole design)
  it is nothing but basically a react component.. ignore all the complicated values in the beginning and only focus on line 269 - 295.. ignore everything else..
  else is basically used for adding swiping cards animation 
  
  Line 294 is the line which renders the swipable cards by the help of a function Called "render users".. try to read that function it renders the whole swipable cards.
 
 #React Native
  Everything is same components are same hooks are same as react...
  differnece is u cannot use css files for designing you have to write the designs in the js file only or throught inline styling by the use of "style" attribute..
  
  Check Container.js for getting refernece of how to add classes in js file 
    1. go to container.js
     2. check line 18-31..
     
     it looks like this =>  const s = StyleSheet.create({
                                          main: {
                                              backgroundColor:"ivory",
                                              height: SCREEN_HEIGHT,
                                              width: SCREEN_WIDTH
                                          },
                                          inner:{
                                              borderBottomLeftRadius: 20,
                                              backgroundColor:"ivory",
                                              height: SCREEN_HEIGHT-80,
                                              width: SCREEN_WIDTH,
                                              borderBottomRightRadius:20
                                          }
                                      })
                    
                    #Here main and inner are classes and "const s" is the variable that helps us in accessing them
                      how to use them?
                        #watch line 8 & 9 in Container.js to see the usage example of js based stylesheet..
                        
                     #Baaki kuch samjh na aaye to google krke dekhna nhi to me aajaunga to samjha dunga ache se.
  
