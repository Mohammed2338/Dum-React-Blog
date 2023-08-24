import { createContext, useState } from "react"; // pehle import karna hai api ku aur access karna hai phir export

export const ContextData = createContext();
// arrow function
export const ProvideData = (props) => {
  const [Data, setData] = useState([
    {
      id: 1,
      img: "https://hindi.cdn.zeenews.com/hindi/sites/default/files/styles/zm_700x400/public/2023/08/03/2016289-prabhas-project-k.png?itok=z8IQ5jfJ",
      head: "Things didn't work out with Shraddha, Pooja, Kriti, but Prabhas got the support of ",
      descr:
        "Prabhas Actresses: Hero alone does not work in films. Certainly the heroine seen with him also plays a big role in the story. The last three films of Prabhas, who became popular across the country with Bahubali, were flops. The main reason for this was also that his chemistry with the heroines of the film did not set. Hopefully the situation will change in the next film.  ",
      catg: "bollywood",
    },
    {
      id: 2,
      img: "https://st1.bollywoodlife.com/wp-content/uploads/2023/08/Untitled-design-22.jpg?impolicy=Medium_Widthonly&w=420",
      head: "This is how Dharmendra used to take care of children in Hema Malini's absence",
      descr:
        "Esha Deol Interview: Bollywood actress Esha Deol told how her father Dharmendra used to take care of her mother Hema Malini in her absence. Esha Deol told these things during an interview.",
      catg: "bollywood",
    },
    {
      id: 3,
      img: "https://st1.bollywoodlife.com/wp-content/uploads/2023/08/gadi-1.jpg?impolicy=Medium_Widthonly&w=420",
      head: "Gadar 2's song 'Main Nikla Gaddi Leke' will blow your mind as soon as it is released",
      descr:
        "Gadar 2 Song Main Nikla Gaddi Leke Out: The new song 'Main Nikla Gaddi Leke' from Sunny Deol and Amisha Patle's upcoming film 'Gadar 2' has been released. People are liking the duet of Sunny Deol and Utkarsh Sharma in the song.",
      catg: "bollywood",
    },
    {
      id: 4,
      img: "https://st1.bollywoodlife.com/wp-content/uploads/2023/08/Rocky-Aur-Rani-Ki-Prem-Kahani-stars-9.png?impolicy=Medium_Widthonly&w=420",
      head: "Alia Bhatt arrived wearing a saree at RARKPK's press conference, Karan Johar ",
      descr:
        "Rocky Aur Rani Ki Prem Kahani Press Conference: A press conference was organized after the success of 'Rocky Aur Rani Ki Prem Kahani'. Alia Bhatt appeared wearing a saree at this press conference. So at the same time, this style of Karan Johar won the hearts of the fans.",
      catg: "bollywood",
    },
    {
      id: 5,
      img: "https://st1.bollywoodlife.com/wp-content/uploads/2023/08/rani-1.jpg?impolicy=Medium_Widthonly&w=303",
      head: "Rani Mukerji will participate in IFFM 2023, will organize master class",
      descr:
        "Rani Mukerji to deliver masterclass at IFFM: A report has surfaced regarding Bollywood actress Rani Mukerji, in which it has been told that she will host a masterclass at the Film Festival of Melbourne.",
      catg: "bollywood",
    },
    {
      id: 6,
      img: "https://st1.bollywoodlife.com/wp-content/uploads/2023/08/Untitled-design-19.jpg?impolicy=Medium_Widthonly&w=303",
      head: "'This hero is 57 years old?...' Anand Mahindra commented on Shahrukh, King Khan gave this reply",
      descr:
        "Anand Mahindra Reaction On Shah Rukh Khan Age: Industrialist Anand Mahindra has tweeted about Shah Rukh Khan's song 'Zinda Banda'. Shahrukh Khan has replied to him on this.",
      catg: "bollywood",
    },
    {
      id: 7,
      img: "https://st1.bollywoodlife.com/wp-content/uploads/2023/08/Collage-Maker-02-Aug-2023-11-19-PM-3621.jpg?impolicy=Medium_Widthonly&w=303",
      head: "Today Entertainment News: 'Adah Sharma' admitted to the hospital after her health deteriorated, 'Guns and Roses' trailer released",
      descr:
        "Today Entertainment News: Many big updates have grabbed attention from the entertainment industry today. On one hand, where actress Ada Sharma has been admitted to the hospital due to ill health, on the other hand, the trailer of 'Guns Aur Gulab' has been released.",
      catg: "bollywood",
    },
    {
      id: 8,
      img: "https://st1.bollywoodlife.com/wp-content/uploads/2023/08/Untitled-design-11.jpg?impolicy=Medium_Widthonly&w=303",
      head: "Sushant Singh Rajput's sister shared brother's picture, fans became emotional",
      descr:
        "Sushant Singh Rajput Photo: An old picture of late actor Sushant Singh Rajput has been shared by his sister Shweta Singh Kirti. Seeing the picture of Sushant Singh Rajput, his fans have become emotional",
      catg: "bollywood",
    },
    {
      id: 9,
      img: "https://st1.bollywoodlife.com/wp-content/uploads/2023/08/Untitled-design-1-3.jpg?impolicy=Medium_Widthonly&w=303",
      head: "Karthik Aryan's first look out from Chandu Champion, people said - 'Superhit film is about to come'",
      descr:
        "Kartik Aaryan Film First Look: The first look of Bollywood actor Kartik Aryan from the film 'Chandu Champion' has come out. Karthik Aryan's look from the film 'Chandu Champion' is being liked",
      catg: "bollywood",
    },
    {
      id: 10,
      img: "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/welcome-3.jpg?impolicy=Medium_Widthonly&w=303",
      head: "Anil Kapoor and Nana Patekar were cut from Welcome 3, entry of these 2 stars",
      descr:
        "Sanjay Dutt-Arshad Warsi in Welcome 3: An update has come about the film Welcome 3, in which it has been told that Anil Kapoor and Nana Patekar's leaves have been cut from this movie. Both of them have been replaced by Sanjay Dutt and Arshad Wars",
      catg: "bollywood",
    },
    {
      id: 11,
      img: "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/image-1-21.jpg?impolicy=Medium_Widthonly&w=303",
      head: "Throwback: Why did Meena Kumari hide her left hand from the camera? Will be shocked to know the reason",
      descr:
        "Bollywood Throwback: Veteran actress Meena Kumari of the 40-50s faced many challenges in her life. But do you know that the actress used to hide her left hand in front of the camera? Know what is the reason for this?",
      catg: "bollywood",
    },
    {
      id: 12,
      img: "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/Kareena-Kapoor-Share-Cute-Photo-With-Jeh.png?impolicy=Medium_Widthonly&w=303",
      head: "Kareena Kapoor shared the cutest picture ever with Jeh, people said - MashaAllah Nazar Na Lage",
      descr:
        "Kareena Kapoor Share Cute Photo With Jeh: Kareena Kapoor has recently shared the cutest picture ever with Jeh from her Instagram handle. As soon as this picture of these two came, it got viral on social media.",
      catg: "bollywood",
    },
    {
      id: 13,
      img: "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/Javed-Akhtar-Case-Update.png?impolicy=Medium_Widthonly&w=303",
      head: "Summons issued against Javed Akhtar in the case filed by Kangana Ranaut, court orders to appear on August 5",
      descr:
        "Court on Kangana Ranaut complaint: On the complaint filed by Kangana Ranaut, the court has issued summons against Javed Akhtar and ordered him to appear in the court on August 5.",
      catg: "bollywood",
    },
    {
      id: 14,
      img: "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/image-41.jpg?impolicy=Medium_Widthonly&w=303",
      head: "Vivek Oberoi duped of Rs 1.55 crore, FIR lodged against three business partners",
      descr:
        "Vivek Oberoi Files FIR Against His Business Partner: Actor Vivek Oberoi was duped by his own business partners. According to reports, Vivek has been cheated of Rs 1.55 crore.",
      catg: "bollywood",
    },
    {
      id: 15,
      img: "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/Untitled-design-128.jpg?impolicy=Medium_Widthonly&w=303",
      head: "Photos of Salman Khan's shooting leaked from the sets of Tiger 3, fans said - 'Can't wait for the film now'",
      descr:
        "Tiger 3 Shooting Photos-Video: Videos and photos from the sets of Salman Khan's film 'Tiger 3' are going viral on social media. Seeing them, the fans have become very excited about the film.",
      catg: "bollywood",
    },
    {
      id: 16,
      img: "https://hollywoodlife.com/wp-content/uploads/2023/08/southern-charm-season-9-vertical.jpg?w=300",
      head: "‘Southern Charm’ Season 9 Cast: Photos Of The Familiar Faces & Newbies",
      descr:
        "‘Southern Charm’ season 9 is ready to charm us all this fall. Get the latest on the returning cast members and meet the new faces in our gallery.",
      catg: "hollywood",
    },
    {
      id: 17,
      img: "https://hollywoodlife.com/wp-content/uploads/2023/08/ben-affleck-emme-makeup-free-jlo-vacation-vertical.jpg?w=300",
      head: "Ben Affleck Gives Emme A Ride On His Bicycle As J.Lo Goes Makeup-Free On Family Outing",
      descr:
        "Emme Muniz, 15, held onto their stepdad’s back during a summer bike ride with ‘Bennifer’ in the Hamptons.",
      catg: "hollywood",
    },
    {
      id: 18,
      img: "https://c.ndtvimg.com/2023-08/npbi3hbo_barbie_120x90_02_August_23.jpg",
      head: "Warner Bros. Apologises After '/Barbenheimer/' Tweets Spark Criticism",
      descr:
        "The Warner Bros. Film Group in the United States has issued a public apology about social media activity concerning the 'Barbenheimer' meme, which has caused outrage in Japan",
      catg: "hollywood",
    },
    {
      id: 19,
      img: "https://www.hindustantimes.com/ht-img/img/2023/08/02/148x111/_d55df2b4-d696-11e8-9906-75af39aa85f1_1690996618629.jpg",
      head: "Gal Gadot confirms she will star in ‘Wonder Woman 3’",
      descr:
        "Gal Gadot talked about her adoration for the WonderWoman series and revealed that she would be working with James and Peter for its third installment.",
      catg: "hollywood",
    },
    {
      id: 20,
      img: "https://hips.hearstapps.com/hmg-prod/images/suki-waterhouse-and-robert-pattinson-attend-the-dior-news-photo-1589317521.jpg?crop=1.00xw:0.733xh;0,0.157xh&resize=360:*",
      head: "Robert Pattinson and Suki Waterhouse's Complete Relationship Timeline",
      descr: "Despite Robert Pattinson's big screen career and Suki Waterhouse's supermodel status, we don't know much about their relationship. Both of these Brits prefer to keep their private life out of the public sphere. As their romance continues past the three-year mark, here's a rundown of their secretive story.",
      catg: "hollywood",
    },
    {
      id: 21,
      img: "https://www.hindustantimes.com/ht-img/img/2023/07/31/550x309/Loki-0_1672380896597_1690823699361.jpg",
      head: "Loki Season 2 teaser out - Fan reactions, where to watch, plot and more!",
      descr:
        "Exciting Season 2 of Marvel's Loki is coming to Disney+ on Oct. 6. Loki faces time-slipping challenges and encounters Kang the Conqueror.",
      catg: "hollywood",
    },
    {
      id: 22,
      img: "https://hollywoodlife.com/wp-content/uploads/2023/08/billie-eilish-dedicate-song-to-angus-cloud-vertical.jpg?w=300",
      head: "Billie Eilish Honors Angus Cloud With ‘Euphoria’ Song Performance At Lollapalooza: Watch",
      descr:
        "The ‘Happier Than Ever’ popstar dedicated a performance of ‘Never Felt So Alone’ to the late actor, who died unexepctedly at 25.",
      catg: "hollywood",
    },
    {
      id: 23,
      img: "https://hollywoodlife.com/wp-content/uploads/2023/08/tom-brady-irina-shayk-date-night-vertical.jpg?w=300",
      head: "Tom Brady & Irina Shayk Were In ‘Their Own Little World’ On Secret Date Night: Report",
      descr:
        "Tom Brady and Irina Shayk reportedly went on a romantic sushi date one week after their first rendezvous made headlines in July.",
      catg: "hollywood",
    },
    {
      id: 24,
      img: "https://hollywoodlife.com/wp-content/uploads/2023/08/prince-harry-meghan-markle-striped-strapless-dress-date-vertical.jpg?w=300",
      head: "Meghan Markle Dazzles In Strapless Dress For Date With Prince Harry Ahead Of 42nd Birthday: Photos",
      descr:
        "After laying low for most of the summer, Meghan Markle and Prince Harry grabbed dinner in Montecito, California to celebrate her birthday.",
      catg: "hollywood",
    },
    {
      id: 25,
      img: "https://hollywoodlife.com/wp-content/uploads/2022/08/celebs-drinking-beer-gal-ftr.jpg?w=300",
      head: "Celebrities Drinking Beer: Heidi Klum, Kate Middleton & More Toast To International Beer Day",
      descr:
        "Celebrities love a good beer like everyone else. Celebrate International Beer Day with a look at stars sitting back and enjoying some cold ones.",
      catg: "hollywood",
    },
    {
      id: 26,
      img: "https://hollywoodlife.com/wp-content/uploads/2023/08/tim-mcgraw-reveals-daughters-turned-down-song-collab-ss-vertical.jpg?w=300",
      head: "Tim McGraw Reveals His Daughters Turned Down Song Collab With Him: ‘I’d Love To’ Do It",
      descr:
        "Tim McGraw hilariously admitted that his three adult daughters refuse to sing with him.",
      catg: "hollywood",
    },
    {
      id: 27,
      img: "https://hollywoodlife.com/wp-content/uploads/2023/08/jersey-shore-ronnie-cried-vertical.jpg?w=300",
      head: "‘Jersey Shore’: Ronnie Cries & Admits He ‘Misses’ The Roommates After ‘Nobody’ Answered His Text",
      descr:
        "Ronnie Ortiz-Magro got emotional as he opened up to The Situation about missing the rest of the ‘Jersey Shore’ cast on the Aug. 3 episode.",
      catg: "hollywood",
    },
    {
      id: 28,
      img: "https://www.hollywoodreporter.com/wp-content/uploads/2023/08/Will-Smith-getty-H-2023.jpg?w=825&h=550&crop=1",
      head: "Will Smith Reveals How Steven Spielberg Convinced Him to Star in ‘Men in Black’: “Sent a Helicopter for Me”https://www.hollywoodreporter.com/wp-content/uploads/2023/08/Will-Smith-getty-H-2023.jpg?w=825&h=550&crop=1",
      descr:
        "In a recent interview with Kevin Hart, the actor also opens up about how he felt like he in immersing himself in his role for '/Emancipation/'",
      catg: "hollywood",
    },
    {
      id: 29,
      img: "https://www.hollywoodreporter.com/wp-content/uploads/2023/08/rev-1-MEG2-FP-0029r_High_Res_JPEG.jpg?w=450&h=253&crop=1",
      head: "‘Meg 2: The Trench’ Review: Jason Statham Carries a Heavy Load in Patchy Prehistoric Shark Sequel",
      descr:
        "Director Ben Wheatley goes bigger with this follow-up to the surprise summer 2018 hit, this time teaming Statham with Chinese action star Wu Jing.",
      catg: "hollywood",
    },
    {
      id: 30,
      img: "https://www.hollywoodreporter.com/wp-content/uploads/2023/07/Swagger_Photo_020801-H-2023.jpg?w=450&h=253&crop=1",
      head: "Swagger Director on the Importance of DEI Officers and Festivals Like Martha’s Vineyard African American Film Fest",
      descr:
        "If there's one thing married couple Floyd Rance and Stephanie Tavares-Rance know how to do, it’s keep a secret. Last year, on the eve of the Martha’s Vineyard African American Film Festival, its founders were tight-lipped about their 20th anniversary opening-night presenters. “I just told my mother,” says Tavares-Rance of the fact that Barack and",
      catg: "hollywood",
    },
    {
      id: 31,
      img: "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2023/08/01/1253904-whey-protein.jpg",
      head: "Fitness Regime: 5 Health Benefits Of Adding Whey Protein Supplements",
      descr:
        " Whether you aim to build muscles, enhance recovery, or improve overall health, whey protein can be a valuable addition to your dietary routine. ",
      catg: "fitness",
    },
    {
      id: 32,
      img: "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2023/07/29/1251587-hiit-workout.png",
      head: "Benefits Of Exercise: Working Out While Fasting Can Help With Mental Focus",
      descr:
        "Fasting has been a tradition as old as any. We all have fasted at one time or another, for various reasons including but not limited to cultural, religious, and health purposes. Here are reasons why working out during your fast can help you with burning fat and mental clarity.",
      catg: "fitness",
    },
    {
      id: 33,
      img: "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2023/07/28/1251394-exercise-afternoon.jpg",
      head: "Around 5 Minutes Of Vigorous Activity Daily May Reduce Risk Of Cancer: Study",
      descr:
        "Carrying heavy shopping around the grocery store, bursts of power walking or playing high-energy games with the kids can have tremendous benefits for health.",
      catg: "fitness",
    },
    {
      id: 34,
      img: "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2023/07/26/1249899-snacks-binge.png",
      head: "Does Snacking Impact Your Health? Quality And Timing Makes The Difference",
      descr:
        "Love to munch on snacks in between your meals? Beware, late-night nibbles or snacking on highly processed foods could negatively affect health, according to a study.",
      catg: "fitness",
    },
    {
      id: 35,
      img: "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2023/07/03/1232836-jo-lindner-death.jpg",
      head: "Joesthetics Death: Expert Explains Causes, Signs And Treatment Of Aneurysms",
      descr:
        "Jo Lindner, a famous fitness influencer passed away on July 2 As per reports, the fitness influencer died due to aneurysm Expert explains causes, early signs, treatment and preventive measures of aneurysm",
      catg: "fitness",
    },
    {
      id: 36,
      img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/153390_2200-732x549.jpg?w=1092",
      head: "What to know about exercise and how to start",
      descr:
        "Exercise involves physical activity, exerting the body with movement, and increasing the heart rate. Exercise is vital for looking after and improving our health, and supports physical",
      catg: "fitness",
    },
    {
      id: 37,
      img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2023/07/runner-night-exercise-depression-732x549-thumbnail-732x549.jpg?w=304",
      head: "Just a short walk each day could reduce depression",
      descr:
        "A study in older adults has found that taking a short daily walk can help reduce the risk…",
      catg: "fitness",
    },
    {
      id: 38,
      img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/326002_2200-732x549.jpg?w=304",
      head: "Fat burning heart rate: Everything you need to know",
      descr:
        "A person's fat burning heart rate depends on their age. Staying within this heart rate…",
      catg: "fitness",
    },
    {
      id: 39,
      img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/324895_2200-732x549.jpg?w=304",
      head: "List of the best full-body exercises",
      descr:
        "The best full-body exercises include squats, burpees, lunges, and cycling. People can do",
      catg: "fitness",
    },
    {
      id: 40,
      img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/325804_1100-732x549.jpg?w=304",
      head: "How to strengthen your knee",
      descr:
        "People can do many exercises to strengthen their knees, which can relieve",
      catg: "fitness",
    },
    {
      id: 41,
      img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2021/05/GettyImages-1056286750_thumb.jpg?w=304",
      head: "Should you do cardio or lift weights?",
      descr:
        "Cardiovascular exercises and weight training help with weight loss. Learn more",
      catg: "fitness",
    },
    {
      id: 42,
      img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2021/04/Healthy_feet_GettyImages688935283_Thumb.jpg?w=304",
      head: "What are the best foot exercises for healthy feet?",
      descr:
        "This article takes a look at some foot exercises for strength, flexibility, and pain…",
      catg: "fitness",
    },
    {
      id: 43,
      img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/medical-myths_001-732x549.jpg?w=304",
      head: "Medical Myths: 5 common myths about obesity",
      descr:
        "In this edition of Medical Myths, we address five persistent myths about obesity. This…",
      catg: "fitness",
    },
    {
      id: 44,
      img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2021/11/457969-MR-MARKET-CLONE-8-of-the-best-online-workout-programs-to-do-at-hom-732x549-Feature-732x549.jpg?w=304",
      head: "11 of the best online workout programs to do at home",
      descr:
        "Working out at home has been surging in popularity. Online classes are available to",
      catg: "fitness",
    },
    {
      id: 45,
      img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/05/lower-back-touching-pain-thumb-732x549.jpg?w=304",
      head: "Exercise as a depression treatment: What to know",
      descr:
        "There is a growing body of research suggesting that exercise could help treat",
      catg: "fitness",
    },
    {
      id: 46,
      img: "https://c.ndtvimg.com/2023-08/6bcun6n_mark-zuckerberg_625x300_04_August_23.jpg?im=FeatureCrop,algorithm=dnn,width=345,height=250",
      head: "Did You Know? Meta CEO Mark Zuckerberg Eats 4,000 Calories Every Day",
      descr:
        "Mark Zuckerberg took to Threads to share his love for McDonald's food and the fact that he eats nearly 4,000 calories every day.",
      catg: "food",
    },
    {
      id: 47,
      img: "https://c.ndtvimg.com/2023-01/gkj9ep5_dal-bati_625x300_15_January_23.jpg",
      head: "Make Rajasthani Masala Bati At Home Without An Oven And Enjoy The ",
      descr:
        "Rajasthan, a state in India renowned for its history, culture, handicrafts, and delectable food, boasts iconic dishes such as lal maas, gatte ki sabzi, bajre ki roti, and rabodi ki sabzi.",
      catg: "food",
    },
    {
      id: 48,
      img: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-280x140,f_auto,q_auto:best/rockcms/2023-08/national-chocolate-chip-cookie-day-zz-230803-5952ed.jpg",
      head: "Savannah Guthrie is the first-ever Allrecipes cover star",
      descr:
        "“Stick with me and together we’ll learn how to try something new in the kitchen,” says Savannah.",
      catg: "food",
    },
    {
      id: 49,
      img: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-280x140,f_auto,q_auto:best/rockcms/2023-08/mark-zuckerberg-diet-mcdonalds-order-2x1-zz-230803-0f6100.jpg",
      head: "Mark Zuckerberg reveals his 4,000 calorie per day diet, outrageous McDonald’s order",
      descr:
        "“Not cutting weight so I need ~4000 calories a day to offset all the activity,” Zuckerberg said on his new app, Threads.",
      catg: "food",
    },
    {
      id: 50,
      img: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-280x140,f_auto,q_auto:best/rockcms/2023-08/cheese-spills-arkansas-highway-zz-230802-c6933e.jpg",
      head: "Nacho average traffic jam: Cheese spills across Arkansas highway",
      descr: "“Certainly not the best queso scenario,” commented one person.",
      catg: "food",
    },
    {
      id: 51,
      img: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-280x140,f_auto,q_auto:best/rockcms/2023-08/two-ingredient-feta-fried-egg-2x1-zz-230802-94d3fc.jpg",
      head: "I tried the viral, two-ingredient feta fried egg and it lives up to the hype",
      descr:
        "Walk on the sunny side with this tangy, salty, crispy, saucy miracle",
      catg: "food",
    },
    {
      id: 52,
      img: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-280x140,f_auto,q_auto:best/rockcms/2023-03/230306-mr-beast-se-1152a-aca017.jpg",
      head: "MrBeast sues his food delivery partner over ‘low quality’ food",
      descr:
        "The YouTube star, whose real name is Jimmy Donaldson, wants to end his agreement with Virtual Dining Concepts.",
      catg: "food",
    },
    {
      id: 53,
      img: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-280x140,f_auto,q_auto:best/rockcms/2023-08/krispy-kreme-free-doughnuts-lottery-tickets-zz-230801-701b78.jpg",
      head: "Didn’t win the lottery? Krispy Kreme will give you a free doughnut",
      descr:
        "It may not be the “dough” you’re looking for, but hey, at least it’s *something.",
      catg: "food",
    },
    {
      id: 54,
      img: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-280x140,f_auto,q_auto:best/rockcms/2022-11/velveeta-te-221128-6fe04b.jpg",
      head: "Judge dismisses lawsuit over Velveeta Shells & Cheese taking too long to cook",
      descr:
        "The judge said the plaintiff “lacks standing” to pursue the proposed $5 million class action because “she suffered no injury.”",
      catg: "food",
    },
    {
      id: 55,
      img: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-280x140,f_auto,q_auto:best/rockcms/2023-07/chicken-wing-day-te-230727-3a8903.jpg",
      head: "7 cluckin’ good deals for National Chicken Wing",
      descr: "We plucked these offers just for you.",
      catg: "food",
    },
    {
      id: 56,
      img: "https://c.ndtvimg.com/2023-08/7ahcvi7g_chicken-65_625x300_03_August_23.jpg?im=FeatureCrop,algorithm=dnn,width=345,height=250",
      head: "Chicken 65 Ranked Among 10-Best-Fried-Chicken-Dishes In World",
      descr:
        "Chicken 65 has been featured on the list of the World's Top 10 Fried Chicken Dishes, released by TasteAtlas recently.",
      catg: "food",
    },
    {
      id: 57,
      img: "https://c.ndtvimg.com/2023-03/2pdnbcd8_amla_625x300_17_March_23.jpg?im=FaceCrop,algorithm=dnn,width=345,height=250",
      head: "Beyond Yogurt: Discover 5 Desi Superfoods To Support Your Gut Health",
      descr:
        "Gut Health: Did you know there are several other foods that can support your gut, other than yogurt? Let's discover some desi",
      catg: "food",
    },
    {
      id: 58,
      img: "https://c.ndtvimg.com/2023-08/269nhmc8_beer_625x300_04_August_23.jpg?im=FaceCrop,algorithm=dnn,width=345,height=250",
      head: "Mindful Drinking: Balancing A Healthy Lifestyle With Beer Appreciation",
      descr:
        "Unlock the art of mindful drinking! Embrace moderation, explore beer styles, and master tasting techniques. Enjoy the benefits of improved sleep, mental clarity, and a healthier, happier you. Drink responsibly, savor the moment!",
      catg: "food",
    },
    {
      id: 59,
      img: "https://c.ndtvimg.com/2022-12/ekeh9d6o_gary-mehigan_625x300_19_December_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
      head: "Chef Gary Mehigan Gives Shout-Out To Two Madurai Men Making Bun Parotta",
      descr:
        "Chef Gary Mehigan visited Madurai earlier this year in May, where he met this street vendor with some amazing skills.",
      catg: "food",
    },
    {
      id: 60,
      img: "https://i.ndtvimg.com/i/2017-01/sarson-ka-saag_620x350_81484297304.jpg",
      head: "17 Best Punjabi Recipes | Easy Punjabi Recipes",
      descr:
        "17 Best Punjabi Dishes: Find here list of 17 best Punjabi dishes (Vegetarian & Non Vegetarian) like murgh malaiwala, paneer tikka, dhaba dal, machchli Amritsari & many more with key ingredients and how to make process.",
      catg: "food",
    },
    {
      id: 61,
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/ola-mapsjpg-11-010554-1x1.jpg?VersionId=Sx69PauophFyRyEf13TBD9XJg5nwweQv&size=115:115",
      head: "Ola Prime Plus service now available in 4 Indian cities: what is it, top features, and more",
      descr:
        "Ola is expanding its new premium service, Prime Plus, to Mumbai, Pune, and Hyderabad, after a successful pilot in Bangalore. The service guarantees zero cancellations and offers more premium cab experience.",
      catg: "tech",
    },
    {
      id: 62,
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/google-044140-1x1.jpg?VersionId=sG9Cy03phPJ7NjsQMtiv6gZktJaWtCQw&size=115:115",
      head: "Google will now let you know if your private information is available online ",
      descr:
        "Google is making it easier for users to manage their personal information by introducing a new feature that notifies you if your private details are available online. With just a few taps, you can review and request the removal of your contact details, enhancing your privacy protection.",
      catg: "tech",
    },
    {
      id: 63,
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/tim-cookreuters-042022-1x1.jpg?VersionId=vqEUvylwEhhYJhA6C9bSezHp6ivKrWOi&size=115:115",
      head: "Apple Stores in Delhi and Mumbai have boosted iPhone sales in India, says CEO Tim Cook ",
      descr:
        "iPhone sales are booming in India. Now in his latest comments on the company’s business here, Apple CEO Tim Cook credits the opening of two Apple-owned retail stores in Delhi and Mumbai for boosting iPhone sales in India. He also says that more Apple investment in India is on the way, hinting that the company is planning to open more A",
      catg: "tech",
    },
    {
      id: 64,
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/whatsapp-045113-1x1.jpg?VersionId=rGi1dQabCOSEE0xXyItCDyQbuHRpWnx6&size=115:115",
      head: "WhatsApp may soon add email verification to help users protect their accounts from hackers",
      descr:
        "WhatsApp is reportedly developing email verification to bolster account security. This optional feature will enable users to safeguard and verify their accounts in scenarios like phone theft or loss of access to the linked phone numb",
      catg: "tech",
    },
    {
      id: 65,
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/iphone-15-launchpng-11-200424-1x1.png?VersionId=T6PQ.1t2xbktj1Za9jodlhhc8VSGlRLE&size=115:115",
      head: "Apple may launch iPhone 15 series on this date, here is everything we know so far ",
      descr:
        "Apple is rumored to unveil its highly anticipated iPhone 15 series in September, with sources hinting at a major smartphone announcement on September 13. Exciting new features such as a fresh design, improved performance, and enhanced optical zoom capabilities are expected, although there is speculation that the prices of the new models might ",
      catg: "tech",
    },
    {
      id: 66,
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/ai-with-woman-employees-035121-1x1.jpg?VersionId=rB8_v1wilLiwPvrMzkRbU06WDyEjjWhC&size=115:115",
      head: "AI will replace more women employees than men by 2030, reveals study",
      descr:
        "A recent study by the McKinsey Global Institute warns that the rise of artificial intelligence (AI) will disproportionately replace more female employees than male employees, particularly in industries traditionally dominated by women.",
      catg: "tech",
    },
    {
      id: 67,
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/always-on-top-how-to-keep-a-window-pinned-on-your-laptop-11-234812-1x1.jpg?VersionId=_FNt8HGsKdnJ1WZJL8uvZSjoQYCB9FEj&size=115:115",
      head: "India stops import of laptops: Will prices of MacBooks, other brands go up?",
      descr:
        "India on Thursday announced that it was immediately stopping the import of all laptops and personal computers in India unless the company bringing these gadgets into the country gets a special licence. The move is set to increase the prices of laptops, including Apple MacBook, in India.",
      catg: "tech",
    },
    {
      id: 68,
      img: "India on Thursday announced that it was immediately stopping the import of all laptops and personal computers in India unless the company bringing these gadgets into the country gets a special licence. The move is set to increase the prices of laptops, including Apple MacBook, in India.",
      head: "Meta CEO Mark Zuckerberg uses this smartphone... and it is not an iPhone",
      descr:
        "Facebook CEO Mark Zuckerberg was recently spotted using an Android device while checking emails before a concert.",
      catg: "tech",
    },
    {
      id: 69,
      img: "Facebook CEO Mark Zuckerberg was recently spotted using an Android device while checking emails before a concert.",
      head: "Government reading your WhatsApp chats? PIB addresses shocking claim ",
      descr:
        "The Indian government has denied false claims of monitoring private WhatsApp chats, which have been circulating on the messaging platform. PIB Fact Check, the official fact-checking channel, has clarified that the claims",
      catg: "tech",
    },
    {
      id: 70,
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/ai-writing-storyjpg-11-254208-1x1.jpg?VersionId=AyoH6xoJrdfUoiT3Xg1qJruNaczmA2N5&size=115:115",
      head: "You could soon talk to chatbot that copies Abraham Lincoln as Meta plans to retain users using AI",
      descr:
        "Meta is reportedly planning to launch AI-powered chatbots that can imitate different personalities including that of late US president Abraham Lincoln.",
      catg: "tech",
    },
    {
      id: 71,
      img: "https://i.gadgets360cdn.com/large/chandrayaan_3_isro_launch_thumb_1688410445214.jpg?downsize=160:120&output-quality=80&output-format=webp",
      head: "X to Now Let Users Stream Live Videos, Elon Musk Announces New Feature",
      descr:
        "Elon Musk, who recently rebranded Twitter as X, has teased people with a new feature on the microblogging site. On Friday, the billionaire posted a live video, also featuring some employees from X, raking 4.9 million users. ",
      catg: "tech",
    },
    {
      id: 72,
      img: "https://i0.wp.com/sanantonioreport.org/wp-content/uploads/2020/01/BonnieArbittier_lanier_high_school_poverty_series_digital_divide_sprint_hotspot_hot_spot_wifi_internet_1-31-2020-3.jpg?resize=800%2C600&ssl=1",
      head: "To keep up in an increasingly online world, San Antonio must invest in closing the digital divide",
      descr:
        "Commentary: Without affordable access to high-speed internet, San Antonians are unable to fully participate in our society and economy. ",
      catg: "tech",
    },
    {
      id: 73,
      img: "San Antonio’s second-largest private tech firm is on an acquisition streak, recently absorbing a cloud company aimed at consumers.",
      head: "How a UTSA grad and his Alt-Bionics startup got to the cutting edge of prosthetics",
      descr:
        "For amputees, high-tech prosthetic hands are expensive and hard to repair. A San Antonio man aims to change that.",
      catg: "tech",
    },
    {
      id: 74,
      img: "https://i0.wp.com/sanantonioreport.org/wp-content/uploads/2016/08/scottball_jungle_disk_jungledisk_bret_piatt_tech_startup_8-25-2016-2.jpg?resize=800%2C600&ssl=1",
      head: "Cybersecurity firm Jungle Disk expands into consumer market with acquisition",
      descr:
        "San Antonio’s second-largest private tech firm is on an acquisition streak, recently absorbing a cloud company aimed at consumers.",
      catg: "tech",
    },
    {
      id: 75,
      img: "https://i0.wp.com/sanantonioreport.org/wp-content/uploads/2022/08/nickwagner-cyber-security-geekdom-technology-17AUG22-4.jpg?resize=600%2C450&ssl=1",
      head: "San Antonio needs more cybersecurity software companies, Geekdom panel says",
      descr:
        "“The problem is not building products in San Antonio, it’s finding the funding to keep it here,” said Charles Woodin, CEO of Geekdom.",
      catg: "tech",
    },
    {
      id: 76,
      img: "https://i0.wp.com/sanantonioreport.org/wp-content/uploads/2022/08/scottball_astroport-exarc-exploration-architecture-port-sa-portsa-moon-space-nasa-lunar-rocks-8-19-2022_13-scaled.jpg?resize=600%2C450&ssl=1",
      head: "NASA selects San Antonio firm to help build lunar landing pad with moon dust",
      descr:
        "A San Antonio company snagged a grant from NASA to continue its research on how to design robots that can build a landing pad on the moon.",
      catg: "tech",
    },
  ]);
  return (
    <ContextData.Provider value={[Data, setData]}>
      {props.children}
    </ContextData.Provider>
  );
};
