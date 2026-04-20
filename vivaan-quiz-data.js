// Mathemagics — quiz content for NCERT Grades 1, 3-10 (Chapter 1 only so far).
// Shape: QUIZ_DATA[grade][chapter] = { title, beginner:[5 sets], pro:[5 sets] }.
// Each set = 10 questions: { t:topic, q:question, o:[correct, w1, w2, w3], a:0 }.
window.QUIZ_DATA = {

// ═══════════════════════════════════════════════════════════════
// GRADE 1 · Chapter 1 · Shapes and Space
// ═══════════════════════════════════════════════════════════════
1: { 1: { title:'Shapes and Space',
beginner:[
[
{t:"Flat Shapes",q:"How many sides does a triangle have?",o:["3","4","2","5"],a:0},
{t:"Flat Shapes",type:"tf",q:"A circle has no corners.",a:true},
{t:"Flat Shapes",q:"Which shape has 4 equal sides?",o:["Square","Rectangle","Triangle","Circle"],a:0},
{t:"Flat Shapes",type:"tf",q:"A rectangle has 5 sides.",a:false},
{t:"Flat Shapes",type:"fillin",q:"A square has ___ corners.",blanks:["4"]},
{t:"Flat Shapes",type:"tapall",q:"Tap ALL shapes with exactly 4 sides.",pool:["Triangle","Square","Circle","Rectangle","Diamond","Pentagon"],correct:["Square","Rectangle","Diamond"]},
{t:"Flat Shapes",q:"A pizza slice looks like a?",o:["Triangle","Circle","Square","Star"],a:0},
{t:"Flat Shapes",type:"enterval",q:"How many sides does a hexagon have?",a:6},
{t:"Flat Shapes",type:"tf",q:"A door is shaped like a rectangle.",a:true},
{t:"Flat Shapes",q:"A clock face is shaped like a?",o:["Circle","Square","Triangle","Diamond"],a:0}
],
[
{t:"Solid Shapes",q:"A ball is shaped like a?",o:["Sphere","Cube","Cylinder","Cone"],a:0},
{t:"Solid Shapes",type:"tf",q:"A dice is a cube.",a:true},
{t:"Solid Shapes",q:"How many faces does a cube have?",o:["6","4","8","5"],a:0},
{t:"Solid Shapes",type:"fillin",q:"A football is shaped like a ___.",blanks:["sphere"]},
{t:"Solid Shapes",type:"tapall",q:"Tap all 3D shapes.",pool:["Circle","Cube","Square","Sphere","Triangle","Cylinder"],correct:["Cube","Sphere","Cylinder"]},
{t:"Solid Shapes",type:"tf",q:"A cone has 6 faces.",a:false},
{t:"Solid Shapes",type:"enterval",q:"A cube has how many edges?",a:12},
{t:"Solid Shapes",q:"A brick is shaped like a?",o:["Cuboid","Sphere","Cone","Cylinder"],a:0},
{t:"Solid Shapes",type:"tf",q:"A birthday hat looks like a cone.",a:true},
{t:"Solid Shapes",q:"Which has a pointy top: ball, cube, or cone?",o:["Cone","Cube","Ball","None"],a:0}
],
[
{t:"Roll/Slide",q:"A ball can best?",o:["Roll","Stack","Slide","Float"],a:0},
{t:"Roll/Slide",type:"tf",q:"A cube can roll easily.",a:false},
{t:"Roll/Slide",q:"Which does NOT roll?",o:["Box","Ball","Orange","Wheel"],a:0},
{t:"Roll/Slide",type:"fillin",q:"A wheel is made to ___.",blanks:["roll"]},
{t:"Roll/Slide",type:"tapall",q:"Tap all objects that can roll.",pool:["Ball","Box","Orange","Book","Dice","Wheel"],correct:["Ball","Orange","Wheel"]},
{t:"Roll/Slide",type:"tf",q:"Oranges roll easily because they are round.",a:true},
{t:"Roll/Slide",q:"Which can stack the easiest?",o:["Box","Ball","Egg","Cone"],a:0},
{t:"Roll/Slide",type:"enterval",q:"How many balls can you stack straight up before they fall?",a:1},
{t:"Roll/Slide",type:"tf",q:"A cylinder on its side can roll.",a:true},
{t:"Roll/Slide",q:"A stack of books uses shapes that are?",o:["Flat","Round","Pointy","Tiny"],a:0}
],
[
{t:"Counting",q:"How many sides in a pentagon?",o:["5","4","6","3"],a:0},
{t:"Counting",type:"enterval",q:"How many sides does a hexagon have?",a:6},
{t:"Counting",type:"tf",q:"A triangle has 4 corners.",a:false},
{t:"Counting",type:"fillin",q:"An octagon has ___ sides.",blanks:["8"]},
{t:"Counting",type:"tapall",q:"Tap all shapes with more than 4 sides.",pool:["Triangle","Square","Pentagon","Hexagon","Rectangle","Octagon"],correct:["Pentagon","Hexagon","Octagon"]},
{t:"Counting",q:"Circle has how many corners?",o:["0","1","4","2"],a:0},
{t:"Counting",type:"enterval",q:"A rectangle has how many corners?",a:4},
{t:"Counting",type:"tf",q:"A pentagon has 5 corners.",a:true},
{t:"Counting",q:"Two triangles = total sides?",o:["6","3","4","5"],a:0},
{t:"Counting",type:"enterval",q:"Triangle + Square = total sides?",a:7}
],
[
{t:"Everyday",q:"A dinner plate is shaped like a?",o:["Circle","Square","Triangle","Oval"],a:0},
{t:"Everyday",type:"tf",q:"A postcard is a rectangle.",a:true},
{t:"Everyday",q:"A traffic cone is shaped like a?",o:["Cone","Cube","Cylinder","Sphere"],a:0},
{t:"Everyday",type:"fillin",q:"A window is usually a ___.",blanks:["rectangle"]},
{t:"Everyday",type:"tapall",q:"Tap all round objects.",pool:["Ball","Book","Plate","Dice","Orange","Wheel"],correct:["Ball","Plate","Orange","Wheel"]},
{t:"Everyday",type:"tf",q:"A kite (toy) is shaped like a circle.",a:false},
{t:"Everyday",q:"An egg is shaped like a?",o:["Oval","Circle","Square","Cube"],a:0},
{t:"Everyday",type:"enterval",q:"A stop sign has how many sides?",a:8},
{t:"Everyday",q:"A water bottle is usually a?",o:["Cylinder","Cube","Sphere","Cone"],a:0},
{t:"Everyday",type:"tf",q:"A sandwich cut diagonally looks like a triangle.",a:true}
]
],
pro:[
[
{t:"Cube",type:"enterval",q:"A cube has how many edges?",a:12},
{t:"Cube",type:"enterval",q:"A cube has how many vertices (corners)?",a:8},
{t:"Cube",type:"enterval",q:"A cube has how many faces?",a:6},
{t:"Sphere",type:"tf",q:"A sphere has zero vertices.",a:true},
{t:"Cylinder",q:"Cylinder has how many FLAT faces?",o:["2","1","3","0"],a:0},
{t:"Cone",type:"fillin",q:"A cone has ___ flat face.",blanks:["1"]},
{t:"Solids",type:"tapall",q:"Tap all solids with zero corners.",pool:["Cube","Sphere","Cylinder","Cone","Pyramid","Cuboid"],correct:["Sphere","Cylinder"]},
{t:"Solids",q:"Which has more edges: cube or cone?",o:["Cube","Cone","Equal","Neither"],a:0},
{t:"Cuboid",type:"tf",q:"A cuboid has 12 edges.",a:true},
{t:"Cone",type:"enterval",q:"A cone has how many vertices (pointy tips)?",a:1}
],
[
{t:"Polygons",q:"A 5-sided shape is called a?",o:["Pentagon","Hexagon","Octagon","Quadrilateral"],a:0},
{t:"Polygons",type:"enterval",q:"A hexagon has how many sides?",a:6},
{t:"Polygons",type:"tf",q:"An octagon has 8 sides.",a:true},
{t:"Polygons",type:"fillin",q:"A ___ has 4 sides and 4 equal angles.",blanks:["square"]},
{t:"Polygons",type:"tapall",q:"Tap all polygons (straight-sided closed shapes).",pool:["Circle","Triangle","Square","Oval","Pentagon","Hexagon"],correct:["Triangle","Square","Pentagon","Hexagon"]},
{t:"Polygons",q:"Shapes with 4 sides are called?",o:["Quadrilaterals","Triangles","Pentagons","Circles"],a:0},
{t:"Polygons",type:"tf",q:"A regular hexagon has sides of different lengths.",a:false},
{t:"Polygons",type:"enterval",q:"A decagon has how many sides?",a:10},
{t:"Polygons",q:"A honeycomb cell is a?",o:["Hexagon","Square","Pentagon","Triangle"],a:0},
{t:"Polygons",type:"enterval",q:"A stop sign (octagon) has how many sides?",a:8}
],
[
{t:"Position",q:"The sky is ____ us.",o:["Above","Below","Beside","Inside"],a:0},
{t:"Position",type:"tf",q:"The ground is above our feet.",a:false},
{t:"Position",type:"fillin",q:"A fish lives ___ water.",blanks:["in"]},
{t:"Position",q:"The opposite of INSIDE is?",o:["Outside","Beside","Above","Between"],a:0},
{t:"Position",q:"The opposite of LEFT is?",o:["Right","Up","Down","Back"],a:0},
{t:"Position",type:"tf",q:"A ball UNDER a chair is below the chair.",a:true},
{t:"Position",type:"fillin",q:"The opposite of UP is ___.",blanks:["down"]},
{t:"Position",type:"tapall",q:"Tap all words meaning 'up or higher'.",pool:["Above","Below","Over","Under","Top","Bottom"],correct:["Above","Over","Top"]},
{t:"Position",q:"If an apple is ON a table, it is?",o:["Above the table","Below the table","Inside the table","Beside the table"],a:0},
{t:"Position",type:"tf",q:"An apple INSIDE a box is outside the box.",a:false}
],
[
{t:"Patterns",q:"Next: red, blue, red, blue, red, ___?",o:["blue","red","yellow","green"],a:0},
{t:"Patterns",type:"tf",q:"In the pattern 1,2,1,2,1,2, the next is 1.",a:true},
{t:"Patterns",type:"fillin",q:"Next: 2, 4, 6, 8, ___.",blanks:["10"]},
{t:"Patterns",type:"enterval",q:"Next: 5, 10, 15, 20, ?",a:25},
{t:"Patterns",q:"Next: ABABAB ___?",o:["A","B","C","AB"],a:0},
{t:"Patterns",type:"tapall",q:"Tap all even numbers.",pool:["1","2","3","4","5","6"],correct:["2","4","6"]},
{t:"Patterns",type:"fillin",q:"Next: 1, 3, 5, 7, ___.",blanks:["9"]},
{t:"Patterns",type:"enterval",q:"Next (going down): 10, 9, 8, 7, ?",a:6},
{t:"Patterns",type:"tf",q:"In pattern ABCABC, after C comes B.",a:false},
{t:"Patterns",q:"Next: big, small, big, small, big, ___?",o:["small","big","tiny","medium"],a:0}
],
[
{t:"Mixed",q:"Which is 3D: circle or cube?",o:["Cube","Circle","Both","Neither"],a:0},
{t:"Mixed",type:"tf",q:"A square is 3D.",a:false},
{t:"Mixed",type:"fillin",q:"A rectangle with 4 equal sides is a ___.",blanks:["square"]},
{t:"Mixed",type:"tapall",q:"Tap all shapes that roll.",pool:["Ball","Box","Orange","Book","Dice","Wheel"],correct:["Ball","Orange","Wheel"]},
{t:"Mixed",q:"A balloon is shaped like a?",o:["Sphere","Cube","Cone","Cylinder"],a:0},
{t:"Mixed",type:"enterval",q:"Small squares in a 2×2 grid?",a:4},
{t:"Mixed",type:"tf",q:"A semi-circle is half of a circle.",a:true},
{t:"Mixed",q:"A cricket ball is a?",o:["Sphere","Cube","Cylinder","Cone"],a:0},
{t:"Mixed",type:"fillin",q:"A shape with 10 sides is a ___.",blanks:["decagon"]},
{t:"Mixed",type:"enterval",q:"How many sides does a triangle have?",a:3}
]
]
},
// ─── Grade 1 · Chapter 2 · Numbers from 1 to 9 ───
2: { title:'Numbers from 1 to 9',
beginner:[
[
{t:"Counting",q:"How many fingers on ONE hand?",o:["5","4","6","10"],a:0},
{t:"Counting",type:"tf",q:"A bicycle has 2 wheels.",a:true},
{t:"Counting",type:"enterval",q:"How many wheels on a car?",a:4},
{t:"Counting",q:"How many legs does a dog have?",o:["4","2","3","6"],a:0},
{t:"Counting",type:"fillin",q:"A weekend (Sat + Sun) has ___ days.",blanks:["2"]},
{t:"Counting",type:"tapall",q:"Tap all that come in pairs on your body.",pool:["Eyes","Nose","Ears","Mouth","Hands","Heart"],correct:["Eyes","Ears","Hands"]},
{t:"Counting",q:"How many sides in a triangle?",o:["3","4","5","2"],a:0},
{t:"Counting",type:"enterval",q:"How many toes on ONE foot?",a:5},
{t:"Counting",type:"tf",q:"A person has 3 eyes.",a:false},
{t:"Counting",q:"How many lenses in a pair of glasses?",o:["2","1","3","4"],a:0}
],
[
{t:"Names",q:"Write 3 in words?",o:["Three","Thirty","Third","Tree"],a:0},
{t:"Names",type:"tf",q:"7 is written as 'seven'.",a:true},
{t:"Names",type:"fillin",q:"The word for 5 is ___.",blanks:["five"]},
{t:"Names",q:"Which is number 'nine'?",o:["9","6","7","8"],a:0},
{t:"Names",type:"enterval",q:"'Four' in digits?",a:4},
{t:"Names",type:"tf",q:"'One' in digits is 11.",a:false},
{t:"Names",type:"tapall",q:"Tap all single-digit numbers.",pool:["3","10","7","15","5","22"],correct:["3","7","5"]},
{t:"Names",type:"fillin",q:"Zero in digits is ___.",blanks:["0"]},
{t:"Names",q:"'Eight' in digits?",o:["8","6","7","9"],a:0},
{t:"Names",type:"enterval",q:"'Six' in digits?",a:6}
],
[
{t:"Compare",q:"Bigger: 3 or 5?",o:["5","3","Equal","Cannot tell"],a:0},
{t:"Compare",type:"enterval",q:"Smallest of 3, 8, 6?",a:3},
{t:"Compare",type:"tf",q:"7 is smaller than 2.",a:false},
{t:"Compare",type:"fillin",q:"The largest of 1, 4, 2 is ___.",blanks:["4"]},
{t:"Compare",q:"What comes after 6?",o:["7","5","8","6"],a:0},
{t:"Compare",type:"enterval",q:"What comes before 9?",a:8},
{t:"Compare",type:"tapall",q:"Tap all numbers less than 5.",pool:["1","2","3","4","5","6"],correct:["1","2","3","4"]},
{t:"Compare",type:"tf",q:"The number between 4 and 6 is 5.",a:true},
{t:"Compare",type:"fillin",q:"'Seven' in digits is ___.",blanks:["7"]},
{t:"Compare",type:"enterval",q:"Between 4 and 6 is?",a:5}
],
[
{t:"MoreLess",type:"enterval",q:"One more than 5?",a:6},
{t:"MoreLess",type:"enterval",q:"One less than 7?",a:6},
{t:"MoreLess",type:"tf",q:"7 is more than 4.",a:true},
{t:"MoreLess",type:"tf",q:"2 is more than 6.",a:false},
{t:"MoreLess",q:"1 is the ___ single-digit counting number.",o:["smallest","largest","middle","first even"],a:0},
{t:"MoreLess",type:"fillin",q:"9 is the ___ single-digit number.",blanks:["largest"]},
{t:"MoreLess",type:"enterval",q:"Two more than 3?",a:5},
{t:"MoreLess",type:"enterval",q:"Two less than 8?",a:6},
{t:"MoreLess",type:"tapall",q:"Tap all numbers more than 5.",pool:["1","3","5","7","9","2"],correct:["7","9"]},
{t:"MoreLess",q:"More: 2 or 5?",o:["5","2","Equal","Cannot tell"],a:0}
],
[
{t:"Missing",type:"enterval",q:"1, 2, 3, ?, 5",a:4},
{t:"Missing",type:"enterval",q:"4, 5, ?, 7, 8",a:6},
{t:"Missing",type:"enterval",q:"7, ?, 9",a:8},
{t:"Missing",type:"enterval",q:"?, 2, 3, 4",a:1},
{t:"Missing",type:"enterval",q:"5, 6, 7, ?",a:8},
{t:"Missing",type:"enterval",q:"9, 8, ?, 6",a:7},
{t:"Missing",type:"tf",q:"In 3, __, 5, 6 the missing number is 4.",a:true},
{t:"Missing",type:"fillin",q:"2, ___, 4, 5",blanks:["3"]},
{t:"Missing",type:"fillin",q:"6, ___, 8, 9",blanks:["7"]},
{t:"Missing",type:"tf",q:"0, 1, 2, 3, 4 is in order.",a:true}
]
],
pro:[
[
{t:"GreaterLess",q:"Symbol: 5 ___ 3?",o:["> (greater than)","< (less than)","= (equal)","± (plus-minus)"],a:0},
{t:"GreaterLess",q:"Symbol: 2 ___ 7?",o:["< (less than)","> (greater than)","= (equal)","± (plus-minus)"],a:0},
{t:"GreaterLess",type:"tf",q:"5 = 5 is always true.",a:true},
{t:"GreaterLess",type:"tf",q:"9 < 7 is true.",a:false},
{t:"GreaterLess",type:"fillin",q:"Symbol: 4 __ 4 → ___",blanks:["="]},
{t:"GreaterLess",q:"Correct: 3 < 5 or 3 > 5?",o:["3 < 5","3 > 5","Both","Neither"],a:0},
{t:"GreaterLess",type:"enterval",q:"How many whole numbers are between 1 and 9 (exclusive)?",a:7},
{t:"GreaterLess",type:"tapall",q:"Tap all numbers greater than 5.",pool:["1","3","5","6","8","9"],correct:["6","8","9"]},
{t:"GreaterLess",type:"tf",q:"0 is less than 1.",a:true},
{t:"GreaterLess",q:"9 > 5 and 5 > 2. So 9 ___ 2?",o:[">","<","=","Cannot tell"],a:0}
],
[
{t:"BeforeAfter",type:"enterval",q:"Before 5?",a:4},
{t:"BeforeAfter",type:"enterval",q:"After 3?",a:4},
{t:"BeforeAfter",type:"enterval",q:"Between 6 and 8?",a:7},
{t:"BeforeAfter",type:"enterval",q:"After 9?",a:10},
{t:"BeforeAfter",type:"tf",q:"0 comes before 1.",a:true},
{t:"BeforeAfter",type:"fillin",q:"The number between 2 and 4 is ___.",blanks:["3"]},
{t:"BeforeAfter",q:"After 0?",o:["1","−1","0","2"],a:0},
{t:"BeforeAfter",type:"enterval",q:"Before 8?",a:7},
{t:"BeforeAfter",type:"tapall",q:"Tap all numbers between 3 and 8 (exclusive).",pool:["2","3","4","5","6","7","8","9"],correct:["4","5","6","7"]},
{t:"BeforeAfter",type:"tf",q:"6 is between 5 and 7.",a:true}
],
[
{t:"MinMax",type:"enterval",q:"Largest: 3, 7, 2?",a:7},
{t:"MinMax",type:"enterval",q:"Smallest: 8, 5, 6?",a:5},
{t:"MinMax",type:"enterval",q:"Largest of 1, 9, 4?",a:9},
{t:"MinMax",type:"enterval",q:"Smallest of 6, 2, 8?",a:2},
{t:"MinMax",q:"Middle of 3, 7, 5?",o:["5","3","7","6"],a:0},
{t:"MinMax",type:"enterval",q:"Largest 1-digit number?",a:9},
{t:"MinMax",type:"enterval",q:"Smallest 1-digit counting number?",a:1},
{t:"MinMax",type:"tf",q:"0 is the smallest whole number.",a:true},
{t:"MinMax",q:"Ascending order of 5, 2, 8?",o:["2, 5, 8","8, 5, 2","5, 2, 8","2, 8, 5"],a:0},
{t:"MinMax",type:"fillin",q:"In ascending order, the middle of 1, 5, 3 is ___.",blanks:["3"]}
],
[
{t:"OddEven",type:"tf",q:"2 is an even number.",a:true},
{t:"OddEven",type:"tf",q:"5 is an even number.",a:false},
{t:"OddEven",type:"tf",q:"7 is an odd number.",a:true},
{t:"OddEven",type:"enterval",q:"Smallest even counting number?",a:2},
{t:"OddEven",type:"enterval",q:"Smallest odd counting number?",a:1},
{t:"OddEven",type:"fillin",q:"The number 4 is ___ (odd/even).",blanks:["even"]},
{t:"OddEven",type:"fillin",q:"The number 3 is ___ (odd/even).",blanks:["odd"]},
{t:"OddEven",type:"tapall",q:"Tap all even numbers.",pool:["1","2","3","4","5","6"],correct:["2","4","6"]},
{t:"OddEven",type:"tapall",q:"Tap all odd numbers.",pool:["1","2","3","4","5","6"],correct:["1","3","5"]},
{t:"OddEven",q:"Is 8 odd or even?",o:["Even","Odd","Both","Neither"],a:0}
],
[
{t:"Add",type:"enterval",q:"2 + 3 = ?",a:5},
{t:"Add",type:"enterval",q:"4 + 4 = ?",a:8},
{t:"Add",type:"enterval",q:"1 + 6 = ?",a:7},
{t:"Add",type:"tf",q:"5 + 3 = 9.",a:false},
{t:"Add",type:"fillin",q:"2 + 7 = ___",blanks:["9"]},
{t:"Add",q:"3 + 5 = ?",o:["8","7","9","35"],a:0},
{t:"Add",type:"enterval",q:"6 + 2 = ?",a:8},
{t:"Add",type:"tf",q:"4 + 5 = 9.",a:true},
{t:"Add",type:"enterval",q:"1 + 8 = ?",a:9},
{t:"Add",type:"fillin",q:"7 + 2 = ___",blanks:["9"]}
]
]
}},

// ═══════════════════════════════════════════════════════════════
// GRADE 3 · Chapter 1 · Where to Look From
// ═══════════════════════════════════════════════════════════════
3: { 1: { title:'Where to Look From',
beginner:[
[
{t:"Top View",q:"A round plate viewed from the TOP looks like a?",o:["Circle","Square","Triangle","Oval"],a:0},
{t:"Top View",q:"A square box from the TOP?",o:["Square","Circle","Triangle","Rectangle"],a:0},
{t:"Top View",q:"A book lying flat, from the TOP?",o:["Rectangle","Square","Circle","Triangle"],a:0},
{t:"Top View",q:"A pencil standing upright, from TOP?",o:["Small circle","Long rectangle","Triangle","Square"],a:0},
{t:"Top View",q:"A cone on its flat base, from TOP?",o:["Circle","Triangle","Square","Oval"],a:0},
{t:"Top View",q:"A dice from the TOP?",o:["Square","Cube","Rectangle","Circle"],a:0},
{t:"Top View",q:"A cup from the TOP?",o:["Circle","Rectangle","Square","Triangle"],a:0},
{t:"Top View",q:"A football from TOP?",o:["Circle","Sphere","Oval","Triangle"],a:0},
{t:"Top View",q:"A matchbox lying flat, from TOP?",o:["Rectangle","Square","Circle","Triangle"],a:0},
{t:"Top View",q:"A flat round coin from TOP?",o:["Circle","Rectangle","Square","Oval"],a:0}
],
[
{t:"Side View",q:"A glass viewed from the SIDE?",o:["Rectangle","Circle","Square","Triangle"],a:0},
{t:"Side View",q:"A ball from the SIDE?",o:["Circle","Square","Oval","Triangle"],a:0},
{t:"Side View",q:"A book lying flat, from SIDE?",o:["Thin rectangle","Square","Circle","Triangle"],a:0},
{t:"Side View",q:"A cone from the SIDE?",o:["Triangle","Circle","Square","Rectangle"],a:0},
{t:"Side View",q:"A cylinder (can) from SIDE?",o:["Rectangle","Circle","Triangle","Oval"],a:0},
{t:"Side View",q:"A dice from the SIDE?",o:["Square","Rectangle","Circle","Triangle"],a:0},
{t:"Side View",q:"A bucket (wider at top) from SIDE?",o:["Trapezium","Circle","Square","Triangle"],a:0},
{t:"Side View",q:"A pyramid from the SIDE?",o:["Triangle","Square","Circle","Rectangle"],a:0},
{t:"Side View",q:"A pencil lying flat, from SIDE?",o:["Long rectangle","Circle","Triangle","Square"],a:0},
{t:"Side View",q:"A flat coin from the SIDE?",o:["Thin rectangle","Circle","Square","Oval"],a:0}
],
[
{t:"Front View",q:"A door from the FRONT looks like a?",o:["Tall rectangle","Circle","Square","Triangle"],a:0},
{t:"Front View",q:"A TV from the FRONT?",o:["Wide rectangle","Circle","Square","Triangle"],a:0},
{t:"Front View",q:"A phone from the FRONT?",o:["Tall rectangle","Circle","Square","Triangle"],a:0},
{t:"Front View",q:"A clock from the FRONT?",o:["Circle","Rectangle","Square","Oval"],a:0},
{t:"Front View",q:"A window from the FRONT?",o:["Rectangle","Circle","Triangle","Pentagon"],a:0},
{t:"Front View",q:"A coin from the FRONT?",o:["Circle","Rectangle","Square","Oval"],a:0},
{t:"Front View",q:"A picture frame from FRONT?",o:["Rectangle","Circle","Triangle","Star"],a:0},
{t:"Front View",q:"A fridge from the FRONT?",o:["Tall rectangle","Circle","Square","Triangle"],a:0},
{t:"Front View",q:"A football goal from FRONT?",o:["Rectangle","Circle","Triangle","Pentagon"],a:0},
{t:"Front View",q:"A book standing on shelf, from FRONT?",o:["Rectangle","Circle","Triangle","Square"],a:0}
],
[
{t:"Mirror",q:"In a mirror, your LEFT hand appears as?",o:["Right hand","Left hand","Both","Neither"],a:0},
{t:"Mirror",q:"Mirror image of the letter 'b' is?",o:["d","p","q","b"],a:0},
{t:"Mirror",q:"Mirror image of the letter 'p' is?",o:["q","b","d","p"],a:0},
{t:"Mirror",q:"If you raise your RIGHT hand, the mirror shows?",o:["Left hand","Right hand","Both","Neither"],a:0},
{t:"Mirror",q:"Word 'MOM' in a vertical mirror reads?",o:["MOM","WOW","NON","DAD"],a:0},
{t:"Mirror",q:"Which digit looks the SAME in a mirror?",o:["0","2","3","5"],a:0},
{t:"Mirror",q:"Mirror flips your?",o:["Left and right","Top and bottom","Colours","Size"],a:0},
{t:"Mirror",q:"Your reflection in still water is a form of?",o:["Mirror image","Shadow","Echo","Copy"],a:0},
{t:"Mirror",q:"Mirror of the letter 'A' looks like?",o:["A","B","F","H"],a:0},
{t:"Mirror",q:"Mirror of the letter 'L' looks like?",o:["Reversed L","L","7","J"],a:0}
],
[
{t:"Views",q:"A ball viewed from any direction is a?",o:["Circle","Sphere","Oval","Square"],a:0},
{t:"Views",q:"A dice viewed from any face is a?",o:["Square","Cube","Rectangle","Circle"],a:0},
{t:"Views",q:"Cylinder: top = circle, side = ?",o:["Rectangle","Circle","Triangle","Oval"],a:0},
{t:"Views",q:"Cone: top = circle, side = ?",o:["Triangle","Circle","Square","Rectangle"],a:0},
{t:"Views",q:"A sphere has how many different views?",o:["1 (all same)","3","6","Many"],a:0},
{t:"Views",q:"Looking at a dice, at most how many faces at once?",o:["3","1","2","6"],a:0},
{t:"Views",q:"A book: top = large rectangle, side = ?",o:["Thin rectangle","Circle","Triangle","Square"],a:0},
{t:"Views",q:"A cricket bat from front looks like?",o:["Long rectangle","Circle","Triangle","Oval"],a:0},
{t:"Views",q:"From the sky, a football field looks like a?",o:["Rectangle","Circle","Square","Triangle"],a:0},
{t:"Views",q:"From above, roadways look like?",o:["Lines","Circles","Squares","Triangles"],a:0}
]
],
pro:[
[
{t:"3D Views",q:"Triangular prism — front view (end)?",o:["Triangle","Rectangle","Circle","Square"],a:0},
{t:"3D Views",q:"Triangular prism on side — top view?",o:["Rectangle","Triangle","Circle","Square"],a:0},
{t:"3D Views",q:"Pyramid — top view?",o:["Square with diagonals","Triangle","Circle","Pentagon"],a:0},
{t:"3D Views",q:"Pyramid — side view?",o:["Triangle","Square","Circle","Rectangle"],a:0},
{t:"3D Views",q:"Hexagonal prism — top view?",o:["Hexagon","Rectangle","Circle","Octagon"],a:0},
{t:"3D Views",q:"Hexagonal prism — side view?",o:["Rectangle","Hexagon","Circle","Triangle"],a:0},
{t:"3D Views",q:"Cone lying on side — side view?",o:["Triangle","Circle","Rectangle","Oval"],a:0},
{t:"3D Views",q:"2 cubes stacked — front view?",o:["Tall rectangle (2:1)","Square","Circle","Triangle"],a:0},
{t:"3D Views",q:"3 cubes stacked — front view?",o:["Tall rectangle (3:1)","Square","Circle","Triangle"],a:0},
{t:"3D Views",q:"An inverted cone (tip down) from TOP?",o:["Circle","Triangle","Square","Oval"],a:0}
],
[
{t:"Symmetry",q:"A square has how many lines of symmetry?",o:["4","1","2","3"],a:0},
{t:"Symmetry",q:"A rectangle has how many?",o:["2","1","3","4"],a:0},
{t:"Symmetry",q:"Equilateral triangle?",o:["3","1","2","4"],a:0},
{t:"Symmetry",q:"Circle has how many lines of symmetry?",o:["Infinite","1","2","4"],a:0},
{t:"Symmetry",q:"Regular pentagon?",o:["5","1","2","4"],a:0},
{t:"Symmetry",q:"Isosceles (not equilateral) triangle?",o:["1","0","2","3"],a:0},
{t:"Symmetry",q:"Scalene triangle?",o:["0","1","2","3"],a:0},
{t:"Symmetry",q:"Rhombus (non-square)?",o:["2","1","4","3"],a:0},
{t:"Symmetry",q:"Regular hexagon?",o:["6","3","4","5"],a:0},
{t:"Symmetry",q:"Which letter has 2 lines of symmetry?",o:["H","A","F","L"],a:0}
],
[
{t:"Reflection",q:"Mirror image of your LEFT hand?",o:["Right hand","Left hand","Both","Neither"],a:0},
{t:"Reflection",q:"Mirror image of letter 'p' is?",o:["q","b","d","p"],a:0},
{t:"Reflection",q:"Mirror image of letter 'b' is?",o:["d","p","q","b"],a:0},
{t:"Reflection",q:"Letter with vertical symmetry: A or B?",o:["A","B","Both","Neither"],a:0},
{t:"Reflection",q:"Digit 8 in vertical mirror?",o:["8","3","E","Backwards 8"],a:0},
{t:"Reflection",q:"Letter 'H' has how many lines of symmetry?",o:["2","1","4","0"],a:0},
{t:"Reflection",q:"A lake reflection is a form of?",o:["Horizontal mirror","Vertical mirror","Echo","Shadow"],a:0},
{t:"Reflection",q:"In a mirror, clock hands appear?",o:["Swapped","Same","Faster","Slower"],a:0},
{t:"Reflection",q:"Mirror of digit '0'?",o:["0","O","Q","C"],a:0},
{t:"Reflection",q:"Word 'WOW' in mirror reads?",o:["WOW","MOM","NON","OWO"],a:0}
],
[
{t:"Match View",q:"Top=circle, side=rectangle — solid?",o:["Cylinder","Cone","Cube","Sphere"],a:0},
{t:"Match View",q:"Top=circle, side=triangle — solid?",o:["Cone","Cylinder","Sphere","Cube"],a:0},
{t:"Match View",q:"Top=square, side=square — solid?",o:["Cube","Cuboid","Pyramid","Cylinder"],a:0},
{t:"Match View",q:"All views = rectangle — solid?",o:["Cuboid","Cube","Cylinder","Pyramid"],a:0},
{t:"Match View",q:"All views = circle — solid?",o:["Sphere","Cylinder","Cone","Cube"],a:0},
{t:"Match View",q:"Top=hexagon, side=rectangle — solid?",o:["Hexagonal prism","Pentagonal prism","Cube","Sphere"],a:0},
{t:"Match View",q:"Top=triangle, side=triangle — solid?",o:["Tetrahedron","Pyramid","Prism","Cube"],a:0},
{t:"Match View",q:"Top=square with diagonals — solid?",o:["Pyramid","Cube","Cuboid","Prism"],a:0},
{t:"Match View",q:"Different rectangles on all views — solid?",o:["Cuboid","Cube","Cylinder","Sphere"],a:0},
{t:"Match View",q:"Cylinder upright, top view?",o:["Circle","Rectangle","Square","Oval"],a:0}
],
[
{t:"Directions",q:"Sun rises in which direction?",o:["East","West","North","South"],a:0},
{t:"Directions",q:"Sun sets in which direction?",o:["West","East","North","South"],a:0},
{t:"Directions",q:"North is usually at the ___ of a map.",o:["Top","Bottom","Left","Right"],a:0},
{t:"Directions",q:"Between North and East is?",o:["North-East","North-West","South-East","South-West"],a:0},
{t:"Directions",q:"Opposite of North is?",o:["South","East","West","Up"],a:0},
{t:"Directions",q:"Compass points: N, S, E, ?",o:["W","NE","NW","SE"],a:0},
{t:"Directions",q:"Walk 3 steps North, turn right — you face?",o:["East","West","South","North"],a:0},
{t:"Directions",q:"Opposite of Down is?",o:["Up","Left","Right","Below"],a:0},
{t:"Directions",q:"Clockwise: 12 to 3 is how many degrees?",o:["90","180","45","360"],a:0},
{t:"Directions",q:"Half a full rotation equals?",o:["180°","90°","360°","270°"],a:0}
]
]
},
// ─── Grade 3 · Chapter 2 · Fun with Numbers ───
2: { title:'Fun with Numbers',
beginner:[
[
{t:"Place Value",q:"In 234, digit in HUNDREDS place?",o:["2","3","4","23"],a:0},
{t:"Place Value",q:"In 456, digit in TENS place?",o:["5","4","6","45"],a:0},
{t:"Place Value",q:"In 789, digit in ONES place?",o:["9","7","8","89"],a:0},
{t:"Place Value",q:"Place value of 3 in 357?",o:["300","30","3","57"],a:0},
{t:"Place Value",q:"Place value of 5 in 158?",o:["50","5","500","58"],a:0},
{t:"Place Value",q:"Place value of 8 in 278?",o:["8","80","800","78"],a:0},
{t:"Place Value",q:"In 500, HUNDREDS digit?",o:["5","0","50","500"],a:0},
{t:"Place Value",q:"In 100, TENS digit?",o:["0","1","10","100"],a:0},
{t:"Place Value",q:"In 100, ONES digit?",o:["0","1","10","100"],a:0},
{t:"Place Value",q:"Place value of 0 in 305?",o:["0","3","5","30"],a:0}
],
[
{t:"Names",q:"'Two hundred thirty-four' in digits?",o:["234","243","324","423"],a:0},
{t:"Names",q:"'Five hundred twelve' in digits?",o:["512","521","125","251"],a:0},
{t:"Names",q:"'One hundred one' in digits?",o:["101","110","100","111"],a:0},
{t:"Names",q:"'Seven hundred ninety-nine' in digits?",o:["799","997","779","977"],a:0},
{t:"Names",q:"Number name of 250?",o:["Two hundred fifty","Twenty-five","Two thousand fifty","Two hundred five"],a:0},
{t:"Names",q:"Number name of 407?",o:["Four hundred seven","Four hundred seventy","Four thousand seven","Forty-seven"],a:0},
{t:"Names",q:"'Six hundred' in digits?",o:["600","60","6,000","660"],a:0},
{t:"Names",q:"'Three hundred twenty' in digits?",o:["320","302","230","203"],a:0},
{t:"Names",q:"'Nine hundred ninety-nine' in digits?",o:["999","909","990","899"],a:0},
{t:"Names",q:"'Four hundred five' in digits?",o:["405","450","504","540"],a:0}
],
[
{t:"Successor",q:"Successor of 199?",o:["200","198","199","201"],a:0},
{t:"Successor",q:"Predecessor of 500?",o:["499","501","500","450"],a:0},
{t:"Successor",q:"After 899?",o:["900","898","899","901"],a:0},
{t:"Successor",q:"Before 100?",o:["99","101","100","90"],a:0},
{t:"Successor",q:"1 more than 349?",o:["350","348","349","359"],a:0},
{t:"Successor",q:"1 less than 700?",o:["699","701","700","690"],a:0},
{t:"Successor",q:"10 more than 250?",o:["260","240","250","259"],a:0},
{t:"Successor",q:"10 less than 600?",o:["590","610","600","500"],a:0},
{t:"Successor",q:"100 more than 200?",o:["300","100","200","400"],a:0},
{t:"Successor",q:"100 less than 400?",o:["300","500","400","200"],a:0}
],
[
{t:"Compare",q:"Greater: 234 or 243?",o:["243","234","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Smaller: 500 or 450?",o:["450","500","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Largest: 345, 543, 453?",o:["543","453","345","All equal"],a:0},
{t:"Compare",q:"Smallest: 200, 102, 120?",o:["102","120","200","All equal"],a:0},
{t:"Compare",q:"Is 600 > 599?",o:["Yes","No","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Ascending: 100, 500, 250?",o:["100, 250, 500","500, 250, 100","250, 100, 500","All equal"],a:0},
{t:"Compare",q:"Descending: 234, 432, 324?",o:["432, 324, 234","234, 324, 432","324, 432, 234","234, 432, 324"],a:0},
{t:"Compare",q:"Correct: 789 > 987 or 789 < 987?",o:["789 < 987","789 > 987","Both","Neither"],a:0},
{t:"Compare",q:"Difference between 500 and 300?",o:["200","800","300","500"],a:0},
{t:"Compare",q:"Biggest 3-digit number?",o:["999","100","989","998"],a:0}
],
[
{t:"Expand",q:"300 + 40 + 5 = ?",o:["345","354","435","543"],a:0},
{t:"Expand",q:"Expand 567?",o:["500 + 60 + 7","50 + 6 + 7","500 + 6 + 7","5 + 6 + 7"],a:0},
{t:"Expand",q:"600 + 0 + 2 = ?",o:["602","620","260","206"],a:0},
{t:"Expand",q:"Expand 408?",o:["400 + 0 + 8","40 + 0 + 8","400 + 8 + 0","4 + 0 + 8"],a:0},
{t:"Expand",q:"700 + 30 + 1 = ?",o:["731","713","173","371"],a:0},
{t:"Expand",q:"Expand 999?",o:["900 + 90 + 9","99 + 9","909 + 90","9 + 9 + 9"],a:0},
{t:"Expand",q:"100 + 0 + 0 = ?",o:["100","10","1,000","1"],a:0},
{t:"Expand",q:"Expand 250?",o:["200 + 50 + 0","2 + 50 + 0","25 + 0","200 + 5 + 0"],a:0},
{t:"Expand",q:"Expand 804?",o:["800 + 0 + 4","80 + 0 + 4","800 + 4 + 0","8 + 0 + 4"],a:0},
{t:"Expand",q:"500 + 50 + 5 = ?",o:["555","550","505","515"],a:0}
]
],
pro:[
[
{t:"4-digit",q:"How many zeros in 1,000?",o:["3","2","4","1"],a:0},
{t:"4-digit",q:"1,000 = how many hundreds?",o:["10","100","1,000","50"],a:0},
{t:"4-digit",q:"Largest 4-digit number?",o:["9,999","1,000","9,000","9,998"],a:0},
{t:"4-digit",q:"Smallest 4-digit?",o:["1,000","9,999","100","1,001"],a:0},
{t:"4-digit",q:"Thousands place in 3,456?",o:["3","4","5","6"],a:0},
{t:"4-digit",q:"5,000 + 400 + 30 + 2 = ?",o:["5,432","5,234","4,532","5,342"],a:0},
{t:"4-digit",q:"Name of 1,234?",o:["One thousand two hundred thirty-four","Twelve hundred thirty-four","One thousand twenty-three four","One hundred twenty-three four"],a:0},
{t:"4-digit",q:"9,999 + 1 = ?",o:["10,000","9,000","9,998","10,001"],a:0},
{t:"4-digit",q:"Smallest 4-digit using 5, 2, 7, 9?",o:["2,579","2,597","9,752","2,759"],a:0},
{t:"4-digit",q:"Largest 4-digit using 5, 2, 7, 9?",o:["9,752","9,725","7,952","9,275"],a:0}
],
[
{t:"Indian",q:"10 thousands = ?",o:["10,000","1,000","1,00,000","1,000,000"],a:0},
{t:"Indian",q:"1 lakh = how many thousands?",o:["100","10","1,000","10,000"],a:0},
{t:"Indian",q:"Comma after thousands in 12345?",o:["12,345","1,23,45","123,45","12,3,45"],a:0},
{t:"Indian",q:"5-digit number first digit is in?",o:["Ten-thousands","Thousands","Hundreds","Lakhs"],a:0},
{t:"Indian",q:"Is 12,345 > 9,999?",o:["Yes","No","Equal","Cannot tell"],a:0},
{t:"Indian",q:"Number name of 25,000?",o:["Twenty-five thousand","Twenty-five lakh","Two thousand five","Two hundred fifty"],a:0},
{t:"Indian",q:"Is 50,000 a 5-digit number?",o:["Yes","No","It's 4-digit","It's 6-digit"],a:0},
{t:"Indian",q:"How many 100s in 1,000?",o:["10","100","1,000","5"],a:0},
{t:"Indian",q:"Smallest 5-digit number?",o:["10,000","9,999","1,00,000","1,000"],a:0},
{t:"Indian",q:"99,999 + 1 = ?",o:["1,00,000","1,00,001","99,998","10,000"],a:0}
],
[
{t:"Round",q:"Round 234 to nearest 10?",o:["230","240","200","250"],a:0},
{t:"Round",q:"Round 567 to nearest 10?",o:["570","560","500","600"],a:0},
{t:"Round",q:"Round 345 to nearest 100?",o:["300","400","350","340"],a:0},
{t:"Round",q:"Round 678 to nearest 100?",o:["700","600","680","670"],a:0},
{t:"Round",q:"Round 150 to nearest 100?",o:["200","100","150","250"],a:0},
{t:"Round",q:"Round 249 to nearest 10?",o:["250","240","200","260"],a:0},
{t:"Round",q:"Round 199 to nearest 10?",o:["200","190","100","210"],a:0},
{t:"Round",q:"Round 750 to nearest 100?",o:["800","700","750","900"],a:0},
{t:"Round",q:"Round 49 to nearest 10?",o:["50","40","45","60"],a:0},
{t:"Round",q:"Round 1,234 to nearest 100?",o:["1,200","1,300","1,000","1,250"],a:0}
],
[
{t:"Between",q:"Successor of 999?",o:["1,000","998","999","1,001"],a:0},
{t:"Between",q:"Predecessor of 1,000?",o:["999","1,001","1,000","990"],a:0},
{t:"Between",q:"Between 200 and 202?",o:["201","203","199","200"],a:0},
{t:"Between",q:"Successor of 99?",o:["100","98","99","101"],a:0},
{t:"Between",q:"Predecessor of 100?",o:["99","101","100","90"],a:0},
{t:"Between",q:"5 after 495?",o:["500","490","495","505"],a:0},
{t:"Between",q:"10 before 310?",o:["300","320","310","290"],a:0},
{t:"Between",q:"One number between 300 and 310?",o:["305","300","310","299"],a:0},
{t:"Between",q:"After 1,000 → ?",o:["1,001","999","1,000","1,010"],a:0},
{t:"Between",q:"Before 500 → ?",o:["499","501","500","490"],a:0}
],
[
{t:"Patterns",q:"5, 10, 15, 20, ___?",o:["25","30","22","15"],a:0},
{t:"Patterns",q:"100, 200, 300, ___?",o:["400","500","350","100"],a:0},
{t:"Patterns",q:"99, 98, 97, ___?",o:["96","95","98","97"],a:0},
{t:"Patterns",q:"2, 4, 6, 8, ___?",o:["10","9","12","7"],a:0},
{t:"Patterns",q:"10, 20, 30, 40, ___?",o:["50","60","45","40"],a:0},
{t:"Patterns",q:"3, 6, 9, 12, ___?",o:["15","13","16","18"],a:0},
{t:"Patterns",q:"250, 500, 750, ___?",o:["1,000","800","1,250","1,500"],a:0},
{t:"Patterns",q:"1, 3, 5, 7, ___?",o:["9","8","10","11"],a:0},
{t:"Patterns",q:"800, 600, 400, ___?",o:["200","300","500","100"],a:0},
{t:"Patterns",q:"5, 10, 20, 40, ___?",o:["80","60","50","100"],a:0}
]
]
}},

// ═══════════════════════════════════════════════════════════════
// GRADE 4 · Chapter 1 · Building with Bricks
// ═══════════════════════════════════════════════════════════════
4: { 1: { title:'Building with Bricks',
beginner:[
[
{t:"Brick Shape",q:"A standard brick is shaped like a?",o:["Cuboid","Cube","Cylinder","Sphere"],a:0},
{t:"Brick Shape",q:"How many faces does a brick have?",o:["6","4","8","12"],a:0},
{t:"Brick Shape",q:"How many edges does a brick have?",o:["12","6","8","10"],a:0},
{t:"Brick Shape",q:"How many corners on a brick?",o:["8","6","12","4"],a:0},
{t:"Brick Shape",q:"A brick has how many pairs of equal faces?",o:["3","2","4","6"],a:0},
{t:"Brick Shape",q:"All faces of a brick are?",o:["Rectangles","Triangles","Circles","Squares"],a:0},
{t:"Brick Shape",q:"A brick with all sides equal is a?",o:["Cube","Cuboid","Cylinder","Cone"],a:0},
{t:"Brick Shape",q:"Opposite faces of a brick are?",o:["Equal","Different","Curved","Slanted"],a:0},
{t:"Brick Shape",q:"A brick's top face is a?",o:["Rectangle","Circle","Square","Triangle"],a:0},
{t:"Brick Shape",q:"Does a brick have curved surfaces?",o:["No","Yes","Sometimes","Only one"],a:0}
],
[
{t:"Faces",q:"Top and bottom faces of a brick are?",o:["Equal in size","Different sizes","One bigger","Triangular"],a:0},
{t:"Faces",q:"A brick has 3 pairs of faces. Total faces?",o:["6","3","9","12"],a:0},
{t:"Faces",q:"Faces meeting at a corner of a brick?",o:["3","2","4","6"],a:0},
{t:"Faces",q:"Edges meeting at a corner of a brick?",o:["3","2","4","6"],a:0},
{t:"Faces",q:"Largest face area of a 10×5×3 brick?",o:["50","30","15","100"],a:0},
{t:"Faces",q:"Smallest face area of a 10×5×3 brick?",o:["15","50","30","10"],a:0},
{t:"Faces",q:"A brick has how many unique face sizes?",o:["3","1","2","6"],a:0},
{t:"Faces",q:"Two bricks side by side share how many faces?",o:["1","2","3","6"],a:0},
{t:"Faces",q:"A cube brick's faces are all?",o:["Squares","Rectangles","Circles","Triangles"],a:0},
{t:"Faces",q:"Rectangular faces in a cuboid brick?",o:["6","4","8","12"],a:0}
],
[
{t:"Walls",q:"In a strong wall, adjacent rows are?",o:["Shifted","Exactly aligned","Upside down","Random"],a:0},
{t:"Walls",q:"A wall is usually built in?",o:["Rows","Stacks only","Circles","Triangles"],a:0},
{t:"Walls",q:"10 bricks/row × 5 rows = total?",o:["50","15","55","100"],a:0},
{t:"Walls",q:"3 bricks stacked, each 7 cm — height?",o:["21 cm","10 cm","14 cm","70 cm"],a:0},
{t:"Walls",q:"2 bricks end-to-end, each 20 cm — length?",o:["40 cm","20 cm","22 cm","200 cm"],a:0},
{t:"Walls",q:"A 4-row wall with 6 bricks/row has?",o:["24","10","20","30"],a:0},
{t:"Walls",q:"A 3×4 grid of bricks?",o:["12","7","9","14"],a:0},
{t:"Walls",q:"Adjacent rows staggered makes the wall?",o:["Stronger","Weaker","Same","Shorter"],a:0},
{t:"Walls",q:"Pattern of repeating rows is called?",o:["Repeating","Random","Straight","Circular"],a:0},
{t:"Walls",q:"5 rows × 8 bricks each?",o:["40","13","45","50"],a:0}
],
[
{t:"Counting",q:"Each brick is 25 cm long; how many in 1 metre?",o:["4","10","5","25"],a:0},
{t:"Counting",q:"100 bricks needed, 35 used. Left?",o:["65","55","75","135"],a:0},
{t:"Counting",q:"A 4×4 square wall uses?",o:["16","8","12","20"],a:0},
{t:"Counting",q:"120 bricks, used 85. Remaining?",o:["35","45","25","55"],a:0},
{t:"Counting",q:"200 bricks in 10 rows. Per row?",o:["20","10","15","25"],a:0},
{t:"Counting",q:"Row = 8 bricks, 5 rows. Total?",o:["40","13","45","50"],a:0},
{t:"Counting",q:"Bricks per row = 12, rows = 7. Total?",o:["84","19","91","75"],a:0},
{t:"Counting",q:"Budget = 250, need = 220. Extra?",o:["30","470","20","50"],a:0},
{t:"Counting",q:"Wall needs 80, have 60. Short by?",o:["20","140","30","40"],a:0},
{t:"Counting",q:"50 needed, have 50. Extras?",o:["0","50","100","5"],a:0}
],
[
{t:"Sizes",q:"Each brick 20 cm, 5 side-by-side = ?",o:["100 cm (1 m)","50 cm","200 cm","25 cm"],a:0},
{t:"Sizes",q:"Brick 30×10×5; largest face area?",o:["300","150","50","30"],a:0},
{t:"Sizes",q:"Brick 25×10×5; top face area?",o:["250","125","50","100"],a:0},
{t:"Sizes",q:"Brick 10×5×3; smallest face area?",o:["15","50","30","3"],a:0},
{t:"Sizes",q:"Brick 20×10×5; middle face area?",o:["100","200","50","10"],a:0},
{t:"Sizes",q:"Each brick 0.25 m; 4 end-to-end = ?",o:["1 m","0.5 m","2 m","0.25 m"],a:0},
{t:"Sizes",q:"Height of 4 bricks, each 7 cm?",o:["28 cm","11 cm","14 cm","21 cm"],a:0},
{t:"Sizes",q:"Length of 3 bricks end-to-end, each 22 cm?",o:["66 cm","44 cm","25 cm","88 cm"],a:0},
{t:"Sizes",q:"Brick 2 kg each; 10 bricks weigh?",o:["20 kg","10 kg","12 kg","100 kg"],a:0},
{t:"Sizes",q:"₹5/brick; 100 bricks cost?",o:["₹500","₹105","₹50","₹1000"],a:0}
]
],
pro:[
[
{t:"Volume",q:"Volume of a 20×10×5 brick?",o:["1000 cm³","35 cm³","200 cm³","100 cm³"],a:0},
{t:"Volume",q:"Volume of a 10×10×10 cube?",o:["1000","100","300","30"],a:0},
{t:"Volume",q:"Volume of 30×20×10 cuboid?",o:["6000","600","60","360"],a:0},
{t:"Volume",q:"Volume formula: l × b × ?",o:["h","d","r","s"],a:0},
{t:"Volume",q:"Volume of 5×5×5 cube?",o:["125","15","25","75"],a:0},
{t:"Volume",q:"Volume of 15×10×4 cuboid?",o:["600","29","150","400"],a:0},
{t:"Volume",q:"Volume of 8×8×1 slab?",o:["64","17","80","8"],a:0},
{t:"Volume",q:"Volume of 2×3×4 block?",o:["24","9","12","6"],a:0},
{t:"Volume",q:"Which has bigger volume: 6×6×6 cube or 10×10×2 slab?",o:["6×6×6 cube (216)","10×10×2 slab (200)","Equal","Cannot tell"],a:0},
{t:"Volume",q:"1 litre = how many cm³?",o:["1000","100","10","10000"],a:0}
],
[
{t:"Surface",q:"Surface area of a 2×2×2 cube?",o:["24","8","12","16"],a:0},
{t:"Surface",q:"Surface of a 3×3×3 cube?",o:["54","27","36","24"],a:0},
{t:"Surface",q:"Surface of a 1×1×1 cube?",o:["6","1","4","12"],a:0},
{t:"Surface",q:"Surface of 2×3×4 cuboid?",o:["52","24","48","30"],a:0},
{t:"Surface",q:"Surface area formula (cuboid)?",o:["2(lb+bh+hl)","l·b·h","l+b+h","4(l+b+h)"],a:0},
{t:"Surface",q:"Surface of 5×5×5 cube?",o:["150","125","100","50"],a:0},
{t:"Surface",q:"A cube has 6 faces. Surface area = sum of?",o:["All 6 faces","1 face","4 faces","12 edges"],a:0},
{t:"Surface",q:"Brick top 10×5=50; bottom face area?",o:["50","100","25","10"],a:0},
{t:"Surface",q:"Total surface of 4×4×4 cube?",o:["96","64","48","24"],a:0},
{t:"Surface",q:"Number of faces on a cube?",o:["6","8","4","12"],a:0}
],
[
{t:"Edges",q:"Cube has 12 edges × 5 cm each — total?",o:["60 cm","17 cm","12 cm","25 cm"],a:0},
{t:"Edges",q:"Cuboid 3×2×1 — total edge length?",o:["24","12","6","48"],a:0},
{t:"Edges",q:"Cube total edge = 36; each edge?",o:["3","4","6","12"],a:0},
{t:"Edges",q:"Edges meeting at a corner of a cube?",o:["3","2","4","6"],a:0},
{t:"Edges",q:"Cuboid 10×5×2 — total edge length?",o:["68","17","34","40"],a:0},
{t:"Edges",q:"Number of edges in a cuboid?",o:["12","8","6","10"],a:0},
{t:"Edges",q:"Total edge length of 2×2×2 cube?",o:["24","8","12","16"],a:0},
{t:"Edges",q:"How many 'long' edges in a rectangular box?",o:["4","6","8","12"],a:0},
{t:"Edges",q:"Cube edges are all?",o:["Equal","Different","Curved","Slanted"],a:0},
{t:"Edges",q:"Cube with edge 1 — total edge length?",o:["12","4","6","8"],a:0}
],
[
{t:"BricksArea",q:"Brick top 20×10 (200 cm²); for 1 m² (10000 cm²)?",o:["50","100","40","25"],a:0},
{t:"BricksArea",q:"Brick top 25×10 (250 cm²); per m²?",o:["40","50","25","100"],a:0},
{t:"BricksArea",q:"Brick top 10×5 (50 cm²); per 1000 cm²?",o:["20","10","5","50"],a:0},
{t:"BricksArea",q:"Wall 2 m wide; each brick 25 cm. Row has?",o:["8","2","10","16"],a:0},
{t:"BricksArea",q:"Wall 2 m tall; each brick 10 cm tall. Rows?",o:["20","2","10","200"],a:0},
{t:"BricksArea",q:"Wall area 100 cm²; brick face 20 cm². Bricks?",o:["5","2","20","10"],a:0},
{t:"BricksArea",q:"Bricks per row × rows = total. 10 × 5 = ?",o:["50","15","100","5"],a:0},
{t:"BricksArea",q:"If you double wall length, bricks needed?",o:["Doubles","Halves","Same","Quadruples"],a:0},
{t:"BricksArea",q:"Wall 40 bricks across × 25 tall = ?",o:["1000","65","400","1500"],a:0},
{t:"BricksArea",q:"Brick front 20×8; wall front 200×80; bricks?",o:["100","10","1000","50"],a:0}
],
[
{t:"WallBuild",q:"24 bricks; rectangles a×b (a≤b): 1×24, 2×12, 3×8, 4×6 — count?",o:["4","3","5","6"],a:0},
{t:"WallBuild",q:"Row of 8 bricks, wall 6 rows — total?",o:["48","14","54","42"],a:0},
{t:"WallBuild",q:"From 120 bricks, 3 walls × 35 each used. Left?",o:["15","45","25","35"],a:0},
{t:"WallBuild",q:"Row 1=7, row 2=6, row 3=7, row 4=?",o:["6","7","8","5"],a:0},
{t:"WallBuild",q:"Wall 2×3 bricks — total?",o:["6","5","7","9"],a:0},
{t:"WallBuild",q:"Need 250; have 300. Spare?",o:["50","250","25","100"],a:0},
{t:"WallBuild",q:"Each row 12 bricks; wall 10 rows. Total?",o:["120","22","100","144"],a:0},
{t:"WallBuild",q:"Two rooms × 50 bricks each. Total?",o:["100","50","150","25"],a:0},
{t:"WallBuild",q:"₹4/brick × 200 bricks = cost?",o:["₹800","₹204","₹400","₹2000"],a:0},
{t:"WallBuild",q:"Wall height 20 bricks × 5 cm each?",o:["100 cm","25 cm","50 cm","200 cm"],a:0}
]
]
},
// ─── Grade 4 · Chapter 2 · Long and Short (Length) ───
2: { title:'Long and Short',
beginner:[
[
{t:"Units",q:"Smallest unit of length?",o:["mm (millimetre)","cm","m","km"],a:0},
{t:"Units",q:"100 cm = ?",o:["1 m","10 m","1 km","1,000 m"],a:0},
{t:"Units",q:"1,000 m = ?",o:["1 km","1 m","100 cm","100 m"],a:0},
{t:"Units",q:"1 m = ? cm",o:["100","10","1,000","50"],a:0},
{t:"Units",q:"1 km = ? m",o:["1,000","100","10,000","500"],a:0},
{t:"Units",q:"1 cm = ? mm",o:["10","100","1","50"],a:0},
{t:"Units",q:"Unit for length of a football field?",o:["m (metres)","mm","cm","km"],a:0},
{t:"Units",q:"Unit for distance Delhi to Mumbai?",o:["km","m","cm","mm"],a:0},
{t:"Units",q:"Unit for pencil length?",o:["cm","km","m","mm"],a:0},
{t:"Units",q:"Unit for ant length?",o:["mm","cm","m","km"],a:0}
],
[
{t:"Convert",q:"200 cm = ? m",o:["2","20","0.2","200"],a:0},
{t:"Convert",q:"3 m = ? cm",o:["300","30","3,000","0.3"],a:0},
{t:"Convert",q:"5 km = ? m",o:["5,000","500","50","50,000"],a:0},
{t:"Convert",q:"10 mm = ? cm",o:["1","10","0.1","100"],a:0},
{t:"Convert",q:"50 mm = ? cm",o:["5","50","0.5","500"],a:0},
{t:"Convert",q:"4 m = ? cm",o:["400","40","4,000","0.4"],a:0},
{t:"Convert",q:"1,000 m = ? km",o:["1","10","100","0.1"],a:0},
{t:"Convert",q:"2,000 m = ? km",o:["2","20","200","0.2"],a:0},
{t:"Convert",q:"6 cm = ? mm",o:["60","6","600","0.6"],a:0},
{t:"Convert",q:"8 m = ? cm",o:["800","80","8,000","0.8"],a:0}
],
[
{t:"Tools",q:"Tool to measure cloth?",o:["Measuring tape","Thermometer","Scale (weight)","Stopwatch"],a:0},
{t:"Tools",q:"Tool to measure your notebook?",o:["Ruler","Scale (weight)","Thermometer","Calendar"],a:0},
{t:"Tools",q:"Smallest division on a ruler?",o:["mm","cm","m","km"],a:0},
{t:"Tools",q:"School ruler is usually how long?",o:["15 or 30 cm","1 m","1 mm","1 km"],a:0},
{t:"Tools",q:"Tool to measure height of a person?",o:["Measuring tape","Thermometer","Weighing scale","Clock"],a:0},
{t:"Tools",q:"Is 1 cm longer than 1 m?",o:["No","Yes","Equal","Depends"],a:0},
{t:"Tools",q:"Is 1 m longer than 100 cm?",o:["Equal","Yes","No","Depends"],a:0},
{t:"Tools",q:"Is 1 km = 1,000 m?",o:["Yes","No","Approximately","Depends"],a:0},
{t:"Tools",q:"Tool to measure road distance in vehicle?",o:["Odometer","Clock","Ruler","Tape"],a:0},
{t:"Tools",q:"Tool for map distance?",o:["Ruler with scale","Clock","Weighing scale","Protractor"],a:0}
],
[
{t:"Compare",q:"Longer: 5 m or 500 cm?",o:["Equal","5 m","500 cm","Cannot tell"],a:0},
{t:"Compare",q:"Longer: 2 km or 1,500 m?",o:["2 km","1,500 m","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Shorter: 30 cm or 2 m?",o:["30 cm","2 m","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Longer: 100 mm or 1 cm?",o:["100 mm","1 cm","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Shorter: 5 km or 5,000 m?",o:["Equal","5 km","5,000 m","Cannot tell"],a:0},
{t:"Compare",q:"Longer: 1 m or 90 cm?",o:["1 m","90 cm","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Is 3 m > 280 cm?",o:["Yes","No","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Is 250 mm < 30 cm?",o:["Yes","No","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Biggest: 1 km, 1,000 m, 1,00,000 cm?",o:["All equal","1 km","1,000 m","1,00,000 cm"],a:0},
{t:"Compare",q:"Which is longer: 1.5 m or 100 cm?",o:["1.5 m","100 cm","Equal","Cannot tell"],a:0}
],
[
{t:"Real",q:"Approx length of an adult finger?",o:["~7 cm","~7 mm","~7 m","~7 km"],a:0},
{t:"Real",q:"Approx length of a pencil?",o:["~15 cm","~15 m","~15 mm","~15 km"],a:0},
{t:"Real",q:"Approx height of a door?",o:["~2 m","~2 cm","~2 mm","~2 km"],a:0},
{t:"Real",q:"Approx length of a school bus?",o:["~10 m","~10 cm","~10 mm","~10 km"],a:0},
{t:"Real",q:"Approx height of an adult?",o:["~1.7 m","~1.7 cm","~17 m","~170 km"],a:0},
{t:"Real",q:"Approx length of an ant?",o:["~5 mm","~5 cm","~5 m","~5 km"],a:0},
{t:"Real",q:"Approx 1 lap of a sports track?",o:["~400 m","~400 cm","~400 mm","~400 km"],a:0},
{t:"Real",q:"Approx length of a notebook?",o:["~25 cm","~25 mm","~25 m","~25 km"],a:0},
{t:"Real",q:"Approx thickness of a book?",o:["~2 cm","~2 mm","~2 m","~2 km"],a:0},
{t:"Real",q:"Approx height of a chair?",o:["~90 cm","~9 cm","~9 m","~9 mm"],a:0}
]
],
pro:[
[
{t:"Convert+",q:"3.5 m = ? cm",o:["350","35","3,500","0.35"],a:0},
{t:"Convert+",q:"1,500 m = ?",o:["1 km 500 m","15 km","150 m","1,500 km"],a:0},
{t:"Convert+",q:"250 cm = ?",o:["2 m 50 cm","25 m","2 m 5 cm","250 mm"],a:0},
{t:"Convert+",q:"2 km 500 m = ? m",o:["2,500","250","25,000","250,000"],a:0},
{t:"Convert+",q:"3 m 40 cm = ? cm",o:["340","304","3,040","3,400"],a:0},
{t:"Convert+",q:"7 km = ? m",o:["7,000","700","70","70,000"],a:0},
{t:"Convert+",q:"75 cm = ? mm",o:["750","75","7.5","7,500"],a:0},
{t:"Convert+",q:"250 mm = ? cm",o:["25","250","2.5","2,500"],a:0},
{t:"Convert+",q:"1,200 m = ?",o:["1 km 200 m","12 km","120 m","1,200 km"],a:0},
{t:"Convert+",q:"8 m 25 cm = ? cm",o:["825","8,025","805","802.5"],a:0}
],
[
{t:"Word",q:"2 pencils 15 cm each. Total?",o:["30 cm","15 cm","45 cm","150 cm"],a:0},
{t:"Word",q:"Ribbon 2 m − 50 cm = ?",o:["1 m 50 cm","2 m 50 cm","50 cm","150 cm only"],a:0},
{t:"Word",q:"Walk 2 km + 3 km = ?",o:["5 km","6 km","23 km","1 km"],a:0},
{t:"Word",q:"5 students line at 50 cm each. Total?",o:["2 m 50 cm","25 cm","250 m","55 cm"],a:0},
{t:"Word",q:"Rope 10 m − 3 m = ?",o:["7 m","13 m","103 m","30 m"],a:0},
{t:"Word",q:"Square fence 100 m × 4 sides?",o:["400 m","100 m","40 m","1 km"],a:0},
{t:"Word",q:"Ravi walks 500 m + 300 m = ?",o:["800 m","200 m","530 m","1 km"],a:0},
{t:"Word",q:"1 step = 50 cm. 20 steps = ?",o:["10 m","5 m","20 m","1 km"],a:0},
{t:"Word",q:"Marathon 42 km − 10 km ran = left?",o:["32 km","52 km","420 km","4.2 km"],a:0},
{t:"Word",q:"Height from 1 m 20 cm to 1 m 35 cm — grew?",o:["15 cm","5 cm","25 cm","1 m"],a:0}
],
[
{t:"Estimate",q:"Approx length of a classroom?",o:["~8-10 m","~80 m","~1 m","~1 km"],a:0},
{t:"Estimate",q:"Approx height of an adult giraffe?",o:["~5 m","~5 cm","~5 mm","~5 km"],a:0},
{t:"Estimate",q:"Estimate 99 cm + 101 cm ≈ ?",o:["~200 cm (2 m)","~2 km","~2 mm","~2 cm"],a:0},
{t:"Estimate",q:"Approx thickness of a rupee coin?",o:["~2 mm","~2 cm","~2 m","~2 km"],a:0},
{t:"Estimate",q:"Home 2 km from school, daily to-and-fro?",o:["4 km","2 km","6 km","1 km"],a:0},
{t:"Estimate",q:"Round 249 cm to nearest metre?",o:["2 m","3 m","200 m","25 m"],a:0},
{t:"Estimate",q:"Round 1,450 m to nearest km?",o:["1 km","2 km","15 km","10 km"],a:0},
{t:"Estimate",q:"Approx length of an elephant trunk?",o:["~2 m","~2 cm","~2 km","~2 mm"],a:0},
{t:"Estimate",q:"Approx length of a school bench?",o:["~1 m","~1 km","~10 m","~10 cm"],a:0},
{t:"Estimate",q:"Approx thickness of 100 A4 papers stacked?",o:["~1 cm","~10 cm","~1 m","~1 mm"],a:0}
],
[
{t:"AddSub",q:"1 m 20 cm + 2 m 30 cm = ?",o:["3 m 50 cm","3 m 5 cm","5 m","50 cm"],a:0},
{t:"AddSub",q:"3 m − 1 m 50 cm = ?",o:["1 m 50 cm","2 m 50 cm","1 m","3 m 50 cm"],a:0},
{t:"AddSub",q:"2 km + 3 km 500 m = ?",o:["5 km 500 m","5 km","23 km 500 m","6 km"],a:0},
{t:"AddSub",q:"4 m 25 cm + 2 m 75 cm = ?",o:["7 m","6 m","7 m 100 cm","8 m"],a:0},
{t:"AddSub",q:"5 m − 1 m 80 cm = ?",o:["3 m 20 cm","4 m 80 cm","3 m","4 m 20 cm"],a:0},
{t:"AddSub",q:"1 km 300 m + 2 km 700 m = ?",o:["4 km","3 km 1,000 m","3 km 700 m","40 km"],a:0},
{t:"AddSub",q:"3 m 50 cm × 2 = ?",o:["7 m","6 m","6 m 50 cm","70 cm"],a:0},
{t:"AddSub",q:"8 m ÷ 4 = ?",o:["2 m","4 m","6 m","1 m"],a:0},
{t:"AddSub",q:"10 m − 4 m 50 cm = ?",o:["5 m 50 cm","6 m","6 m 50 cm","4 m 50 cm"],a:0},
{t:"AddSub",q:"6 km − 3 km 250 m = ?",o:["2 km 750 m","3 km 250 m","2 km 250 m","9 km 250 m"],a:0}
],
[
{t:"Apply",q:"10 paper clips × 3 cm. Total?",o:["30 cm","13 cm","3 cm","100 cm"],a:0},
{t:"Apply",q:"Ribbon 150 cm cut into 3 equal. Each?",o:["50 cm","15 cm","100 cm","30 cm"],a:0},
{t:"Apply",q:"Rectangle 5 m × 3 m. Perimeter?",o:["16 m","15 m","8 m","20 m"],a:0},
{t:"Apply",q:"Square side 2 m. Perimeter?",o:["8 m","4 m","16 m","6 m"],a:0},
{t:"Apply",q:"Triangle sides 3, 4, 5 m. Perimeter?",o:["12 m","20 m","7 m","60 m"],a:0},
{t:"Apply",q:"Skipping rope 2 m 50 cm folded in half?",o:["1 m 25 cm","1 m 50 cm","5 m","2 m 25 cm"],a:0},
{t:"Apply",q:"Track 400 m. 3 laps = ?",o:["1 km 200 m","1,000 m","1 km","12 km"],a:0},
{t:"Apply",q:"Garden 20 m × 10 m. Perimeter?",o:["60 m","30 m","200 m","20 m"],a:0},
{t:"Apply",q:"Staircase 10 steps × 15 cm. Height?",o:["1 m 50 cm","15 m","150 m","10 cm"],a:0},
{t:"Apply",q:"Room 5 m × 4 m. Longer wall?",o:["5 m","4 m","Equal","9 m"],a:0}
]
]
}},

// ═══════════════════════════════════════════════════════════════
// GRADE 5 · Chapter 1 · The Fish Tale (Large Numbers)
// ═══════════════════════════════════════════════════════════════
5: { 1: { title:'The Fish Tale',
beginner:[
[
{t:"Place Value",q:"1 lakh = ?",o:["1,00,000","10,000","1,000","10,00,000"],a:0},
{t:"Place Value",q:"Zeros in 1 lakh?",o:["5","4","6","3"],a:0},
{t:"Place Value",q:"Place value of 5 in 5,27,340?",o:["5,00,000","50,000","5,000","500"],a:0},
{t:"Place Value",q:"Place value of 4 in 45,123?",o:["40,000","4,000","400","4"],a:0},
{t:"Place Value",q:"10 ten-thousands = ?",o:["1 lakh","10 lakh","1,000","10,000"],a:0},
{t:"Place Value",q:"In 3,45,678, thousands place digit?",o:["5","3","4","6"],a:0},
{t:"Place Value",q:"10,000 + 5,000 + 300 + 20 + 1 = ?",o:["15,321","15,231","10,521","15,312"],a:0},
{t:"Place Value",q:"Greater: 99,999 or 1,00,000?",o:["1,00,000","99,999","Equal","Cannot tell"],a:0},
{t:"Place Value",q:"Hundreds in 1 thousand?",o:["10","100","1,000","5"],a:0},
{t:"Place Value",q:"Place value of 0 in 40,230?",o:["0","4","40","40,000"],a:0}
],
[
{t:"Names",q:"Name for 25,000?",o:["Twenty-five thousand","Two lakh five","Twenty-five lakh","Two thousand five"],a:0},
{t:"Names",q:"Name for 1,00,000?",o:["One lakh","Ten thousand","Hundred thousand","Ten lakh"],a:0},
{t:"Names",q:"'Twenty-five thousand' in digits?",o:["25,000","2,500","2,50,000","25,00,000"],a:0},
{t:"Names",q:"'Three lakh twenty thousand' in digits?",o:["3,20,000","32,000","3,00,020","30,20,000"],a:0},
{t:"Names",q:"Name for 5,00,000?",o:["Five lakh","Fifty thousand","Five thousand","Fifty lakh"],a:0},
{t:"Names",q:"'One lakh fifty thousand' in digits?",o:["1,50,000","15,000","1,05,000","1,500"],a:0},
{t:"Names",q:"Name for 10,000?",o:["Ten thousand","One thousand","One lakh","Ten lakh"],a:0},
{t:"Names",q:"'Fifty thousand' in digits?",o:["50,000","5,000","5,00,000","50,00,000"],a:0},
{t:"Names",q:"Name for 2,00,000?",o:["Two lakh","Twenty thousand","Two thousand","Twenty lakh"],a:0},
{t:"Names",q:"'Ten lakh' in digits?",o:["10,00,000","1,00,000","1,000","10,000"],a:0}
],
[
{t:"Reading",q:"Largest: 34,567, 45,678, 56,789?",o:["56,789","45,678","34,567","All equal"],a:0},
{t:"Reading",q:"Smallest 5-digit number?",o:["10,000","99,999","1,000","10,001"],a:0},
{t:"Reading",q:"Largest 5-digit number?",o:["99,999","10,000","1,00,000","89,999"],a:0},
{t:"Reading",q:"Smallest 6-digit number?",o:["1,00,000","10,000","1,10,000","99,999"],a:0},
{t:"Reading",q:"Largest 6-digit number?",o:["9,99,999","1,00,000","99,999","10,00,000"],a:0},
{t:"Reading",q:"Predecessor of 1,00,000?",o:["99,999","1,00,001","10,000","1,00,000"],a:0},
{t:"Reading",q:"Successor of 99,999?",o:["1,00,000","99,998","99,990","10,00,000"],a:0},
{t:"Reading",q:"In 3,45,678 tens digit?",o:["7","8","6","3"],a:0},
{t:"Reading",q:"In 3,45,678 hundreds digit?",o:["6","8","7","3"],a:0},
{t:"Reading",q:"In 3,45,678 ones digit?",o:["8","7","6","3"],a:0}
],
[
{t:"Multiply",q:"50 fish × 7 days?",o:["350","57","100","250"],a:0},
{t:"Multiply",q:"100 × 25?",o:["2,500","125","250","25,000"],a:0},
{t:"Multiply",q:"8 × 250?",o:["2,000","258","1,600","20,000"],a:0},
{t:"Multiply",q:"150 × 10?",o:["1,500","160","15","150"],a:0},
{t:"Multiply",q:"1,000 × 20?",o:["20,000","2,000","1,020","200"],a:0},
{t:"Multiply",q:"25 × 40?",o:["1,000","100","65","250"],a:0},
{t:"Multiply",q:"120 × 5?",o:["600","125","60","1,200"],a:0},
{t:"Multiply",q:"200 × 5?",o:["1,000","205","500","20,000"],a:0},
{t:"Multiply",q:"500 × 4?",o:["2,000","504","200","20,000"],a:0},
{t:"Multiply",q:"1,000 × 100?",o:["1,00,000","10,000","1,100","1,000,000"],a:0}
],
[
{t:"Divide",q:"500 ÷ 5?",o:["100","500","50","25"],a:0},
{t:"Divide",q:"1,200 ÷ 4?",o:["300","1,196","400","200"],a:0},
{t:"Divide",q:"600 ÷ 30?",o:["20","2","60","30"],a:0},
{t:"Divide",q:"9,000 ÷ 60?",o:["150","8,940","60","1,500"],a:0},
{t:"Divide",q:"5,60,000 ÷ 70?",o:["8,000","800","80,000","56,000"],a:0},
{t:"Divide",q:"10,000 ÷ 100?",o:["100","9,900","1,000","10"],a:0},
{t:"Divide",q:"2,500 ÷ 5?",o:["500","2,495","250","125"],a:0},
{t:"Divide",q:"800 ÷ 40?",o:["20","760","2","40"],a:0},
{t:"Divide",q:"1,000 ÷ 10?",o:["100","990","10","1"],a:0},
{t:"Divide",q:"6,000 ÷ 48?",o:["125","60","48","1,250"],a:0}
]
],
pro:[
[
{t:"Word",q:"Caught 3,250 Mon + 4,180 Tue = ?",o:["7,430","7,330","7,340","7,530"],a:0},
{t:"Word",q:"75 kg × ₹60 = ?",o:["₹4,500","₹135","₹450","₹4,050"],a:0},
{t:"Word",q:"Truck 2,500 kg − 1,870 unloaded = ?",o:["630 kg","730 kg","530 kg","1,370 kg"],a:0},
{t:"Word",q:"48 boats × 125 fish = ?",o:["6,000","173","5,000","600"],a:0},
{t:"Word",q:"Town 12,345; kids 4,567. Adults?",o:["7,778","8,222","16,912","7,878"],a:0},
{t:"Word",q:"Each fish 1/4 kg; 1,000 fish weigh?",o:["250 kg","100 kg","400 kg","2,500 kg"],a:0},
{t:"Word",q:"₹5,60,000 / 70 workers = ?",o:["₹8,000","₹800","₹80,000","₹56,000"],a:0},
{t:"Word",q:"1 crate 48 fish × 125 crates = ?",o:["6,000","173","4,800","7,500"],a:0},
{t:"Word",q:"Market sold 2,340 kg, bought 3,000. Left?",o:["660","5,340","5,000","600"],a:0},
{t:"Word",q:"Daily income ₹500 × 30 days = ?",o:["₹15,000","₹530","₹5,000","₹1,500"],a:0}
],
[
{t:"Estimate",q:"Round 48,672 to nearest thousand?",o:["49,000","48,000","50,000","48,700"],a:0},
{t:"Estimate",q:"Round 3,21,456 to nearest lakh?",o:["3,00,000","4,00,000","3,20,000","3,21,000"],a:0},
{t:"Estimate",q:"Estimate 298 × 52 ≈ ?",o:["15,000","10,000","20,000","1,500"],a:0},
{t:"Estimate",q:"Round 87,432 to nearest hundred?",o:["87,400","87,500","87,000","87,430"],a:0},
{t:"Estimate",q:"Round 34,567 to nearest ten thousand?",o:["30,000","35,000","40,000","34,570"],a:0},
{t:"Estimate",q:"Estimate 405 + 287 ≈ ?",o:["700","500","800","600"],a:0},
{t:"Estimate",q:"Estimate 612 − 289 ≈ ?",o:["300","400","200","500"],a:0},
{t:"Estimate",q:"Estimate 49 × 21 ≈ ?",o:["1,000","700","1,500","500"],a:0},
{t:"Estimate",q:"Estimate 985 ÷ 49 ≈ ?",o:["20","10","50","100"],a:0},
{t:"Estimate",q:"Round 4,98,765 to nearest thousand?",o:["4,99,000","5,00,000","4,98,000","4,98,770"],a:0}
],
[
{t:"Rounding",q:"12,450 to nearest hundred?",o:["12,500","12,400","12,000","13,000"],a:0},
{t:"Rounding",q:"89,300 to nearest thousand?",o:["89,000","90,000","89,300","89,500"],a:0},
{t:"Rounding",q:"5,67,432 to nearest lakh?",o:["6,00,000","5,00,000","5,67,000","5,70,000"],a:0},
{t:"Rounding",q:"999 to nearest hundred?",o:["1,000","900","990","1,100"],a:0},
{t:"Rounding",q:"4,321 to nearest ten?",o:["4,320","4,310","4,300","4,330"],a:0},
{t:"Rounding",q:"15,678 to nearest thousand?",o:["16,000","15,000","15,700","15,680"],a:0},
{t:"Rounding",q:"2,34,567 to nearest ten-thousand?",o:["2,30,000","2,40,000","2,35,000","2,00,000"],a:0},
{t:"Rounding",q:"56,789 to nearest hundred?",o:["56,800","56,700","57,000","56,790"],a:0},
{t:"Rounding",q:"1,23,456 to nearest lakh?",o:["1,00,000","2,00,000","1,23,000","1,25,000"],a:0},
{t:"Rounding",q:"87,654 to nearest ten?",o:["87,650","87,660","87,600","87,700"],a:0}
],
[
{t:"Compare",q:"Smaller: 45,200 or 45,020?",o:["45,020","45,200","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Greater: 2,34,567 or 2,30,000?",o:["2,34,567","2,30,000","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Biggest: 99,999 / 1,00,000 / 99,900?",o:["1,00,000","99,999","99,900","Equal"],a:0},
{t:"Compare",q:"Smallest: 56,789 / 55,678 / 57,000?",o:["55,678","56,789","57,000","Equal"],a:0},
{t:"Compare",q:"Greater: 8 lakh or 80,000?",o:["8 lakh","80,000","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Greater: 1 lakh or 10,000?",o:["1 lakh","10,000","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Diff 1,00,000 − 99,999 = ?",o:["1","0","10","100"],a:0},
{t:"Compare",q:"Diff 2,50,000 − 1,50,000 = ?",o:["1,00,000","1,50,000","2,00,000","50,000"],a:0},
{t:"Compare",q:"1000s in 1 lakh?",o:["100","10","1,000","50"],a:0},
{t:"Compare",q:"Is 5,00,000 = 5 lakh?",o:["Yes","No","Only approximately","Only if rounded"],a:0}
],
[
{t:"MultiStep",q:"Fisher ₹500/day × 30 days?",o:["₹15,000","₹530","₹5,000","₹1,500"],a:0},
{t:"MultiStep",q:"200 fish/day × 25 days?",o:["5,000","225","500","50,000"],a:0},
{t:"MultiStep",q:"₹20/kg × 150 kg?",o:["₹3,000","₹170","₹300","₹30,000"],a:0},
{t:"MultiStep",q:"Fuel ₹100 × 7 days?",o:["₹700","₹107","₹70","₹7,000"],a:0},
{t:"MultiStep",q:"100 boats × 200 fish × ₹30 each?",o:["₹6,00,000","₹6,000","₹60,000","₹30,000"],a:0},
{t:"MultiStep",q:"1 truck 5,000 kg × 20 trucks?",o:["1,00,000 kg","5,020 kg","10,000 kg","5,00,000 kg"],a:0},
{t:"MultiStep",q:"25 schools × 300 fish each?",o:["7,500","325","2,500","75,000"],a:0},
{t:"MultiStep",q:"20 villages × 500 people?",o:["10,000","520","1,000","1,00,000"],a:0},
{t:"MultiStep",q:"Light 3 lakh km/sec × 10 s?",o:["30 lakh km","3 lakh km","30,000 km","3 crore km"],a:0},
{t:"MultiStep",q:"Boat trip 200 km × 5 trips?",o:["1,000 km","205 km","500 km","20,000 km"],a:0}
]
]
},
// ─── Grade 5 · Chapter 2 · Shapes and Angles ───
2: { title:'Shapes and Angles',
beginner:[
[
{t:"Angle Types",q:"Right angle = ? degrees",o:["90","45","180","60"],a:0},
{t:"Angle Types",q:"Full turn = ? degrees",o:["360","180","90","270"],a:0},
{t:"Angle Types",q:"Half turn = ?",o:["180°","90°","360°","45°"],a:0},
{t:"Angle Types",q:"Quarter turn = ?",o:["90°","45°","180°","30°"],a:0},
{t:"Angle Types",q:"Angle less than 90° is?",o:["Acute","Obtuse","Right","Straight"],a:0},
{t:"Angle Types",q:"Angle more than 90° but less than 180°?",o:["Obtuse","Acute","Right","Reflex"],a:0},
{t:"Angle Types",q:"Angle exactly 90°?",o:["Right","Acute","Obtuse","Straight"],a:0},
{t:"Angle Types",q:"Angle exactly 180°?",o:["Straight","Right","Reflex","Full"],a:0},
{t:"Angle Types",q:"Angle between 180° and 360°?",o:["Reflex","Obtuse","Straight","Acute"],a:0},
{t:"Angle Types",q:"A straight line shows what angle at its midpoint?",o:["180°","90°","360°","0°"],a:0}
],
[
{t:"Classify",q:"45° is?",o:["Acute","Obtuse","Right","Straight"],a:0},
{t:"Classify",q:"120° is?",o:["Obtuse","Acute","Right","Reflex"],a:0},
{t:"Classify",q:"90° is?",o:["Right","Acute","Obtuse","Straight"],a:0},
{t:"Classify",q:"180° is?",o:["Straight","Right","Obtuse","Reflex"],a:0},
{t:"Classify",q:"30° is?",o:["Acute","Obtuse","Right","Reflex"],a:0},
{t:"Classify",q:"170° is?",o:["Obtuse","Acute","Straight","Right"],a:0},
{t:"Classify",q:"135° is?",o:["Obtuse","Right","Acute","Straight"],a:0},
{t:"Classify",q:"60° is?",o:["Acute","Right","Obtuse","Straight"],a:0},
{t:"Classify",q:"110° is?",o:["Obtuse","Acute","Right","Straight"],a:0},
{t:"Classify",q:"89° is?",o:["Acute","Right","Obtuse","Straight"],a:0}
],
[
{t:"Name Angle",q:"Angle at corner of a square?",o:["90°","60°","45°","180°"],a:0},
{t:"Name Angle",q:"Clock hands angle at 3:00?",o:["90°","180°","45°","60°"],a:0},
{t:"Name Angle",q:"Clock hands angle at 6:00?",o:["180°","90°","360°","270°"],a:0},
{t:"Name Angle",q:"Angle at each corner of an equilateral triangle?",o:["60°","90°","45°","30°"],a:0},
{t:"Name Angle",q:"Angle at each corner of a rectangle?",o:["90°","60°","45°","120°"],a:0},
{t:"Name Angle",q:"Pizza cut in 4, each slice angle?",o:["90°","60°","45°","120°"],a:0},
{t:"Name Angle",q:"Pizza cut in 8, each slice angle?",o:["45°","60°","90°","30°"],a:0},
{t:"Name Angle",q:"U-turn is how many degrees?",o:["180°","90°","270°","360°"],a:0},
{t:"Name Angle",q:"Right angle + right angle = ?",o:["180°","90°","360°","270°"],a:0},
{t:"Name Angle",q:"Sum of all angles in a straight line?",o:["180°","360°","90°","270°"],a:0}
],
[
{t:"Count",q:"Triangle has how many angles?",o:["3","4","5","0"],a:0},
{t:"Count",q:"Square has how many angles?",o:["4","3","5","8"],a:0},
{t:"Count",q:"Pentagon has how many angles?",o:["5","4","6","10"],a:0},
{t:"Count",q:"Rectangle has how many angles?",o:["4","3","5","8"],a:0},
{t:"Count",q:"Hexagon has how many angles?",o:["6","5","7","8"],a:0},
{t:"Count",q:"Circle has how many angles?",o:["0","1","360","infinite"],a:0},
{t:"Count",q:"Octagon has how many angles?",o:["8","6","10","4"],a:0},
{t:"Count",q:"A straight line has how many angles?",o:["0","1","180","360"],a:0},
{t:"Count",q:"'L' shape has how many corner angles?",o:["1","2","0","4"],a:0},
{t:"Count",q:"Quadrilateral has how many angles?",o:["4","3","5","6"],a:0}
],
[
{t:"Clock",q:"Angle at 12:00?",o:["0°","90°","180°","360°"],a:0},
{t:"Clock",q:"Angle at 3:00?",o:["90°","60°","180°","45°"],a:0},
{t:"Clock",q:"Angle at 6:00?",o:["180°","90°","360°","60°"],a:0},
{t:"Clock",q:"Angle at 9:00?",o:["90°","180°","60°","120°"],a:0},
{t:"Clock",q:"Minute hand from 12 to 3, angle swept?",o:["90°","180°","360°","45°"],a:0},
{t:"Clock",q:"Minute hand from 12 to 6 = ?",o:["180°","90°","360°","270°"],a:0},
{t:"Clock",q:"One full minute-hand rotation = ?",o:["360°","180°","90°","720°"],a:0},
{t:"Clock",q:"15 minutes = minute hand sweeps?",o:["90°","60°","45°","120°"],a:0},
{t:"Clock",q:"30 minutes = minute hand sweeps?",o:["180°","90°","120°","360°"],a:0},
{t:"Clock",q:"Clock hands overlap at?",o:["12:00","3:00","6:00","9:00"],a:0}
]
],
pro:[
[
{t:"Sum",q:"Sum of angles in a triangle?",o:["180°","360°","90°","270°"],a:0},
{t:"Sum",q:"Sum of angles in a quadrilateral?",o:["360°","180°","540°","720°"],a:0},
{t:"Sum",q:"Triangle has 50° and 60°. Third?",o:["70°","80°","90°","110°"],a:0},
{t:"Sum",q:"Right triangle 90° and 30°. Third?",o:["60°","30°","90°","120°"],a:0},
{t:"Sum",q:"Equilateral triangle each angle?",o:["60°","90°","45°","30°"],a:0},
{t:"Sum",q:"Square each angle?",o:["90°","60°","120°","45°"],a:0},
{t:"Sum",q:"Sum of angles in pentagon?",o:["540°","360°","720°","450°"],a:0},
{t:"Sum",q:"Regular pentagon each angle?",o:["108°","120°","90°","72°"],a:0},
{t:"Sum",q:"Sum of angles in hexagon?",o:["720°","360°","540°","480°"],a:0},
{t:"Sum",q:"Regular hexagon each angle?",o:["120°","108°","90°","135°"],a:0}
],
[
{t:"Comp/Supp",q:"Complement of 30°?",o:["60°","150°","90°","30°"],a:0},
{t:"Comp/Supp",q:"Supplement of 120°?",o:["60°","30°","90°","240°"],a:0},
{t:"Comp/Supp",q:"Complementary angles sum to?",o:["90°","180°","360°","45°"],a:0},
{t:"Comp/Supp",q:"Supplementary angles sum to?",o:["180°","90°","360°","120°"],a:0},
{t:"Comp/Supp",q:"Complement of 45°?",o:["45°","135°","90°","55°"],a:0},
{t:"Comp/Supp",q:"Supplement of 90°?",o:["90°","180°","0°","360°"],a:0},
{t:"Comp/Supp",q:"Complement of 60°?",o:["30°","120°","90°","60°"],a:0},
{t:"Comp/Supp",q:"Supplement of 150°?",o:["30°","60°","90°","210°"],a:0},
{t:"Comp/Supp",q:"Is 55° + 35° complementary?",o:["Yes","No","Supplementary","Neither"],a:0},
{t:"Comp/Supp",q:"Is 110° + 70° supplementary?",o:["Yes","No","Complementary","Neither"],a:0}
],
[
{t:"Draw",q:"Tool to draw 90°?",o:["Protractor / Set square","Stopwatch","Ruler only","Compass only"],a:0},
{t:"Draw",q:"Half of 180° = ?",o:["90°","45°","180°","360°"],a:0},
{t:"Draw",q:"One-third of 180° = ?",o:["60°","90°","30°","120°"],a:0},
{t:"Draw",q:"One-fourth of 360° = ?",o:["90°","60°","45°","180°"],a:0},
{t:"Draw",q:"One-sixth of 360° = ?",o:["60°","90°","45°","30°"],a:0},
{t:"Draw",q:"Half of 90° = ?",o:["45°","30°","60°","90°"],a:0},
{t:"Draw",q:"Twice of 30° = ?",o:["60°","30°","90°","120°"],a:0},
{t:"Draw",q:"3 × 30° = ?",o:["90°","60°","120°","180°"],a:0},
{t:"Draw",q:"2 × 45° = ?",o:["90°","135°","60°","180°"],a:0},
{t:"Draw",q:"4 × 90° = ?",o:["360°","180°","270°","720°"],a:0}
],
[
{t:"Clock+",q:"Angle at 4:00?",o:["120°","90°","60°","150°"],a:0},
{t:"Clock+",q:"Angle at 2:00?",o:["60°","30°","90°","120°"],a:0},
{t:"Clock+",q:"Angle at 5:00?",o:["150°","120°","90°","180°"],a:0},
{t:"Clock+",q:"Angle at 1:00?",o:["30°","60°","15°","90°"],a:0},
{t:"Clock+",q:"One hour = hour hand moves?",o:["30°","60°","90°","360°"],a:0},
{t:"Clock+",q:"Hour hand in 12 hours moves?",o:["360°","180°","720°","90°"],a:0},
{t:"Clock+",q:"30 min on min-hand = ?",o:["180°","90°","360°","45°"],a:0},
{t:"Clock+",q:"Angle at 10:00?",o:["60°","90°","120°","30°"],a:0},
{t:"Clock+",q:"Angle at 7:00?",o:["150°","90°","120°","60°"],a:0},
{t:"Clock+",q:"Minute hand moves ___ per minute?",o:["6°","1°","10°","360°"],a:0}
],
[
{t:"Word",q:"Door opens to 90°, then 45° more. Total?",o:["135°","45°","90°","180°"],a:0},
{t:"Word",q:"Turn right twice = ?",o:["180°","90°","360°","270°"],a:0},
{t:"Word",q:"Face north, turn 90° right. Face?",o:["East","West","South","North"],a:0},
{t:"Word",q:"Face east, turn 180°. Face?",o:["West","East","North","South"],a:0},
{t:"Word",q:"Compass 4 main directions — each apart?",o:["90°","45°","60°","180°"],a:0},
{t:"Word",q:"Pie chart 4 equal slices — each?",o:["90°","60°","45°","120°"],a:0},
{t:"Word",q:"Pie chart 8 equal slices — each?",o:["45°","30°","60°","90°"],a:0},
{t:"Word",q:"Escalator rises at ~30°. Acute?",o:["Yes","No","Right","Reflex"],a:0},
{t:"Word",q:"Leaning tower leans ~4°. Acute?",o:["Yes","No","Right","Obtuse"],a:0},
{t:"Word",q:"Second hand moves 6° per second. True?",o:["True","False","Only sometimes","Only in PM"],a:0}
]
]
}},

// ═══════════════════════════════════════════════════════════════
// GRADE 6 · Chapter 1 · Patterns in Mathematics
// ═══════════════════════════════════════════════════════════════
6: { 1: { title:'Patterns in Mathematics',
beginner:[
[
{t:"Arithmetic",q:"Next: 2, 4, 6, 8, ___?",o:["10","9","12","7"],a:0},
{t:"Arithmetic",q:"Next: 5, 10, 15, 20, ___?",o:["25","30","22","15"],a:0},
{t:"Arithmetic",q:"Next (going down): 10, 9, 8, 7, ___?",o:["6","5","8","7"],a:0},
{t:"Arithmetic",q:"Next: 1, 3, 5, 7, ___?",o:["9","8","10","11"],a:0},
{t:"Arithmetic",q:"Next: 3, 6, 9, 12, ___?",o:["15","13","16","18"],a:0},
{t:"Arithmetic",q:"Next: 100, 90, 80, 70, ___?",o:["60","65","75","85"],a:0},
{t:"Arithmetic",q:"Next: 7, 14, 21, 28, ___?",o:["35","30","40","42"],a:0},
{t:"Arithmetic",q:"Next: 25, 20, 15, 10, ___?",o:["5","0","8","12"],a:0},
{t:"Arithmetic",q:"Next: 0, 4, 8, 12, ___?",o:["16","10","14","20"],a:0},
{t:"Arithmetic",q:"Next: 11, 22, 33, 44, ___?",o:["55","50","45","66"],a:0}
],
[
{t:"Geometric",q:"Next (×2): 2, 4, 8, 16, ___?",o:["32","24","20","18"],a:0},
{t:"Geometric",q:"Next (×3): 1, 3, 9, 27, ___?",o:["81","36","54","72"],a:0},
{t:"Geometric",q:"Next (÷3): 81, 27, 9, ___?",o:["3","1","6","0"],a:0},
{t:"Geometric",q:"Next (×2): 3, 6, 12, 24, ___?",o:["48","30","36","72"],a:0},
{t:"Geometric",q:"Next (×10): 1, 10, 100, ___?",o:["1000","110","10000","200"],a:0},
{t:"Geometric",q:"Next (÷2): 32, 16, 8, ___?",o:["4","2","6","8"],a:0},
{t:"Geometric",q:"Next (×5): 1, 5, 25, ___?",o:["125","50","30","100"],a:0},
{t:"Geometric",q:"Next (×2): 5, 10, 20, 40, ___?",o:["80","60","50","100"],a:0},
{t:"Geometric",q:"Next (×4): 1, 4, 16, ___?",o:["64","20","32","48"],a:0},
{t:"Geometric",q:"Next (÷10): 10000, 1000, 100, ___?",o:["10","1","50","100"],a:0}
],
[
{t:"Shape Pat",q:"Next: △ □ △ □ △ ___?",o:["□","△","○","◇"],a:0},
{t:"Shape Pat",q:"Next: ○ ● ○ ● ○ ___?",o:["●","○","◇","△"],a:0},
{t:"Shape Pat",q:"Next: A B A B A B ___?",o:["A","B","C","AB"],a:0},
{t:"Shape Pat",q:"Next: A B C A B C ___?",o:["A","B","C","D"],a:0},
{t:"Shape Pat",q:"Next: 🔴🔵🟡🔴🔵 ___?",o:["🟡","🔴","🔵","🟢"],a:0},
{t:"Shape Pat",q:"Next: X Y X Y X Y ___?",o:["X","Y","Z","XY"],a:0},
{t:"Shape Pat",q:"Next: 1 2 3 1 2 3 ___?",o:["1","2","3","4"],a:0},
{t:"Shape Pat",q:"Next: 🐱🐶🐰🐱🐶 ___?",o:["🐰","🐱","🐶","🐻"],a:0},
{t:"Shape Pat",q:"Next: red, blue, red, blue, red ___?",o:["blue","red","green","yellow"],a:0},
{t:"Shape Pat",q:"Next: 🟥🟨🟩🟥🟨 ___?",o:["🟩","🟥","🟨","🟦"],a:0}
],
[
{t:"Odd/Even",q:"Next odd: 1, 3, 5, ___?",o:["7","6","9","4"],a:0},
{t:"Odd/Even",q:"Next even: 2, 4, 6, ___?",o:["8","7","10","9"],a:0},
{t:"Odd/Even",q:"Is 37 odd or even?",o:["Odd","Even","Both","Neither"],a:0},
{t:"Odd/Even",q:"Is 124 odd or even?",o:["Even","Odd","Both","Neither"],a:0},
{t:"Odd/Even",q:"Sum of first 5 odd numbers?",o:["25","20","24","30"],a:0},
{t:"Odd/Even",q:"Sum of first 4 even numbers?",o:["20","16","24","12"],a:0},
{t:"Odd/Even",q:"Odd + Odd = ?",o:["Even","Odd","Zero","Prime"],a:0},
{t:"Odd/Even",q:"Even + Even = ?",o:["Even","Odd","Zero","Prime"],a:0},
{t:"Odd/Even",q:"Odd + Even = ?",o:["Odd","Even","Zero","Prime"],a:0},
{t:"Odd/Even",q:"Is 99 odd or even?",o:["Odd","Even","Both","Neither"],a:0}
],
[
{t:"Rules",q:"Rule +2, start 3. 4th term?",o:["9","7","11","5"],a:0},
{t:"Rules",q:"Rule ×2, start 1. 5th term?",o:["16","8","32","10"],a:0},
{t:"Rules",q:"Rule +5, start 0. 3rd term?",o:["10","5","15","20"],a:0},
{t:"Rules",q:"Rule ×3, start 2. 4th term?",o:["54","24","18","12"],a:0},
{t:"Rules",q:"Rule +10, start 5. 6th term?",o:["55","45","65","50"],a:0},
{t:"Rules",q:"Pattern 1,4,7,10 rule?",o:["+3","+4","×2","+2"],a:0},
{t:"Rules",q:"Pattern 2,6,18,54 rule?",o:["×3","+4","×2","+6"],a:0},
{t:"Rules",q:"Pattern 100,90,80 rule?",o:["−10","÷10","+10","−5"],a:0},
{t:"Rules",q:"Pattern 1,2,4,8,16 rule?",o:["×2","+1","×3","+2"],a:0},
{t:"Rules",q:"Pattern 5,8,11,14 rule?",o:["+3","+4","×2","+5"],a:0}
]
],
pro:[
[
{t:"Squares",q:"1st square number?",o:["1","2","4","0"],a:0},
{t:"Squares",q:"2nd square number?",o:["4","2","6","8"],a:0},
{t:"Squares",q:"3rd square?",o:["9","6","12","8"],a:0},
{t:"Squares",q:"5th square?",o:["25","20","36","16"],a:0},
{t:"Squares",q:"7th square?",o:["49","42","56","36"],a:0},
{t:"Squares",q:"8²?",o:["64","16","81","48"],a:0},
{t:"Squares",q:"10²?",o:["100","20","1000","110"],a:0},
{t:"Squares",q:"12²?",o:["144","124","132","169"],a:0},
{t:"Squares",q:"6²?",o:["36","12","30","42"],a:0},
{t:"Squares",q:"Is 81 a perfect square?",o:["Yes","No","Only approximately","Sometimes"],a:0}
],
[
{t:"Triangular",q:"1st triangular?",o:["1","2","3","0"],a:0},
{t:"Triangular",q:"2nd triangular?",o:["3","4","2","6"],a:0},
{t:"Triangular",q:"3rd triangular?",o:["6","9","5","7"],a:0},
{t:"Triangular",q:"4th triangular?",o:["10","12","8","15"],a:0},
{t:"Triangular",q:"5th triangular?",o:["15","10","20","12"],a:0},
{t:"Triangular",q:"n(n+1)/2 for n=6?",o:["21","15","28","20"],a:0},
{t:"Triangular",q:"n(n+1)/2 for n=7?",o:["28","21","35","24"],a:0},
{t:"Triangular",q:"n(n+1)/2 for n=10?",o:["55","45","50","66"],a:0},
{t:"Triangular",q:"Is 15 a triangular number?",o:["Yes","No","Only approximately","Sometimes"],a:0},
{t:"Triangular",q:"Is 36 triangular?",o:["Yes","No","Only approximately","Sometimes"],a:0}
],
[
{t:"Cubes",q:"1³?",o:["1","3","0","2"],a:0},
{t:"Cubes",q:"2³?",o:["8","6","4","9"],a:0},
{t:"Cubes",q:"3³?",o:["27","9","21","12"],a:0},
{t:"Cubes",q:"4³?",o:["64","16","48","32"],a:0},
{t:"Cubes",q:"5³?",o:["125","25","75","100"],a:0},
{t:"Cubes",q:"6³?",o:["216","36","162","188"],a:0},
{t:"Cubes",q:"10³?",o:["1000","100","300","10000"],a:0},
{t:"Cubes",q:"Is 125 a cube?",o:["Yes","No","Only approximately","Sometimes"],a:0},
{t:"Cubes",q:"Is 100 a cube?",o:["No","Yes","Only approximately","Sometimes"],a:0},
{t:"Cubes",q:"Is 1000 a cube?",o:["Yes","No","Only approximately","Sometimes"],a:0}
],
[
{t:"Fibonacci",q:"Next: 1, 1, 2, 3, 5, 8, ___?",o:["13","11","16","14"],a:0},
{t:"Fibonacci",q:"Next after 13?",o:["21","18","26","20"],a:0},
{t:"Fibonacci",q:"Sum of two consecutive Fibonacci = ?",o:["Next Fibonacci","Same","Zero","Prime"],a:0},
{t:"Fibonacci",q:"8th Fibonacci (from 1,1)?",o:["21","13","34","20"],a:0},
{t:"Fibonacci",q:"10th Fibonacci?",o:["55","50","34","89"],a:0},
{t:"Fibonacci",q:"Fibonacci starts with?",o:["1, 1","0, 1","1, 2","2, 3"],a:0},
{t:"Fibonacci",q:"Rule aₙ = aₙ₋₁ + aₙ₋₂ — true?",o:["True","False","Only for evens","Only for primes"],a:0},
{t:"Fibonacci",q:"Is 50 a Fibonacci number?",o:["No","Yes","Only approximately","Sometimes"],a:0},
{t:"Fibonacci",q:"Next after 21?",o:["34","29","42","33"],a:0},
{t:"Fibonacci",q:"4th Fibonacci?",o:["3","2","5","4"],a:0}
],
[
{t:"Formula",q:"100th term of 2, 4, 6, 8…?",o:["200","100","150","1000"],a:0},
{t:"Formula",q:"50th term of 1, 3, 5, 7…?",o:["99","100","50","101"],a:0},
{t:"Formula",q:"5n: 7th term?",o:["35","25","30","40"],a:0},
{t:"Formula",q:"aₙ = n²+1; 3rd term?",o:["10","9","7","11"],a:0},
{t:"Formula",q:"aₙ = 2n−1; 5th term?",o:["9","8","11","10"],a:0},
{t:"Formula",q:"aₙ = n(n+1)/2; 4th term?",o:["10","6","12","8"],a:0},
{t:"Formula",q:"aₙ = 3n; 8th term?",o:["24","16","27","30"],a:0},
{t:"Formula",q:"Common difference of 7,11,15,19?",o:["4","3","5","7"],a:0},
{t:"Formula",q:"Common ratio of 3,6,12,24?",o:["2","3","4","6"],a:0},
{t:"Formula",q:"aₙ = n+5; 10th term?",o:["15","10","5","20"],a:0}
]
]
},
// ─── Grade 6 · Chapter 2 · Lines and Angles ───
2: { title:'Lines and Angles',
beginner:[
[
{t:"Lines",q:"A line has how many endpoints?",o:["0","1","2","Infinite"],a:0},
{t:"Lines",q:"A ray has how many endpoints?",o:["1","0","2","Infinite"],a:0},
{t:"Lines",q:"A line segment has how many endpoints?",o:["2","1","0","Infinite"],a:0},
{t:"Lines",q:"Shortest path between 2 points?",o:["Line segment","Curve","Ray","Line"],a:0},
{t:"Lines",q:"Can a line be extended both ways?",o:["Yes","No","Only one way","Only short distance"],a:0},
{t:"Lines",q:"A ray starts from?",o:["One point","Two points","Zero points","Midpoint"],a:0},
{t:"Lines",q:"Is line AB same as line BA?",o:["Yes","No","Only sometimes","Depends on length"],a:0},
{t:"Lines",q:"Is ray AB same as ray BA?",o:["No","Yes","Only for lines","Only for segments"],a:0},
{t:"Lines",q:"Two lines can have at most how many common points?",o:["1 (unless same line)","0","2","Infinite"],a:0},
{t:"Lines",q:"Collinear points lie on?",o:["Same line","Different lines","A triangle","A square"],a:0}
],
[
{t:"Types",q:"0° < acute < ?",o:["90°","180°","45°","60°"],a:0},
{t:"Types",q:"90° < obtuse < ?",o:["180°","360°","90°","120°"],a:0},
{t:"Types",q:"Exactly 90°?",o:["Right","Acute","Obtuse","Straight"],a:0},
{t:"Types",q:"Exactly 180°?",o:["Straight","Right","Reflex","Full"],a:0},
{t:"Types",q:"180° < reflex < ?",o:["360°","540°","180°","720°"],a:0},
{t:"Types",q:"Angle of zero turn?",o:["Zero angle","Right","Acute","Straight"],a:0},
{t:"Types",q:"Angle of complete turn?",o:["360°","180°","90°","720°"],a:0},
{t:"Types",q:"Smallest angle possible?",o:["Zero","90°","180°","360°"],a:0},
{t:"Types",q:"Angle between two perpendicular lines?",o:["90°","180°","45°","60°"],a:0},
{t:"Types",q:"Can angles be negative (in school maths)?",o:["Not typically","Always","Only obtuse","Only right"],a:0}
],
[
{t:"Measure",q:"Tool to measure angles?",o:["Protractor","Ruler","Compass","Scale"],a:0},
{t:"Measure",q:"Unit of angle?",o:["Degrees","Metres","Grams","Litres"],a:0},
{t:"Measure",q:"Protractor shape?",o:["Semicircle","Square","Triangle","Rectangle"],a:0},
{t:"Measure",q:"Centre of protractor = ?",o:["Vertex of angle","Endpoint","Edge","None"],a:0},
{t:"Measure",q:"To measure, align ___ on baseline.",o:["One arm","Vertex","Far end","Neither arm"],a:0},
{t:"Measure",q:"Zero on protractor is on?",o:["Either side","Middle only","Top only","Not marked"],a:0},
{t:"Measure",q:"Right angle reads on protractor?",o:["90°","45°","180°","60°"],a:0},
{t:"Measure",q:"Reading beyond 90° indicates?",o:["Obtuse","Acute","Right","Straight"],a:0},
{t:"Measure",q:"Straight angle reads?",o:["180°","90°","360°","270°"],a:0},
{t:"Measure",q:"Full turn = ?",o:["360°","180°","720°","90°"],a:0}
],
[
{t:"Para/Inter",q:"Parallel lines never?",o:["Meet","Are straight","Go right","Bend"],a:0},
{t:"Para/Inter",q:"Distance between parallel lines is?",o:["Constant","Growing","Shrinking","Variable"],a:0},
{t:"Para/Inter",q:"Train tracks are?",o:["Parallel","Intersecting","Perpendicular","Curved"],a:0},
{t:"Para/Inter",q:"Intersecting lines meet at?",o:["One point","Two points","A line","No point"],a:0},
{t:"Para/Inter",q:"Perpendicular lines intersect at?",o:["90°","45°","60°","180°"],a:0},
{t:"Para/Inter",q:"Sides of a ladder are?",o:["Parallel","Perpendicular","Intersecting","Curved"],a:0},
{t:"Para/Inter",q:"Rungs of a ladder to its sides?",o:["Perpendicular","Parallel","Intersecting","Curved"],a:0},
{t:"Para/Inter",q:"'L' shape lines are?",o:["Perpendicular","Parallel","Curved","Overlapping"],a:0},
{t:"Para/Inter",q:"'X' shape lines are?",o:["Intersecting","Parallel","Perpendicular","Same"],a:0},
{t:"Para/Inter",q:"'||' means?",o:["Parallel","Perpendicular","Intersecting","Greater than"],a:0}
],
[
{t:"Pairs",q:"Angles summing to 90° are?",o:["Complementary","Supplementary","Vertically opposite","Straight"],a:0},
{t:"Pairs",q:"Angles summing to 180° are?",o:["Supplementary","Complementary","Vertical","Reflex"],a:0},
{t:"Pairs",q:"Angles sharing a vertex and a common side?",o:["Adjacent","Vertical","Supplementary","Parallel"],a:0},
{t:"Pairs",q:"Angles opposite each other at an intersection?",o:["Vertically opposite","Adjacent","Alternate","Co-interior"],a:0},
{t:"Pairs",q:"Vertically opposite angles are?",o:["Equal","Supplementary","Complementary","Unrelated"],a:0},
{t:"Pairs",q:"Linear pair sum?",o:["180°","90°","360°","45°"],a:0},
{t:"Pairs",q:"Two angles on a straight line form a?",o:["Linear pair","Right angle","Reflex","Full turn"],a:0},
{t:"Pairs",q:"Supplementary of a right angle?",o:["90°","180°","0°","45°"],a:0},
{t:"Pairs",q:"Complementary pair sum?",o:["90°","180°","45°","360°"],a:0},
{t:"Pairs",q:"Adjacent & non-overlapping means?",o:["Side-by-side","Inside","Same angle","Mirror image"],a:0}
]
],
pro:[
[
{t:"Calc",q:"Complement of 40°?",o:["50°","60°","90°","140°"],a:0},
{t:"Calc",q:"Supplement of 100°?",o:["80°","100°","90°","20°"],a:0},
{t:"Calc",q:"Two complementary; one is 35°?",o:["55°","65°","45°","125°"],a:0},
{t:"Calc",q:"Two equal supplementary angles; each?",o:["90°","45°","60°","180°"],a:0},
{t:"Calc",q:"Supplement of 45°?",o:["135°","45°","90°","315°"],a:0},
{t:"Calc",q:"Complement of 60°?",o:["30°","120°","90°","60°"],a:0},
{t:"Calc",q:"Complement of 70°?",o:["20°","110°","90°","160°"],a:0},
{t:"Calc",q:"Supplement of 130°?",o:["50°","30°","60°","230°"],a:0},
{t:"Calc",q:"1/4 of 360°?",o:["90°","60°","120°","180°"],a:0},
{t:"Calc",q:"3/4 of 360°?",o:["270°","180°","90°","360°"],a:0}
],
[
{t:"Intersect",q:"Two lines intersect — angles formed?",o:["4","2","6","8"],a:0},
{t:"Intersect",q:"Opposite angles at intersection are?",o:["Equal","Unequal","Zero","Right"],a:0},
{t:"Intersect",q:"Sum of all 4 angles at intersection?",o:["360°","180°","90°","720°"],a:0},
{t:"Intersect",q:"Adjacent angles at intersection are?",o:["Supplementary","Complementary","Equal","Vertical"],a:0},
{t:"Intersect",q:"Two lines make 60°. Vertically opposite?",o:["60°","120°","30°","90°"],a:0},
{t:"Intersect",q:"The other two angles (above) are?",o:["120° each","60° each","90° each","180° each"],a:0},
{t:"Intersect",q:"If one angle at intersection is 90°, all four?",o:["90° (perpendicular)","60°","45°","120°"],a:0},
{t:"Intersect",q:"Linear pair sum?",o:["180°","360°","90°","120°"],a:0},
{t:"Intersect",q:"Supplement of 45°?",o:["135°","45°","90°","55°"],a:0},
{t:"Intersect",q:"Vertically opposite of 135°?",o:["135°","45°","90°","180°"],a:0}
],
[
{t:"Transversal",q:"Transversal cuts 2 parallel lines — angles formed?",o:["8","4","6","12"],a:0},
{t:"Transversal",q:"Corresponding angles are?",o:["Equal","Supplementary","Complementary","Zero"],a:0},
{t:"Transversal",q:"Alternate interior angles are?",o:["Equal","Supplementary","Complementary","Different"],a:0},
{t:"Transversal",q:"Co-interior (same-side interior) sum?",o:["180°","90°","360°","120°"],a:0},
{t:"Transversal",q:"Alternate exterior angles are?",o:["Equal","Supplementary","Complementary","Zero"],a:0},
{t:"Transversal",q:"If 1 angle is 70°, corresponding = ?",o:["70°","110°","180°","90°"],a:0},
{t:"Transversal",q:"If corresponding angles equal, lines are?",o:["Parallel","Perpendicular","Intersecting","Skew"],a:0},
{t:"Transversal",q:"Alternate of 50° = ?",o:["50°","130°","90°","60°"],a:0},
{t:"Transversal",q:"Co-interior of 110° = ?",o:["70°","110°","90°","180°"],a:0},
{t:"Transversal",q:"Vertically opposite of 60° = ?",o:["60°","120°","90°","180°"],a:0}
],
[
{t:"Construct",q:"Perpendicular bisector divides a segment into?",o:["2 equal halves, at 90°","2 unequal halves","3 parts","1 half"],a:0},
{t:"Construct",q:"Angle bisector divides an angle into?",o:["2 equal halves","3 parts","2 unequal parts","Halves not equal"],a:0},
{t:"Construct",q:"Bisector of 60° gives?",o:["30° each","60° each","45° each","15° each"],a:0},
{t:"Construct",q:"Perpendicular bisector of 10 cm segment — halves?",o:["5 cm each","10 cm each","2.5 cm each","4 cm each"],a:0},
{t:"Construct",q:"Tools for angle bisection?",o:["Compass + ruler","Only ruler","Only compass","Protractor only"],a:0},
{t:"Construct",q:"Perpendicular lines make angle?",o:["90°","45°","180°","60°"],a:0},
{t:"Construct",q:"Bisector of 90° gives?",o:["45°","60°","30°","90°"],a:0},
{t:"Construct",q:"A right angle bisected gives?",o:["Two 45°","Two 30°","Two 90°","One 45°"],a:0},
{t:"Construct",q:"Can a 40° angle be bisected?",o:["Yes (20° + 20°)","No","Only into 30°+10°","Only right angles"],a:0},
{t:"Construct",q:"Angle bisector passes through?",o:["Vertex","Midpoint of arms","Far endpoint","None"],a:0}
],
[
{t:"Word",q:"Triangle angles 60°, 60°, ? ",o:["60°","90°","30°","120°"],a:0},
{t:"Word",q:"Right triangle with 30°, other angles?",o:["90° + 60°","45° + 45°","60° + 60°","90° + 90°"],a:0},
{t:"Word",q:"Linear pair: one is 75°; other?",o:["105°","75°","85°","95°"],a:0},
{t:"Word",q:"Can vertically opposite angles differ?",o:["No (always equal)","Yes","Only if parallel","Only if right"],a:0},
{t:"Word",q:"Sum of exterior angles of any polygon?",o:["360°","180°","540°","720°"],a:0},
{t:"Word",q:"Each exterior angle of regular pentagon?",o:["72°","60°","90°","108°"],a:0},
{t:"Word",q:"Each interior angle of regular hexagon?",o:["120°","90°","108°","135°"],a:0},
{t:"Word",q:"If two lines parallel, corresponding angles are?",o:["Equal","Supplementary","Different","Zero"],a:0},
{t:"Word",q:"One right turn = ?",o:["90°","180°","45°","60°"],a:0},
{t:"Word",q:"Angle sum of quadrilateral?",o:["360°","180°","540°","270°"],a:0}
]
]
}},

// ═══════════════════════════════════════════════════════════════
// GRADE 7 · Chapter 1 · Large Numbers Around Us
// ═══════════════════════════════════════════════════════════════
7: { 1: { title:'Large Numbers Around Us',
beginner:[
[
{t:"Indian Sys",q:"Zeros in 1 crore?",o:["7","6","5","8"],a:0},
{t:"Indian Sys",q:"1 crore = ?",o:["1,00,00,000","10,00,000","10,000","1,000,000"],a:0},
{t:"Indian Sys",q:"1 crore = how many lakhs?",o:["100","10","1,000","10,000"],a:0},
{t:"Indian Sys",q:"Indian system places commas after?",o:["Thousands, lakhs, crores","Every 3 digits","After millions","After billions"],a:0},
{t:"Indian Sys",q:"'Twenty-five lakh thirty thousand'?",o:["25,30,000","2,53,000","2,53,0000","25,300"],a:0},
{t:"Indian Sys",q:"Thousands in 1 lakh?",o:["100","10","1,000","50"],a:0},
{t:"Indian Sys",q:"Place value of 6 in 6,34,250?",o:["6,00,000","60,000","6,000","600"],a:0},
{t:"Indian Sys",q:"In 5,67,89,123 — lakhs-place digit?",o:["7","6","5","8"],a:0},
{t:"Indian Sys",q:"10 crore = ?",o:["10,00,00,000","1,00,00,000","1,000,000","1,00,00,00,000"],a:0},
{t:"Indian Sys",q:"1 million in Indian system = ?",o:["10 lakh","1 lakh","1 crore","10 crore"],a:0}
],
[
{t:"Place Val",q:"In 12,34,567 — tens digit?",o:["6","5","4","7"],a:0},
{t:"Place Val",q:"In 12,34,567 — thousands digit?",o:["4","3","5","6"],a:0},
{t:"Place Val",q:"In 12,34,567 — lakhs digit?",o:["2","1","3","4"],a:0},
{t:"Place Val",q:"Standard form 'Three crore'?",o:["3,00,00,000","30,00,000","3,00,000","3,000,000"],a:0},
{t:"Place Val",q:"'Fifty lakh' in digits?",o:["50,00,000","5,00,000","50,000","5,00,00,000"],a:0},
{t:"Place Val",q:"Place value of 7 in 7,00,000?",o:["7 lakh","7 thousand","7 crore","70,000"],a:0},
{t:"Place Val",q:"Place value of 1 in 1,23,45,678?",o:["1 crore","1 lakh","10 lakh","1,000"],a:0},
{t:"Place Val",q:"Smallest 7-digit number?",o:["10,00,000","1,00,000","10,00,001","99,99,999"],a:0},
{t:"Place Val",q:"Largest 7-digit number?",o:["99,99,999","10,00,000","1,00,00,000","9,99,999"],a:0},
{t:"Place Val",q:"Successor of 9,99,99,999?",o:["10,00,00,000","9,99,99,998","1,00,00,000","9,00,00,000"],a:0}
],
[
{t:"Reading",q:"Name 3,45,67,890?",o:["Three crore forty-five lakh sixty-seven thousand eight hundred ninety","Thirty-four crore...","Three lakh forty-five crore...","Three hundred forty-five thousand..."],a:0},
{t:"Reading",q:"'Two lakh thirty thousand' in digits?",o:["2,30,000","23,000","2,03,000","2,30,00,000"],a:0},
{t:"Reading",q:"Greater: 12 lakh or 1 crore?",o:["1 crore","12 lakh","Equal","Cannot tell"],a:0},
{t:"Reading",q:"Greater: 99,99,999 or 1,00,00,000?",o:["1,00,00,000","99,99,999","Equal","Cannot tell"],a:0},
{t:"Reading",q:"Smaller: 45 lakh or 4 crore?",o:["45 lakh","4 crore","Equal","Cannot tell"],a:0},
{t:"Reading",q:"1,23,45,678 ≈ ?",o:["1.2 crore","12 lakh","12 crore","1.2 lakh"],a:0},
{t:"Reading",q:"An 8-digit number lies in?",o:["Crore range","Lakh range","Thousand range","Million range"],a:0},
{t:"Reading",q:"1 day = 86,400 seconds. Read as?",o:["Eighty-six thousand four hundred","Eight lakh sixty-four thousand","Eighty-six hundred thousand","Eight hundred sixty-four thousand"],a:0},
{t:"Reading",q:"Year ≈ 365 × 24 ≈ hours?",o:["8,760","86,400","876","87,600"],a:0},
{t:"Reading",q:"Moon distance 3,84,000 km. Read?",o:["Three lakh eighty-four thousand","Three thousand eighty-four","Thirty-eight crore","Three crore forty-eight"],a:0}
],
[
{t:"Names",q:"1,23,456 in words?",o:["One lakh twenty-three thousand four hundred fifty-six","Twelve lakh thirty-four thousand","One hundred twenty-three thousand","One crore twenty-three thousand"],a:0},
{t:"Names",q:"'One crore' in digits?",o:["1,00,00,000","10,00,000","1,000,000","1,00,000"],a:0},
{t:"Names",q:"'Seventy-five lakh' in digits?",o:["75,00,000","7,50,000","75,000","7,50,00,000"],a:0},
{t:"Names",q:"'Three lakh five thousand' in digits?",o:["3,05,000","3,50,000","30,500","3,00,5000"],a:0},
{t:"Names",q:"'Two hundred crore' in digits?",o:["2,00,00,00,000","2,00,00,000","20,00,00,000","2,00,000"],a:0},
{t:"Names",q:"'Ten crore' = ?",o:["10,00,00,000","1,00,00,000","10,00,000","10,00,00,00,000"],a:0},
{t:"Names",q:"'Fifty crore' = ?",o:["50,00,00,000","5,00,00,000","50,00,000","50,000"],a:0},
{t:"Names",q:"'100 crore' equals?",o:["1 arab (1 billion)","1 lakh","1 crore","10 crore"],a:0},
{t:"Names",q:"'Twenty lakh' = ?",o:["20,00,000","2,00,000","2,00,00,000","20,000"],a:0},
{t:"Names",q:"1,000 lakh = ?",o:["10 crore","1 crore","100 crore","1 lakh"],a:0}
],
[
{t:"Compare",q:"Greater: 5,67,89,012 or 6,56,78,901?",o:["6,56,78,901","5,67,89,012","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Smaller: 34,56,789 or 3,45,67,890?",o:["34,56,789","3,45,67,890","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Order (ascending): 1 crore, 10 lakh, 1 lakh",o:["1 lakh < 10 lakh < 1 crore","1 crore < 10 lakh < 1 lakh","10 lakh < 1 lakh < 1 crore","Equal"],a:0},
{t:"Compare",q:"Largest of 45,00,000 / 4,50,000 / 4,50,00,000?",o:["4,50,00,000","45,00,000","4,50,000","Equal"],a:0},
{t:"Compare",q:"Smallest: 99,99,999 or 1,00,00,000?",o:["99,99,999","1,00,00,000","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Difference 1 crore − 1 = ?",o:["99,99,999","9,99,999","99,99,990","1,00,00,000"],a:0},
{t:"Compare",q:"Is 2 crore > 20 lakh?",o:["Yes","No","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Is 10 lakh = 1 million?",o:["Yes","No","Approximately","Cannot tell"],a:0},
{t:"Compare",q:"Is 1 crore = 10 million?",o:["Yes","No","Approximately","Cannot tell"],a:0},
{t:"Compare",q:"Is 100 crore = 1 billion?",o:["Yes","No","Approximately","Cannot tell"],a:0}
]
],
pro:[
[
{t:"Ind vs Intl",q:"Indian 1,00,000 = International?",o:["100,000","10,000","1,000,000","10,00,00"],a:0},
{t:"Ind vs Intl",q:"1 million in Indian?",o:["10 lakh","1 lakh","1 crore","10 crore"],a:0},
{t:"Ind vs Intl",q:"Commas (Indian) in 987654321?",o:["98,76,54,321","987,654,321","9876,54,321","98765,4321"],a:0},
{t:"Ind vs Intl",q:"Commas (International) in 987654321?",o:["987,654,321","98,76,54,321","987,65,43,21","9876,54,321"],a:0},
{t:"Ind vs Intl",q:"1 billion = how many crores?",o:["100","10","1,000","10,000"],a:0},
{t:"Ind vs Intl",q:"100 crore = ?",o:["1 arab (1 billion)","1 lakh","10 crore","1 crore crore"],a:0},
{t:"Ind vs Intl",q:"1 trillion = how many crores?",o:["1,00,000","10,000","1,000","10"],a:0},
{t:"Ind vs Intl",q:"International 1,000,000 = Indian?",o:["10 lakh","1 lakh","1 crore","100 lakh"],a:0},
{t:"Ind vs Intl",q:"Is 10⁶ = 1 lakh?",o:["No (it's 10 lakh)","Yes","Approximately","Cannot tell"],a:0},
{t:"Ind vs Intl",q:"Is 10⁷ = 1 crore?",o:["Yes","No","Approximately","Cannot tell"],a:0}
],
[
{t:"Powers",q:"10²?",o:["100","10","1000","1"],a:0},
{t:"Powers",q:"10³?",o:["1,000","100","10,000","10"],a:0},
{t:"Powers",q:"10⁴?",o:["10,000","1,000","1,00,000","40"],a:0},
{t:"Powers",q:"10⁵?",o:["1 lakh","10,000","10 lakh","50"],a:0},
{t:"Powers",q:"10⁶?",o:["10 lakh (1 million)","1 lakh","1 crore","60"],a:0},
{t:"Powers",q:"10⁷?",o:["1 crore","10 lakh","10 crore","70"],a:0},
{t:"Powers",q:"10⁸?",o:["10 crore","1 crore","1 lakh","80"],a:0},
{t:"Powers",q:"10⁹?",o:["1 arab (1 billion)","1 crore","10 crore","90"],a:0},
{t:"Powers",q:"10¹⁰?",o:["10 arab","1 arab","1 crore","100"],a:0},
{t:"Powers",q:"10¹² equals?",o:["1 trillion","1 billion","1 crore","1 lakh crore"],a:0}
],
[
{t:"Word",q:"India population ≈ 140 crore. In digits?",o:["1,40,00,00,000","14,00,00,00,000","1,40,00,000","14,00,000"],a:0},
{t:"Word",q:"Earth–Sun ≈ 15 crore km. In digits?",o:["15,00,00,000","1,50,00,000","15,00,000","1,50,000"],a:0},
{t:"Word",q:"Factory makes 2,500 toys/day × 30?",o:["75,000","7,500","50,000","1,00,000"],a:0},
{t:"Word",q:"₹2 crore in lots of ₹5 lakh?",o:["40","20","10","400"],a:0},
{t:"Word",q:"25 × 2,00,000 = ?",o:["50,00,000","5,00,000","2,50,000","5,00,00,000"],a:0},
{t:"Word",q:"Light 3 lakh km/s × 5 s?",o:["15 lakh km","3 lakh km","3,00,000 km","15,000 km"],a:0},
{t:"Word",q:"₹1 crore in ₹1,000 notes?",o:["10,000","1,000","1,00,000","100"],a:0},
{t:"Word",q:"10.5 crore people = how many lakhs?",o:["1,050","105","10,500","1,05,000"],a:0},
{t:"Word",q:"A city of 1.2 crore = how many million?",o:["12","1.2","120","1,200"],a:0},
{t:"Word",q:"Pump 50 L/s × 3,600 s = per hour?",o:["1,80,000 L","18,000 L","5,000 L","36,000 L"],a:0}
],
[
{t:"Estimate",q:"Estimate 4,87,652 + 3,12,348 ≈ ?",o:["8,00,000","5,00,000","10,00,000","7,00,000"],a:0},
{t:"Estimate",q:"Round 87,45,321 to nearest lakh?",o:["87,00,000","88,00,000","87,45,000","87,50,000"],a:0},
{t:"Estimate",q:"Round 4,56,78,901 to nearest crore?",o:["5,00,00,000","4,00,00,000","4,57,00,000","4,50,00,000"],a:0},
{t:"Estimate",q:"1,00,00,000 − 1 = ?",o:["99,99,999","9,99,999","99,99,990","1,00,00,001"],a:0},
{t:"Estimate",q:"Round 34,56,789 to nearest lakh?",o:["35,00,000","34,00,000","34,57,000","35,50,000"],a:0},
{t:"Estimate",q:"Round 9,87,65,432 to nearest crore?",o:["10,00,00,000","9,00,00,000","9,90,00,000","9,88,00,000"],a:0},
{t:"Estimate",q:"Estimate 98 × 1,02,000 ≈ ?",o:["1,00,00,000","10,00,000","50,00,000","1,00,000"],a:0},
{t:"Estimate",q:"Estimate 4,95,000 + 5,05,000 ≈ ?",o:["10,00,000","5,00,000","15,00,000","8,00,000"],a:0},
{t:"Estimate",q:"Estimate 29,87,654 − 10,12,345 ≈ ?",o:["20,00,000","10,00,000","30,00,000","15,00,000"],a:0},
{t:"Estimate",q:"Round 56,78,901 to nearest ten-thousand?",o:["56,80,000","56,79,000","56,70,000","57,00,000"],a:0}
],
[
{t:"RealWorld",q:"Bank deposit ₹1 lakh/month × 12 = ?",o:["₹12 lakh","₹1.2 lakh","₹12,000","₹1.2 crore"],a:0},
{t:"RealWorld",q:"City area 500 km²; pop 10 lakh. Per km²?",o:["2,000","200","20,000","500"],a:0},
{t:"RealWorld",q:"25 crore households × ₹1 lakh = ?",o:["₹25 lakh crore","₹25 crore","₹2.5 lakh crore","₹250 crore"],a:0},
{t:"RealWorld",q:"₹1 crore split 500 prizes equally?",o:["₹20,000","₹2,000","₹2 lakh","₹50,000"],a:0},
{t:"RealWorld",q:"100 crore / 100 = ?",o:["1 crore","10 crore","1 lakh","10 lakh"],a:0},
{t:"RealWorld",q:"50 lakh bottles × ₹20 = revenue?",o:["₹10 crore","₹1 crore","₹50 lakh","₹5 crore"],a:0},
{t:"RealWorld",q:"2 crore tickets × ₹10 each = ?",o:["₹20 crore","₹2 crore","₹200 crore","₹20 lakh"],a:0},
{t:"RealWorld",q:"₹50 crore / 5 years = annual?",o:["₹10 crore","₹1 crore","₹50 crore","₹5 lakh"],a:0},
{t:"RealWorld",q:"500/hr × 24 × 30 = monthly?",o:["3,60,000","12,000","72,000","50,000"],a:0},
{t:"RealWorld",q:"1 arab km = ?",o:["1,00,00,00,000 km","10,00,00,000 km","1,00,00,000 km","10,00,000 km"],a:0}
]
]
},
// ─── Grade 7 · Chapter 2 · Arithmetic Expressions ───
2: { title:'Arithmetic Expressions',
beginner:[
[
{t:"Ops",q:"5 + 3 × 2 = ?",o:["11","16","10","13"],a:0},
{t:"Ops",q:"10 − 4 + 2 = ?",o:["8","4","12","6"],a:0},
{t:"Ops",q:"(5 + 3) × 2 = ?",o:["16","11","10","13"],a:0},
{t:"Ops",q:"20 ÷ 4 + 1 = ?",o:["6","5","4","21"],a:0},
{t:"Ops",q:"3 × (4 + 2) = ?",o:["18","14","10","24"],a:0},
{t:"Ops",q:"7 + 2 − 1 = ?",o:["8","9","10","7"],a:0},
{t:"Ops",q:"6 × 2 + 3 = ?",o:["15","30","12","21"],a:0},
{t:"Ops",q:"9 − 3 × 2 = ?",o:["3","12","6","15"],a:0},
{t:"Ops",q:"8 ÷ 2 × 3 = ?",o:["12","4","24","2"],a:0},
{t:"Ops",q:"5 + 5 + 5 = ?",o:["15","10","25","55"],a:0}
],
[
{t:"BODMAS",q:"Order: B, O, D, M, A, S stands for?",o:["Brackets, Of, ÷, ×, +, −","Brackets, Over, ×, ÷, +, −","Big, Over, ÷, Main, Add, Sub","Basic, Order, ÷, ×, +, −"],a:0},
{t:"BODMAS",q:"6 + 3 × 2 − 1 = ?",o:["11","13","10","9"],a:0},
{t:"BODMAS",q:"10 − (3 + 4) = ?",o:["3","11","17","−3"],a:0},
{t:"BODMAS",q:"12 ÷ 4 + 5 = ?",o:["8","4","2","3"],a:0},
{t:"BODMAS",q:"4 × 3 − 2 = ?",o:["10","4","8","14"],a:0},
{t:"BODMAS",q:"(8 + 2) ÷ 5 = ?",o:["2","4","10","5"],a:0},
{t:"BODMAS",q:"5 × (6 − 1) = ?",o:["25","29","5","30"],a:0},
{t:"BODMAS",q:"20 − 10 + 5 = ?",o:["15","5","10","25"],a:0},
{t:"BODMAS",q:"24 ÷ (8 − 2) = ?",o:["4","3","6","2"],a:0},
{t:"BODMAS",q:"7 × 2 + 3 × 2 = ?",o:["20","26","10","14"],a:0}
],
[
{t:"Brackets",q:"(3 + 4) + 2 = ?",o:["9","5","14","11"],a:0},
{t:"Brackets",q:"(5 × 2) + 3 = ?",o:["13","25","15","10"],a:0},
{t:"Brackets",q:"10 − (2 + 3) = ?",o:["5","15","11","−5"],a:0},
{t:"Brackets",q:"(6 + 2) × 3 = ?",o:["24","12","18","30"],a:0},
{t:"Brackets",q:"5 + (4 × 2) = ?",o:["13","18","12","16"],a:0},
{t:"Brackets",q:"(9 − 3) ÷ 2 = ?",o:["3","4","6","2"],a:0},
{t:"Brackets",q:"8 × (2 − 1) = ?",o:["8","16","24","0"],a:0},
{t:"Brackets",q:"(10 + 5) ÷ 3 = ?",o:["5","10","15","3"],a:0},
{t:"Brackets",q:"7 + (3 − 2) = ?",o:["8","6","10","12"],a:0},
{t:"Brackets",q:"(2 × 3) + (4 × 5) = ?",o:["26","14","30","20"],a:0}
],
[
{t:"Words",q:"Sum of 3 and 4?",o:["7","12","1","−1"],a:0},
{t:"Words",q:"Product of 5 and 2?",o:["10","7","3","25"],a:0},
{t:"Words",q:"Difference of 10 and 3?",o:["7","13","30","3.3"],a:0},
{t:"Words",q:"Quotient of 12 by 3?",o:["4","9","15","36"],a:0},
{t:"Words",q:"Twice of 6?",o:["12","8","36","3"],a:0},
{t:"Words",q:"Half of 10?",o:["5","20","10","2"],a:0},
{t:"Words",q:"Thrice of 4?",o:["12","7","1","16"],a:0},
{t:"Words",q:"5 more than 7?",o:["12","2","35","57"],a:0},
{t:"Words",q:"3 less than 10?",o:["7","13","30","3.3"],a:0},
{t:"Words",q:"Double 8 then add 2?",o:["18","10","16","64"],a:0}
],
[
{t:"EasyEq",q:"x + 3 = 7. x = ?",o:["4","10","21","3"],a:0},
{t:"EasyEq",q:"x − 2 = 5. x = ?",o:["7","3","10","25"],a:0},
{t:"EasyEq",q:"2x = 10. x = ?",o:["5","20","8","12"],a:0},
{t:"EasyEq",q:"x/2 = 4. x = ?",o:["8","2","6","16"],a:0},
{t:"EasyEq",q:"x + 5 = 12. x = ?",o:["7","17","5","2"],a:0},
{t:"EasyEq",q:"x − 4 = 6. x = ?",o:["10","2","24","−2"],a:0},
{t:"EasyEq",q:"3x = 9. x = ?",o:["3","27","6","12"],a:0},
{t:"EasyEq",q:"x/3 = 2. x = ?",o:["6","5","1","9"],a:0},
{t:"EasyEq",q:"x + 8 = 15. x = ?",o:["7","23","3","1"],a:0},
{t:"EasyEq",q:"4x = 20. x = ?",o:["5","80","16","24"],a:0}
]
],
pro:[
[
{t:"BODMAS+",q:"2 + 3 × 4 − 5 = ?",o:["9","15","10","4"],a:0},
{t:"BODMAS+",q:"20 − 4 × 3 + 2 = ?",o:["10","50","6","−2"],a:0},
{t:"BODMAS+",q:"(8 + 2) × 3 − 5 = ?",o:["25","15","0","30"],a:0},
{t:"BODMAS+",q:"30 ÷ 5 + 2 × 3 = ?",o:["12","15","21","24"],a:0},
{t:"BODMAS+",q:"4 × (6 − 2) + 1 = ?",o:["17","20","13","24"],a:0},
{t:"BODMAS+",q:"100 − 5 × 8 + 20 ÷ 4 = ?",o:["65","85","775","55"],a:0},
{t:"BODMAS+",q:"(10 − 3) × (4 + 1) = ?",o:["35","20","7","40"],a:0},
{t:"BODMAS+",q:"50 ÷ (2 + 3) × 2 = ?",o:["20","5","100","25"],a:0},
{t:"BODMAS+",q:"8 + 24 ÷ 6 − 2 = ?",o:["10","0","12","4"],a:0},
{t:"BODMAS+",q:"15 − 2 × (4 − 1) = ?",o:["9","39","0","15"],a:0}
],
[
{t:"Neg",q:"−5 + 3 = ?",o:["−2","−8","2","8"],a:0},
{t:"Neg",q:"5 + (−3) = ?",o:["2","8","−2","−8"],a:0},
{t:"Neg",q:"−2 × 3 = ?",o:["−6","6","−5","5"],a:0},
{t:"Neg",q:"(−4) × (−2) = ?",o:["8","−8","6","−2"],a:0},
{t:"Neg",q:"10 − (−5) = ?",o:["15","5","−15","−5"],a:0},
{t:"Neg",q:"−8 ÷ 2 = ?",o:["−4","4","−10","10"],a:0},
{t:"Neg",q:"−12 ÷ (−3) = ?",o:["4","−4","9","−9"],a:0},
{t:"Neg",q:"5 × (−2) + 3 = ?",o:["−7","−13","13","7"],a:0},
{t:"Neg",q:"20 − (−10) + 5 = ?",o:["35","15","25","5"],a:0},
{t:"Neg",q:"(−3)² = ?",o:["9","−9","6","−6"],a:0}
],
[
{t:"Word",q:"3 pens @ ₹5 + 2 books @ ₹10 = ?",o:["35","25","60","30"],a:0},
{t:"Word",q:"Double 6 and add 3?",o:["15","12","18","9"],a:0},
{t:"Word",q:"Triple 4 then subtract 2?",o:["10","14","6","8"],a:0},
{t:"Word",q:"Sum of 7 and 3 divided by 2?",o:["5","10","2","7"],a:0},
{t:"Word",q:"Area = L × B. 5 × 3 = ?",o:["15","8","53","10"],a:0},
{t:"Word",q:"10 books @ ₹20 + 5 @ ₹10 = ?",o:["₹250","₹300","₹150","₹200"],a:0},
{t:"Word",q:"Discount: 100 − 20 = ?",o:["80","120","200","60"],a:0},
{t:"Word",q:"Profit = SP − CP. SP=100, CP=70?",o:["30","170","−30","100"],a:0},
{t:"Word",q:"Total of 15, 25, 35?",o:["75","80","60","90"],a:0},
{t:"Word",q:"Average of 10 and 20?",o:["15","30","10","5"],a:0}
],
[
{t:"Vars",q:"If x = 3, 2x + 1 = ?",o:["7","6","8","9"],a:0},
{t:"Vars",q:"If y = 4, y² = ?",o:["16","8","24","12"],a:0},
{t:"Vars",q:"If a = 5, 3a − 2 = ?",o:["13","15","17","8"],a:0},
{t:"Vars",q:"If x=2, y=3, x + y = ?",o:["5","6","23","1"],a:0},
{t:"Vars",q:"If x=2, y=4, xy = ?",o:["8","6","24","2"],a:0},
{t:"Vars",q:"Cost of n pens @ ₹5?",o:["5n","n/5","n+5","5/n"],a:0},
{t:"Vars",q:"Rectangle L=3, B=2, Perimeter?",o:["10","6","5","12"],a:0},
{t:"Vars",q:"If x=5, (x+1)(x−1) = ?",o:["24","25","26","35"],a:0},
{t:"Vars",q:"If x=0, 3x + 7 = ?",o:["7","0","10","3"],a:0},
{t:"Vars",q:"If x = −1, 2x + 3 = ?",o:["1","−1","5","2"],a:0}
],
[
{t:"Identities",q:"a + b = b + a holds for?",o:["Addition (commutative)","Subtraction only","Division only","Never"],a:0},
{t:"Identities",q:"a × b = b × a holds for?",o:["Multiplication (commutative)","Division","Never","Only integers"],a:0},
{t:"Identities",q:"Is a − b = b − a?",o:["No","Yes","Sometimes","Only for 0"],a:0},
{t:"Identities",q:"a + 0 = ?",o:["a","0","−a","1"],a:0},
{t:"Identities",q:"a × 1 = ?",o:["a","1","0","a²"],a:0},
{t:"Identities",q:"a × 0 = ?",o:["0","a","1","−a"],a:0},
{t:"Identities",q:"(a+b)+c = a+(b+c) — property?",o:["Associative","Commutative","Distributive","Identity"],a:0},
{t:"Identities",q:"a(b+c) = ?",o:["ab + ac","a+b+c","a+bc","abc"],a:0},
{t:"Identities",q:"(−1) × a = ?",o:["−a","a","0","1"],a:0},
{t:"Identities",q:"a − a = ?",o:["0","1","a","2a"],a:0}
]
]
}},

// ═══════════════════════════════════════════════════════════════
// GRADE 8 · Chapter 1 · Rational Numbers
// ═══════════════════════════════════════════════════════════════
8: { 1: { title:'Rational Numbers',
beginner:[
[
{t:"Identify",q:"Is 1/2 a rational number?",o:["Yes","No","Sometimes","Only positive"],a:0},
{t:"Identify",q:"Is 0 a rational number?",o:["Yes","No","Only as 0/1","Undefined"],a:0},
{t:"Identify",q:"Is −3/7 rational?",o:["Yes","No","Only positives count","Cannot say"],a:0},
{t:"Identify",q:"Is √2 rational?",o:["No","Yes","Sometimes","Only if squared"],a:0},
{t:"Identify",q:"p/q is rational when q ≠ ?",o:["0","1","p","−1"],a:0},
{t:"Identify",q:"Rationals are denoted by?",o:["Q","R","N","Z"],a:0},
{t:"Identify",q:"Is every integer a rational?",o:["Yes","No","Only positives","Only if > 0"],a:0},
{t:"Identify",q:"Is every natural number rational?",o:["Yes","No","Only some","Only primes"],a:0},
{t:"Identify",q:"1/2 in decimal?",o:["0.5","0.2","0.25","0.1"],a:0},
{t:"Identify",q:"Is 22/7 exactly equal to π?",o:["No","Yes","Only in school","Only if rounded"],a:0}
],
[
{t:"Add",q:"1/2 + 1/2 = ?",o:["1","2","1/4","3/4"],a:0},
{t:"Add",q:"1/3 + 1/3 = ?",o:["2/3","1/6","2/6 only","1"],a:0},
{t:"Add",q:"1/4 + 1/2 = ?",o:["3/4","2/6","1/6","1/8"],a:0},
{t:"Add",q:"2/3 + 1/6 = ?",o:["5/6","3/9","1","3/6"],a:0},
{t:"Add",q:"3/4 + 1/8 = ?",o:["7/8","4/12","5/8","4/8"],a:0},
{t:"Add",q:"−1/2 + 1/2 = ?",o:["0","1","−1","1/4"],a:0},
{t:"Add",q:"1/5 + 2/5 = ?",o:["3/5","2/10","3/10","2/25"],a:0},
{t:"Add",q:"−2/5 + 3/5 = ?",o:["1/5","−1/5","5/5","1"],a:0},
{t:"Add",q:"1/4 + 1/4 = ?",o:["1/2","2/8 only","1/8","2/4 only"],a:0},
{t:"Add",q:"3/7 + 2/7 = ?",o:["5/7","5/14","1","6/49"],a:0}
],
[
{t:"Sub",q:"3/5 − 1/5 = ?",o:["2/5","4/5","1/5","2/10"],a:0},
{t:"Sub",q:"5/6 − 1/3 = ?",o:["1/2","4/3","1/3","2/3"],a:0},
{t:"Sub",q:"1 − 1/2 = ?",o:["1/2","3/2","0","1"],a:0},
{t:"Sub",q:"1/2 − 1/3 = ?",o:["1/6","2/6","1/3","5/6"],a:0},
{t:"Sub",q:"2/3 − 1/6 = ?",o:["1/2","1/3","1/6","5/6"],a:0},
{t:"Sub",q:"3/4 − 1/4 = ?",o:["1/2","2/4 only","1/4","3/8"],a:0},
{t:"Sub",q:"7/8 − 3/8 = ?",o:["1/2","4/8 only","5/8","3/8"],a:0},
{t:"Sub",q:"9/10 − 1/10 = ?",o:["4/5","8/10 only","8/20","1/10"],a:0},
{t:"Sub",q:"5/6 − 2/3 = ?",o:["1/6","3/6","1/3","3/3"],a:0},
{t:"Sub",q:"1/2 + (−1/3) = ?",o:["1/6","−1/6","5/6","2/5"],a:0}
],
[
{t:"Decimal",q:"1/2 = ?",o:["0.5","0.2","0.25","0.1"],a:0},
{t:"Decimal",q:"1/4 = ?",o:["0.25","0.5","0.4","0.14"],a:0},
{t:"Decimal",q:"3/4 = ?",o:["0.75","0.34","0.25","0.43"],a:0},
{t:"Decimal",q:"1/5 = ?",o:["0.2","0.5","0.15","0.25"],a:0},
{t:"Decimal",q:"1/10 = ?",o:["0.1","0.01","0.10","0.001"],a:0},
{t:"Decimal",q:"0.5 as fraction?",o:["1/2","5/10 only","1/5","2/5"],a:0},
{t:"Decimal",q:"0.25 as fraction?",o:["1/4","25/100 only","1/25","2/5"],a:0},
{t:"Decimal",q:"0.75 as fraction?",o:["3/4","75/100 only","7/5","3/40"],a:0},
{t:"Decimal",q:"1/3 ≈ ?",o:["0.333...","0.3","0.13","0.03"],a:0},
{t:"Decimal",q:"0.2 as fraction?",o:["1/5","2/5","1/2","2/10 only"],a:0}
],
[
{t:"Compare",q:"Greater: 1/2 or 1/3?",o:["1/2","1/3","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Smaller: 2/3 or 3/4?",o:["2/3","3/4","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Greater: −1/2 or −1/3?",o:["−1/3","−1/2","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Ascending: 1/2, 1/4, 3/4?",o:["1/4, 1/2, 3/4","3/4, 1/2, 1/4","1/2, 1/4, 3/4","1/4, 3/4, 1/2"],a:0},
{t:"Compare",q:"Is 5/6 > 4/6?",o:["Yes","No","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Is −1/2 < 0?",o:["Yes","No","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Greater: 7/10 or 3/5?",o:["7/10","3/5","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Descending: 2/3, 1/3, 4/3?",o:["4/3, 2/3, 1/3","1/3, 2/3, 4/3","4/3, 1/3, 2/3","Equal"],a:0},
{t:"Compare",q:"Is 0 rational AND an integer?",o:["Yes, both","Only rational","Only integer","Neither"],a:0},
{t:"Compare",q:"Is 2/4 = 1/2?",o:["Yes","No","Only approximately","Cannot tell"],a:0}
]
],
pro:[
[
{t:"Multiply",q:"(2/3) × (3/4) = ?",o:["1/2","6/12 only","2/4","3/2"],a:0},
{t:"Multiply",q:"(1/2) × (1/4) = ?",o:["1/8","2/8","1/6","1/16"],a:0},
{t:"Multiply",q:"(3/5) × (5/6) = ?",o:["1/2","15/30 only","3/6","8/11"],a:0},
{t:"Multiply",q:"(2/3) × 6 = ?",o:["4","12/3","6","8/3"],a:0},
{t:"Multiply",q:"(7/9) × (3/14) = ?",o:["1/6","21/126","1/3","3/14"],a:0},
{t:"Multiply",q:"(−3/5) × (5/6) = ?",o:["−1/2","1/2","−15/30","−3/6"],a:0},
{t:"Multiply",q:"(−1/2) × (−4) = ?",o:["2","−2","−1/8","1/2"],a:0},
{t:"Multiply",q:"0 × (5/7) = ?",o:["0","5/7","7/5","1"],a:0},
{t:"Multiply",q:"(4/5) × (5/4) = ?",o:["1","16/25","0","5/4"],a:0},
{t:"Multiply",q:"(2/3) × 0 = ?",o:["0","2/3","3/2","1"],a:0}
],
[
{t:"Divide",q:"(1/2) ÷ (1/4) = ?",o:["2","1/8","1/2","4"],a:0},
{t:"Divide",q:"(1/3) ÷ (2/9) = ?",o:["3/2","2/27","9/6","1/6"],a:0},
{t:"Divide",q:"(2/5) ÷ (4/10) = ?",o:["1","2/5","4/10","1/2"],a:0},
{t:"Divide",q:"(3/4) ÷ (3/4) = ?",o:["1","9/16","3/4","0"],a:0},
{t:"Divide",q:"(1/2) ÷ 2 = ?",o:["1/4","1","1/2","2"],a:0},
{t:"Divide",q:"(−1/2) ÷ (1/2) = ?",o:["−1","1","−1/4","0"],a:0},
{t:"Divide",q:"(5/6) ÷ 5 = ?",o:["1/6","25/6","5","1"],a:0},
{t:"Divide",q:"6 ÷ (2/3) = ?",o:["9","4","3","12"],a:0},
{t:"Divide",q:"(2/3) ÷ (1/3) = ?",o:["2","2/9","1/3","6"],a:0},
{t:"Divide",q:"(1/5) ÷ (1/10) = ?",o:["2","1/50","1/2","5"],a:0}
],
[
{t:"Inverse",q:"Reciprocal of 3/5?",o:["5/3","−3/5","3/−5","15"],a:0},
{t:"Inverse",q:"Reciprocal of 7?",o:["1/7","−7","7","49"],a:0},
{t:"Inverse",q:"Multiplicative inverse of −5/7?",o:["−7/5","7/5","5/7","−5/7"],a:0},
{t:"Inverse",q:"Additive inverse of 2/3?",o:["−2/3","3/2","2/−3","0"],a:0},
{t:"Inverse",q:"Additive inverse of 0?",o:["0","1","Undefined","−1"],a:0},
{t:"Inverse",q:"Reciprocal of 1?",o:["1","−1","0","Undefined"],a:0},
{t:"Inverse",q:"Reciprocal of −1?",o:["−1","1","0","Undefined"],a:0},
{t:"Inverse",q:"Reciprocal of 1/2?",o:["2","1/2","−1/2","0"],a:0},
{t:"Inverse",q:"Does 0 have a reciprocal?",o:["No","Yes","Only in Q","Only if integer"],a:0},
{t:"Inverse",q:"Sum: rational + its additive inverse = ?",o:["0","1","The same rational","Undefined"],a:0}
],
[
{t:"Props",q:"Is addition of rationals commutative?",o:["Yes","No","Only for positives","Only in Z"],a:0},
{t:"Props",q:"Is subtraction commutative?",o:["No","Yes","Only if equal","Sometimes"],a:0},
{t:"Props",q:"Multiplicative identity?",o:["1","0","−1","∞"],a:0},
{t:"Props",q:"Additive identity?",o:["0","1","−1","Q"],a:0},
{t:"Props",q:"Is multiplication associative?",o:["Yes","No","Only with primes","Sometimes"],a:0},
{t:"Props",q:"Is division associative?",o:["No","Yes","Only if equal","Sometimes"],a:0},
{t:"Props",q:"(a+b)+c = a+(b+c)?",o:["Yes (associative)","No","Only commutative","Never"],a:0},
{t:"Props",q:"a × 0 = ?",o:["0","a","1","Undefined"],a:0},
{t:"Props",q:"a × 1 = ?",o:["a","1","0","a²"],a:0},
{t:"Props",q:"a + 0 = ?",o:["a","0","1","2a"],a:0}
],
[
{t:"Word",q:"3/4 of a cake eaten. Left?",o:["1/4","3/4","1/3","1/2"],a:0},
{t:"Word",q:"2 1/2 kg + 1 3/4 kg = ?",o:["4 1/4 kg","3 3/4 kg","4 kg","4 1/2 kg"],a:0},
{t:"Word",q:"1/2 of 40 = ?",o:["20","40","10","30"],a:0},
{t:"Word",q:"3/4 of 100 = ?",o:["75","25","50","100"],a:0},
{t:"Word",q:"Rational between 1/2 and 3/4?",o:["5/8","1","1/3","2"],a:0},
{t:"Word",q:"Average of 1/2 and 1/4?",o:["3/8","1/6","1/3","1/8"],a:0},
{t:"Word",q:"1/3 of class = 10 kids. Total?",o:["30","13","20","40"],a:0},
{t:"Word",q:"Walk 3/4 km + Run 1/2 km = ?",o:["5/4 km","1/4 km","3/8 km","1 km"],a:0},
{t:"Word",q:"Bag 2 3/4 kg + bag 1 1/4 kg = ?",o:["4 kg","3 kg","4 1/2 kg","3 1/2 kg"],a:0},
{t:"Word",q:"Pizza 1/8 per slice; eat 3. Eaten?",o:["3/8","1/8","3/24","2/8"],a:0}
]
]
},
// ─── Grade 8 · Chapter 2 · Linear Equations in One Variable ───
2: { title:'Linear Equations in One Variable',
beginner:[
[
{t:"ID",q:"Which IS an equation: 2x + 3, or 2x + 3 = 5?",o:["2x + 3 = 5","2x + 3","Both","Neither"],a:0},
{t:"ID",q:"An equation must have?",o:["An equal sign","A variable","A constant","A bracket"],a:0},
{t:"ID",q:"'Solve' an equation means?",o:["Find the variable value","Simplify only","Write bigger","Check units"],a:0},
{t:"ID",q:"Variable is usually denoted by?",o:["Letters (x, y)","Only numbers","Only +","Only ="],a:0},
{t:"ID",q:"A constant is?",o:["A fixed number","A variable","An operator","A unit"],a:0},
{t:"ID",q:"Coefficient in 3x?",o:["3","x","3x","1"],a:0},
{t:"ID",q:"In 5y − 2 = 8, constant on LHS?",o:["−2","5","8","y"],a:0},
{t:"ID",q:"LHS / RHS stand for?",o:["Left/Right Hand Side","Long/Right","Left/Round","Low/High"],a:0},
{t:"ID",q:"Balanced equation means?",o:["LHS = RHS","LHS > RHS","LHS < RHS","Either side"],a:0},
{t:"ID",q:"Linear equation: variable is to the power?",o:["1","0","2","3"],a:0}
],
[
{t:"Simple",q:"x + 5 = 10. x = ?",o:["5","15","2","50"],a:0},
{t:"Simple",q:"x − 3 = 7. x = ?",o:["10","4","21","−10"],a:0},
{t:"Simple",q:"2x = 14. x = ?",o:["7","12","28","16"],a:0},
{t:"Simple",q:"x/4 = 3. x = ?",o:["12","7","1","0.75"],a:0},
{t:"Simple",q:"x + 2 = 2. x = ?",o:["0","2","4","−2"],a:0},
{t:"Simple",q:"x − 5 = 0. x = ?",o:["5","−5","0","10"],a:0},
{t:"Simple",q:"3x = 0. x = ?",o:["0","3","1","−3"],a:0},
{t:"Simple",q:"10 − x = 3. x = ?",o:["7","13","−7","3"],a:0},
{t:"Simple",q:"x + 7 = 7. x = ?",o:["0","14","7","−7"],a:0},
{t:"Simple",q:"2x + 1 = 9. x = ?",o:["4","5","8","10"],a:0}
],
[
{t:"Steps",q:"3x + 2 = 11. x = ?",o:["3","4","2","9"],a:0},
{t:"Steps",q:"2x − 5 = 7. x = ?",o:["6","1","12","2"],a:0},
{t:"Steps",q:"5x = 25. x = ?",o:["5","20","30","25"],a:0},
{t:"Steps",q:"x/3 + 2 = 5. x = ?",o:["9","15","1","3"],a:0},
{t:"Steps",q:"4x − 4 = 0. x = ?",o:["1","−1","4","0"],a:0},
{t:"Steps",q:"6x = 18. x = ?",o:["3","12","24","2"],a:0},
{t:"Steps",q:"3x + 6 = 15. x = ?",o:["3","5","9","21"],a:0},
{t:"Steps",q:"2x − 10 = 4. x = ?",o:["7","3","14","−3"],a:0},
{t:"Steps",q:"x + 3x = 20. x = ?",o:["5","4","20","1"],a:0},
{t:"Steps",q:"x − 2x = −5. x = ?",o:["5","−5","10","0"],a:0}
],
[
{t:"Transp",q:"x + 5 = 12. x = ?",o:["7","17","5","12"],a:0},
{t:"Transp",q:"x − 3 = 10. x = ?",o:["13","7","30","3"],a:0},
{t:"Transp",q:"3x = 15. x = ?",o:["5","45","18","12"],a:0},
{t:"Transp",q:"x/2 = 4. x = ?",o:["8","2","6","4"],a:0},
{t:"Transp",q:"2x + 3 = 11. x = ?",o:["4","7","5","8"],a:0},
{t:"Transp",q:"4x − 5 = 11. x = ?",o:["4","2","6","3"],a:0},
{t:"Transp",q:"x + x = 10. x = ?",o:["5","10","0","20"],a:0},
{t:"Transp",q:"3x − x = 8. x = ?",o:["4","2","8","6"],a:0},
{t:"Transp",q:"5x = 10. x = ?",o:["2","50","15","5"],a:0},
{t:"Transp",q:"−3x = 12. x = ?",o:["−4","4","−9","9"],a:0}
],
[
{t:"BothSides",q:"2x + 3 = x + 8. x = ?",o:["5","11","−5","1"],a:0},
{t:"BothSides",q:"3x − 2 = 2x + 3. x = ?",o:["5","1","−5","25"],a:0},
{t:"BothSides",q:"5x = 3x + 10. x = ?",o:["5","2","10","15"],a:0},
{t:"BothSides",q:"4x − 1 = 3x + 2. x = ?",o:["3","1","−3","4"],a:0},
{t:"BothSides",q:"2x + 5 = x + 9. x = ?",o:["4","14","−4","2"],a:0},
{t:"BothSides",q:"7x = 5x + 12. x = ?",o:["6","2","12","7"],a:0},
{t:"BothSides",q:"3x − 2 = x + 4. x = ?",o:["3","6","2","−3"],a:0},
{t:"BothSides",q:"x + 8 = 2x + 3. x = ?",o:["5","11","−5","2"],a:0},
{t:"BothSides",q:"5x − 3 = 2x + 6. x = ?",o:["3","9","1","−3"],a:0},
{t:"BothSides",q:"4x + 2 = 3x + 6. x = ?",o:["4","8","2","1"],a:0}
]
],
pro:[
[
{t:"Word",q:"Two numbers sum = 10. Larger − smaller = 4. Larger?",o:["7","3","5","6"],a:0},
{t:"Word",q:"Son = half of father (40). Son?",o:["20","10","40","15"],a:0},
{t:"Word",q:"Square perimeter = 20 m. Side?",o:["5 m","10 m","4 m","2 m"],a:0},
{t:"Word",q:"3 pens cost ₹60. Each?",o:["₹20","₹30","₹10","₹15"],a:0},
{t:"Word",q:"Number + 5 = 17. Number?",o:["12","22","13","10"],a:0},
{t:"Word",q:"3 × number + 2 = 17. Number?",o:["5","6","4","15"],a:0},
{t:"Word",q:"Twice a number = 16. Number?",o:["8","4","16","32"],a:0},
{t:"Word",q:"4 × number = 20. Number?",o:["5","16","4","24"],a:0},
{t:"Word",q:"15 − number = 6. Number?",o:["9","21","6","3"],a:0},
{t:"Word",q:"Half of a number = 8. Number?",o:["16","4","8","2"],a:0}
],
[
{t:"Frac",q:"x/2 + x/3 = 5. x = ?",o:["6","5","30","10"],a:0},
{t:"Frac",q:"x/4 = 3. x = ?",o:["12","7","4","3"],a:0},
{t:"Frac",q:"2x/5 = 4. x = ?",o:["10","4","8","2"],a:0},
{t:"Frac",q:"x − x/2 = 3. x = ?",o:["6","3","12","1"],a:0},
{t:"Frac",q:"(x + 1)/2 = 4. x = ?",o:["7","9","3","5"],a:0},
{t:"Frac",q:"3x/4 = 6. x = ?",o:["8","2","12","4"],a:0},
{t:"Frac",q:"x/5 + 1 = 3. x = ?",o:["10","2","4","5"],a:0},
{t:"Frac",q:"x/2 + x/4 = 6. x = ?",o:["8","4","12","6"],a:0},
{t:"Frac",q:"(2x − 3)/5 = 1. x = ?",o:["4","2","8","5"],a:0},
{t:"Frac",q:"x/3 = x/6 + 1. x = ?",o:["6","2","3","12"],a:0}
],
[
{t:"Multi",q:"2(x + 3) = 10. x = ?",o:["2","4","5","10"],a:0},
{t:"Multi",q:"3(x − 1) = 9. x = ?",o:["4","3","10","2"],a:0},
{t:"Multi",q:"5(x + 2) = 25. x = ?",o:["3","5","7","23"],a:0},
{t:"Multi",q:"2(3x − 1) = 16. x = ?",o:["3","5","8","2"],a:0},
{t:"Multi",q:"4(x + 1) = 3(x + 3). x = ?",o:["5","4","1","7"],a:0},
{t:"Multi",q:"2(x − 3) = 3(x − 5). x = ?",o:["9","3","5","−3"],a:0},
{t:"Multi",q:"(x+1)+(x+2)+(x+3) = 15. x = ?",o:["3","5","15","4"],a:0},
{t:"Multi",q:"3(x + 2) = 15. x = ?",o:["3","5","9","15"],a:0},
{t:"Multi",q:"7(x − 2) = 21. x = ?",o:["5","3","14","9"],a:0},
{t:"Multi",q:"2(x + 4) = 12. x = ?",o:["2","8","4","6"],a:0}
],
[
{t:"Apply",q:"Rectangle perimeter 30; L = 2 × B. L = ?",o:["10","5","15","8"],a:0},
{t:"Apply",q:"3 consecutive integers sum = 18. Middle?",o:["6","5","7","18"],a:0},
{t:"Apply",q:"5 books @ ₹15 + 5 pens = ₹100. Each pen?",o:["₹5","₹15","₹20","₹10"],a:0},
{t:"Apply",q:"Son = 1/4 of father (40). Son?",o:["10","14","20","8"],a:0},
{t:"Apply",q:"Two numbers differ by 5, sum 21. Larger?",o:["13","8","16","11"],a:0},
{t:"Apply",q:"1/3 of number = 8. Number?",o:["24","11","8","3"],a:0},
{t:"Apply",q:"5 years from now age = 20. Now?",o:["15","25","5","20"],a:0},
{t:"Apply",q:"Boys = 2 × girls; total 30. Girls?",o:["10","20","30","15"],a:0},
{t:"Apply",q:"4 items = ₹60. Each?",o:["₹15","₹240","₹4","₹56"],a:0},
{t:"Apply",q:"5 less than twice a number is 9. Number?",o:["7","2","5","9"],a:0}
],
[
{t:"Adv",q:"3x + 5 = 2x + 10. x = ?",o:["5","15","−5","1"],a:0},
{t:"Adv",q:"5(x − 1) = 3(x + 1). x = ?",o:["4","1","5","8"],a:0},
{t:"Adv",q:"x + 3 = 2x. x = ?",o:["3","−3","1","6"],a:0},
{t:"Adv",q:"2x/3 = 4. x = ?",o:["6","3","2","12"],a:0},
{t:"Adv",q:"(x + 1)/(x − 1) = 2. x = ?",o:["3","1","−3","5"],a:0},
{t:"Adv",q:"x + (x+1) = 11. x = ?",o:["5","6","4","10"],a:0},
{t:"Adv",q:"3(x + 4) − 5 = 22. x = ?",o:["5","3","11","7"],a:0},
{t:"Adv",q:"Sum of 3 consecutive evens = 36. Middle?",o:["12","10","14","6"],a:0},
{t:"Adv",q:"4x − 7 = 2x + 5. x = ?",o:["6","1","−6","3"],a:0},
{t:"Adv",q:"x/2 + 3 = x/3 + 4. x = ?",o:["6","3","12","1"],a:0}
]
]
}},

// ═══════════════════════════════════════════════════════════════
// GRADE 9 · Chapter 1 · Number Systems
// ═══════════════════════════════════════════════════════════════
9: { 1: { title:'Number Systems',
beginner:[
[
{t:"Classify",q:"Natural numbers start from?",o:["1","0","−1","Any number"],a:0},
{t:"Classify",q:"Whole numbers add ___ to the naturals.",o:["0","−1","1/2","Infinity"],a:0},
{t:"Classify",q:"Integers include?",o:["Neg, pos, zero","Only positives","Only zero","Only fractions"],a:0},
{t:"Classify",q:"Is −5 a natural number?",o:["No","Yes","Only in Z","Only if |−5|"],a:0},
{t:"Classify",q:"Is 0 a whole number?",o:["Yes","No","Only in N","Undefined"],a:0},
{t:"Classify",q:"1/2 belongs to which set?",o:["Rational","Natural","Integer","Irrational"],a:0},
{t:"Classify",q:"Is √2 rational?",o:["No","Yes","Sometimes","Only if squared"],a:0},
{t:"Classify",q:"Are all rationals real?",o:["Yes","No","Only positives","Only integers"],a:0},
{t:"Classify",q:"Is every integer rational?",o:["Yes","No","Only positives","Only primes"],a:0},
{t:"Classify",q:"Is every whole number an integer?",o:["Yes","No","Only evens","Only primes"],a:0}
],
[
{t:"RatIrr",q:"0.5 is?",o:["Rational","Irrational","Natural","Neither"],a:0},
{t:"RatIrr",q:"0.333... (repeating) is?",o:["Rational (=1/3)","Irrational","Natural","Whole"],a:0},
{t:"RatIrr",q:"1.414213... (non-repeating) is?",o:["Irrational","Rational","Integer","Natural"],a:0},
{t:"RatIrr",q:"Decimal form of rationals is?",o:["Terminating or recurring","Always terminating","Never terminating","Never recurring"],a:0},
{t:"RatIrr",q:"Decimal form of irrationals is?",o:["Non-terminating, non-repeating","Always terminating","Always repeating","Always whole"],a:0},
{t:"RatIrr",q:"√9 = ?",o:["3","9","±3","4.5"],a:0},
{t:"RatIrr",q:"Which is irrational?",o:["√2","√4","√9","√16"],a:0},
{t:"RatIrr",q:"Is √25 irrational?",o:["No (=5)","Yes","Only 1 root","Undefined"],a:0},
{t:"RatIrr",q:"0.1010010001... (patterned non-repeating) is?",o:["Irrational","Rational","Natural","Integer"],a:0},
{t:"RatIrr",q:"All real numbers are rational or?",o:["Irrational","Complex","Imaginary","Negative"],a:0}
],
[
{t:"Decimals",q:"1/2 decimal?",o:["0.5","0.2","0.25","0.1"],a:0},
{t:"Decimals",q:"1/3 decimal?",o:["0.333...","0.3","0.33","0.03"],a:0},
{t:"Decimals",q:"1/4 decimal?",o:["0.25","0.5","0.4","0.14"],a:0},
{t:"Decimals",q:"1/8 decimal?",o:["0.125","0.18","0.12","0.08"],a:0},
{t:"Decimals",q:"1/10 decimal?",o:["0.1","0.01","0.10","0.001"],a:0},
{t:"Decimals",q:"Is 1/7 terminating?",o:["No","Yes","Only approximately","Only in some cases"],a:0},
{t:"Decimals",q:"1/5 decimal?",o:["0.2","0.15","0.5","0.05"],a:0},
{t:"Decimals",q:"Is 3/4 terminating?",o:["Yes","No","Only approximately","Only sometimes"],a:0},
{t:"Decimals",q:"1/6 decimal?",o:["0.1666...","0.16","0.17","0.6"],a:0},
{t:"Decimals",q:"Is 5/6 terminating?",o:["No","Yes","Only approximately","Only sometimes"],a:0}
],
[
{t:"Roots",q:"√16?",o:["4","8","16","2"],a:0},
{t:"Roots",q:"√49?",o:["7","6","8","49"],a:0},
{t:"Roots",q:"√100?",o:["10","50","100","20"],a:0},
{t:"Roots",q:"√144?",o:["12","10","14","72"],a:0},
{t:"Roots",q:"√0?",o:["0","1","Undefined","Any"],a:0},
{t:"Roots",q:"√1?",o:["1","0","±1","−1"],a:0},
{t:"Roots",q:"√81?",o:["9","8","81","18"],a:0},
{t:"Roots",q:"√64?",o:["8","6","64","16"],a:0},
{t:"Roots",q:"√121?",o:["11","12","10","121"],a:0},
{t:"Roots",q:"(√a)²?",o:["a","√a","a²","Undefined"],a:0}
],
[
{t:"Props",q:"Rationals closed under +?",o:["Yes","No","Only positives","Only primes"],a:0},
{t:"Props",q:"Irrationals closed under +?",o:["No","Yes","Only if equal","Always"],a:0},
{t:"Props",q:"Is π rational?",o:["No","Yes","Only approximately","Only as 22/7"],a:0},
{t:"Props",q:"0 + 1/2 = ?",o:["1/2","0","1","3/2"],a:0},
{t:"Props",q:"1 × √2 = ?",o:["√2","1","2","√3"],a:0},
{t:"Props",q:"Is √2 a real number?",o:["Yes","No","Only approximately","Only in Z"],a:0},
{t:"Props",q:"Is N ⊂ Q?",o:["Yes","No","Only finitely","Sometimes"],a:0},
{t:"Props",q:"Is Q ⊂ R?",o:["Yes","No","Only integers","Sometimes"],a:0},
{t:"Props",q:"Are irrationals ⊂ R?",o:["Yes","No","Only finitely","Sometimes"],a:0},
{t:"Props",q:"2 + √3 is?",o:["Irrational","Rational","Integer","Natural"],a:0}
]
],
pro:[
[
{t:"Surds",q:"√12 = ?",o:["2√3","3√2","6","4√3"],a:0},
{t:"Surds",q:"√8 = ?",o:["2√2","4√2","√8","2"],a:0},
{t:"Surds",q:"√18 = ?",o:["3√2","2√3","6","9√2"],a:0},
{t:"Surds",q:"√50 = ?",o:["5√2","10√5","√50","25√2"],a:0},
{t:"Surds",q:"√75 = ?",o:["5√3","3√5","15","25√3"],a:0},
{t:"Surds",q:"√45 = ?",o:["3√5","5√3","15","9√5"],a:0},
{t:"Surds",q:"√20 = ?",o:["2√5","5√2","10","4√5"],a:0},
{t:"Surds",q:"√32 = ?",o:["4√2","2√4","16","8√2"],a:0},
{t:"Surds",q:"√200 = ?",o:["10√2","2√10","20","100√2"],a:0},
{t:"Surds",q:"√27 = ?",o:["3√3","9√3","√27","27"],a:0}
],
[
{t:"SurdOps",q:"√3 × √12 = ?",o:["6","√36","√15","36"],a:0},
{t:"SurdOps",q:"(√2 + √3)² = ?",o:["5 + 2√6","5","2√6","6 + √5"],a:0},
{t:"SurdOps",q:"(√5 − √2)(√5 + √2) = ?",o:["3","7","√10","25 − 2"],a:0},
{t:"SurdOps",q:"(√7)² = ?",o:["7","49","14","√49"],a:0},
{t:"SurdOps",q:"√18 ÷ √2 = ?",o:["3","9","√9","6"],a:0},
{t:"SurdOps",q:"Sum of two irrationals — always irrational?",o:["No (e.g. √2 + (−√2))","Yes","Only positives","Sometimes"],a:0},
{t:"SurdOps",q:"Non-zero rational × irrational = ?",o:["Irrational","Rational","Zero","Natural"],a:0},
{t:"SurdOps",q:"Rational + irrational = ?",o:["Irrational","Rational","Zero","Natural"],a:0},
{t:"SurdOps",q:"(2√3)² = ?",o:["12","6","4√3","18"],a:0},
{t:"SurdOps",q:"√2 × √8 = ?",o:["4","2","16","√10"],a:0}
],
[
{t:"Ration",q:"Rationalize 1/√2?",o:["√2/2","2/√2","1/2","√2/1"],a:0},
{t:"Ration",q:"Rationalize 1/√3?",o:["√3/3","3/√3","1/3","√3"],a:0},
{t:"Ration",q:"Rationalize 1/(√3 − 1)?",o:["(√3+1)/2","(√3−1)/2","√3+1","2(√3+1)"],a:0},
{t:"Ration",q:"Rationalize 2/√5?",o:["2√5/5","5/2√5","√5","2/5"],a:0},
{t:"Ration",q:"Rationalize 1/(√2+1)?",o:["√2−1","√2+1","1/(√2−1)","1/(√2+1)"],a:0},
{t:"Ration",q:"Rationalize 3/√2?",o:["3√2/2","2/3√2","√6","3/2"],a:0},
{t:"Ration",q:"Rationalize 1/(3+√2)?",o:["(3−√2)/7","(3+√2)/7","3−√2","(3−√2)/11"],a:0},
{t:"Ration",q:"Rationalize 5/√7?",o:["5√7/7","7/5√7","√35","5/7"],a:0},
{t:"Ration",q:"Rationalize √3/√5?",o:["√15/5","5/√15","√15","3/5"],a:0},
{t:"Ration",q:"Conjugate of √a + √b?",o:["√a − √b","√a + √b","−√a − √b","√a · √b"],a:0}
],
[
{t:"Exp",q:"aᵐ × aⁿ = ?",o:["a^(m+n)","a^(mn)","a^(m−n)","a^m + a^n"],a:0},
{t:"Exp",q:"aᵐ ÷ aⁿ = ?",o:["a^(m−n)","a^(m/n)","a^(mn)","a^(m+n)"],a:0},
{t:"Exp",q:"(aᵐ)ⁿ = ?",o:["a^(mn)","a^(m+n)","a^(m−n)","a^m·n"],a:0},
{t:"Exp",q:"a⁰ (a ≠ 0) = ?",o:["1","0","a","Undefined"],a:0},
{t:"Exp",q:"2³ × 2² = ?",o:["32","16","64","10"],a:0},
{t:"Exp",q:"5⁴ ÷ 5² = ?",o:["25","625","10","20"],a:0},
{t:"Exp",q:"(3²)³ = ?",o:["729","243","27","81"],a:0},
{t:"Exp",q:"a^(1/2) × a^(1/2) = ?",o:["a","a²","√a","1"],a:0},
{t:"Exp",q:"(√2)⁴ = ?",o:["4","2","8","16"],a:0},
{t:"Exp",q:"2⁵ = ?",o:["32","16","64","25"],a:0}
],
[
{t:"Compute",q:"√2 + √2 = ?",o:["2√2","√4","2","4"],a:0},
{t:"Compute",q:"3√2 + 2√2 = ?",o:["5√2","6√2","√10","5"],a:0},
{t:"Compute",q:"√2 − √2 = ?",o:["0","√0","√4","2"],a:0},
{t:"Compute",q:"(1+√2)(1−√2) = ?",o:["−1","1","√2","0"],a:0},
{t:"Compute",q:"(√5)² + (√3)² = ?",o:["8","√8","√15","15"],a:0},
{t:"Compute",q:"5⁻¹ = ?",o:["1/5","−5","5","−1/5"],a:0},
{t:"Compute",q:"2⁻³ = ?",o:["1/8","−8","−1/8","6"],a:0},
{t:"Compute",q:"(1/2)⁻² = ?",o:["4","1/4","−4","2"],a:0},
{t:"Compute",q:"4^(1/2) = ?",o:["2","4","1/2","16"],a:0},
{t:"Compute",q:"27^(1/3) = ?",o:["3","9","27","1/3"],a:0}
]
]
},
// ─── Grade 9 · Chapter 2 · Polynomials ───
2: { title:'Polynomials',
beginner:[
[
{t:"Def",q:"In a polynomial, powers of the variable must be?",o:["Whole numbers (non-negative integers)","Any real number","Negative","Fractional"],a:0},
{t:"Def",q:"Is x² + 3x − 1 a polynomial?",o:["Yes","No","Only in Q","Only in Z"],a:0},
{t:"Def",q:"Is 1/x a polynomial?",o:["No (negative power)","Yes","Only in R","Sometimes"],a:0},
{t:"Def",q:"Is x^(1/2) a polynomial?",o:["No (fractional power)","Yes","Only if squared","Only in N"],a:0},
{t:"Def",q:"Is 5 a polynomial?",o:["Yes (constant)","No","Only in Q","Only if added"],a:0},
{t:"Def",q:"Highest power of a polynomial = ?",o:["Degree","Coefficient","Constant","Term count"],a:0},
{t:"Def",q:"Degree of 3x⁴ + 2x − 1?",o:["4","3","1","5"],a:0},
{t:"Def",q:"Linear polynomial degree?",o:["1","0","2","3"],a:0},
{t:"Def",q:"Quadratic polynomial degree?",o:["2","1","3","0"],a:0},
{t:"Def",q:"Cubic polynomial degree?",o:["3","2","1","4"],a:0}
],
[
{t:"Types",q:"Zero polynomial?",o:["0 (no defined degree)","x","1","No such thing"],a:0},
{t:"Types",q:"Example of constant polynomial?",o:["5","x","x+1","x²"],a:0},
{t:"Types",q:"Example of linear polynomial?",o:["2x + 1","x²","5","x³"],a:0},
{t:"Types",q:"Example of quadratic polynomial?",o:["x² + 2x + 1","x + 1","5","x³ + 1"],a:0},
{t:"Types",q:"Example of cubic polynomial?",o:["x³ + 1","x² + 1","x + 1","5"],a:0},
{t:"Types",q:"Degree of 7?",o:["0","1","7","undefined"],a:0},
{t:"Types",q:"Degree of 3x + 1?",o:["1","0","3","2"],a:0},
{t:"Types",q:"Degree of x² + 1?",o:["2","1","0","3"],a:0},
{t:"Types",q:"Degree of 5x³?",o:["3","5","0","15"],a:0},
{t:"Types",q:"Degree of 2x⁴ + 3x² + 1?",o:["4","2","3","5"],a:0}
],
[
{t:"Coef",q:"Coefficient of x in 3x + 2?",o:["3","2","1","x"],a:0},
{t:"Coef",q:"Coefficient of x² in 5x² − 2x + 1?",o:["5","−2","1","2"],a:0},
{t:"Coef",q:"Constant in 3x + 4?",o:["4","3","1","x"],a:0},
{t:"Coef",q:"Coefficient of x³ in 2x³?",o:["2","3","1","6"],a:0},
{t:"Coef",q:"Coefficient of x in 7 − x + 2x²?",o:["−1","1","2","7"],a:0},
{t:"Coef",q:"Coefficient of x² in 1 + x + x²?",o:["1","0","2","−1"],a:0},
{t:"Coef",q:"Constant in −3x + 2?",o:["2","−3","0","3"],a:0},
{t:"Coef",q:"Coefficient of x⁰ means?",o:["Constant term","Degree","x coefficient","Zero"],a:0},
{t:"Coef",q:"In −4x + 1, coefficient of x?",o:["−4","4","1","−1"],a:0},
{t:"Coef",q:"Coefficient of x in just '5'?",o:["0","5","1","undefined"],a:0}
],
[
{t:"Value",q:"p(x)=x+1. p(2)=?",o:["3","2","1","0"],a:0},
{t:"Value",q:"p(x)=2x. p(3)=?",o:["6","5","3","9"],a:0},
{t:"Value",q:"p(x)=x²+1. p(1)=?",o:["2","1","3","0"],a:0},
{t:"Value",q:"p(x)=x²−2x+1. p(1)=?",o:["0","1","−1","2"],a:0},
{t:"Value",q:"p(x)=3x. p(0)=?",o:["0","3","1","undefined"],a:0},
{t:"Value",q:"p(x)=x²−4. p(2)=?",o:["0","8","4","−4"],a:0},
{t:"Value",q:"p(x)=5. p(100)=?",o:["5","100","500","105"],a:0},
{t:"Value",q:"p(x)=x−3. p(5)=?",o:["2","8","−2","15"],a:0},
{t:"Value",q:"p(x)=2x²+1. p(−1)=?",o:["3","−1","1","−3"],a:0},
{t:"Value",q:"p(x)=x²+x+1. p(0)=?",o:["1","0","2","3"],a:0}
],
[
{t:"Zeros",q:"p(x)=x−2. Zero?",o:["2","−2","1","0"],a:0},
{t:"Zeros",q:"p(x)=x+3. Zero?",o:["−3","3","1","0"],a:0},
{t:"Zeros",q:"p(x)=2x−4. Zero?",o:["2","−2","4","0"],a:0},
{t:"Zeros",q:"p(x)=3x. Zero?",o:["0","3","1","−3"],a:0},
{t:"Zeros",q:"p(x)=x−5. Zero?",o:["5","−5","1","0"],a:0},
{t:"Zeros",q:"p(x)=x+7. Zero?",o:["−7","7","1","0"],a:0},
{t:"Zeros",q:"p(x)=x²−4. Zeros?",o:["±2","±4","2 only","−2 only"],a:0},
{t:"Zeros",q:"p(x)=x²−9. Zeros?",o:["±3","±9","3 only","−3 only"],a:0},
{t:"Zeros",q:"p(x)=(x−1)(x−2). Zeros?",o:["1, 2","−1, −2","1 only","2 only"],a:0},
{t:"Zeros",q:"p(x)=x²−x. Zeros?",o:["0, 1","0, −1","1, −1","1 only"],a:0}
]
],
pro:[
[
{t:"Remainder",q:"p(x)=x²+1. Remainder by (x−2)?",o:["5","0","1","4"],a:0},
{t:"Remainder",q:"p(x)=x³. Remainder by (x−1)?",o:["1","0","3","−1"],a:0},
{t:"Remainder",q:"p(x)=x²−4. Remainder by (x−2)?",o:["0","4","2","−4"],a:0},
{t:"Remainder",q:"p(x)=2x+3. Remainder by (x−1)?",o:["5","3","1","2"],a:0},
{t:"Remainder",q:"p(x)=x²+x+1. By (x+1)?",o:["1","3","0","−1"],a:0},
{t:"Remainder",q:"p(x)=x³−1. By (x−1)?",o:["0","1","−1","2"],a:0},
{t:"Remainder",q:"p(x)=x³+1. By (x+1)?",o:["0","2","1","−1"],a:0},
{t:"Remainder",q:"p(x)=x²−x. By (x+2)?",o:["6","2","4","−2"],a:0},
{t:"Remainder",q:"p(x)=5. By (x−3)?",o:["5","0","3","15"],a:0},
{t:"Remainder",q:"p(x)=x+5. By (x+5)?",o:["0","10","5","−5"],a:0}
],
[
{t:"Factor",q:"Factor theorem: (x−a) is a factor iff?",o:["p(a)=0","p(a)=1","p(a)=a","p(a)=∞"],a:0},
{t:"Factor",q:"Is (x−1) a factor of x²−1?",o:["Yes","No","Only if squared","Sometimes"],a:0},
{t:"Factor",q:"Is (x+2) a factor of x²−4?",o:["Yes","No","Only in Z","Only in N"],a:0},
{t:"Factor",q:"Is (x−3) a factor of x²+3?",o:["No","Yes","Only in R","Sometimes"],a:0},
{t:"Factor",q:"Is (x+1) a factor of x³+1?",o:["Yes","No","Only in Q","Only if doubled"],a:0},
{t:"Factor",q:"Is (x−2) a factor of x²−5x+6?",o:["Yes","No","Only if squared","Only in Z"],a:0},
{t:"Factor",q:"Is (x+1) a factor of x²−1?",o:["Yes","No","Only if squared","Sometimes"],a:0},
{t:"Factor",q:"Is (x−1) a factor of x²+1?",o:["No","Yes","Only in R","Sometimes"],a:0},
{t:"Factor",q:"Factor of x²−9: (x−3) or (x−4)?",o:["(x−3)","(x−4)","Both","Neither"],a:0},
{t:"Factor",q:"Factor of x²+5x+6: (x+2) or (x−2)?",o:["(x+2)","(x−2)","Both","Neither"],a:0}
],
[
{t:"Fact",q:"x²−4 = ?",o:["(x−2)(x+2)","(x−4)(x+1)","(x−2)²","(x+2)²"],a:0},
{t:"Fact",q:"x²−9 = ?",o:["(x−3)(x+3)","(x−9)(x+1)","(x−3)²","(x+3)²"],a:0},
{t:"Fact",q:"x²+5x+6 = ?",o:["(x+2)(x+3)","(x−2)(x−3)","(x+1)(x+6)","(x+5)(x+1)"],a:0},
{t:"Fact",q:"x²−5x+6 = ?",o:["(x−2)(x−3)","(x+2)(x+3)","(x−1)(x−6)","(x−5)(x−1)"],a:0},
{t:"Fact",q:"x²+7x+12 = ?",o:["(x+3)(x+4)","(x+2)(x+6)","(x−3)(x−4)","(x+7)(x+1)"],a:0},
{t:"Fact",q:"x²−7x+12 = ?",o:["(x−3)(x−4)","(x+3)(x+4)","(x−2)(x−6)","(x−7)(x−1)"],a:0},
{t:"Fact",q:"x²−1 = ?",o:["(x−1)(x+1)","(x−1)²","(x+1)²","x(x−1)"],a:0},
{t:"Fact",q:"x²+6x+9 = ?",o:["(x+3)²","(x−3)²","(x+9)(x−1)","(x+6)(x+3)"],a:0},
{t:"Fact",q:"x²−6x+9 = ?",o:["(x−3)²","(x+3)²","(x−9)(x+1)","(x−6)(x−3)"],a:0},
{t:"Fact",q:"x²+2x+1 = ?",o:["(x+1)²","(x−1)²","(x+2)(x+1)","(x+2)²"],a:0}
],
[
{t:"Idents",q:"(a+b)² = ?",o:["a² + 2ab + b²","a² − 2ab + b²","a² + b²","a² + ab + b²"],a:0},
{t:"Idents",q:"(a−b)² = ?",o:["a² − 2ab + b²","a² + 2ab + b²","a² − b²","a² − ab + b²"],a:0},
{t:"Idents",q:"(a+b)(a−b) = ?",o:["a² − b²","a² + b²","(a−b)²","(a+b)²"],a:0},
{t:"Idents",q:"(x+y)² at x=1, y=2?",o:["9","5","7","3"],a:0},
{t:"Idents",q:"(x+2)² = ?",o:["x² + 4x + 4","x² + 2x + 4","x² + 4","x² − 4x + 4"],a:0},
{t:"Idents",q:"(x−3)² = ?",o:["x² − 6x + 9","x² + 6x + 9","x² − 9","x² − 3x + 9"],a:0},
{t:"Idents",q:"(x+1)(x−1) = ?",o:["x² − 1","x² + 1","x² − 2x + 1","x² + 2x + 1"],a:0},
{t:"Idents",q:"(a+b)³ = ?",o:["a³ + 3a²b + 3ab² + b³","a³ + b³","a³ − b³","a³ + 3ab + b³"],a:0},
{t:"Idents",q:"(a−b)³ = ?",o:["a³ − 3a²b + 3ab² − b³","a³ − b³","a³ + b³","a³ − 3ab + b³"],a:0},
{t:"Idents",q:"a³ + b³ = ?",o:["(a+b)(a² − ab + b²)","(a−b)(a² + ab + b²)","(a+b)³","a³ + b³ (doesn't factor)"],a:0}
],
[
{t:"Div",q:"Divide x²+2x+1 by x+1. Quotient?",o:["x + 1","x − 1","x + 2","x²"],a:0},
{t:"Div",q:"Remainder above?",o:["0","1","2","x"],a:0},
{t:"Div",q:"Divide x²−4 by x+2. Q?",o:["x − 2","x + 2","x² − 4","x"],a:0},
{t:"Div",q:"Remainder above?",o:["0","4","−4","2"],a:0},
{t:"Div",q:"Divide x²+3x+2 by x+1. Q?",o:["x + 2","x + 1","x + 3","x"],a:0},
{t:"Div",q:"Degree of x² ÷ x quotient?",o:["1","2","0","3"],a:0},
{t:"Div",q:"Polynomial exactly divisible — remainder?",o:["0","1","dividend","divisor"],a:0},
{t:"Div",q:"Dividend = Divisor × Q + R. In 10÷3?",o:["10 = 3×3 + 1","10 = 3×2 + 4","10 = 3×4 − 2","10 = 3×3 + 0"],a:0},
{t:"Div",q:"Divide x³ by x. Q?",o:["x²","x","x³","1"],a:0},
{t:"Div",q:"Degree 3 polynomial ÷ degree 1 → Q degree?",o:["2","3","1","0"],a:0}
]
]
}},

// ═══════════════════════════════════════════════════════════════
// GRADE 10 · Chapter 1 · Real Numbers
// ═══════════════════════════════════════════════════════════════
10: { 1: { title:'Real Numbers',
beginner:[
[
{t:"HCF",q:"HCF(12, 18)?",o:["6","3","12","18"],a:0},
{t:"HCF",q:"HCF(25, 30)?",o:["5","10","25","15"],a:0},
{t:"HCF",q:"HCF(4, 8)?",o:["4","8","2","1"],a:0},
{t:"HCF",q:"HCF(15, 10)?",o:["5","10","15","3"],a:0},
{t:"HCF",q:"HCF of two coprime numbers?",o:["1","0","Product","Sum"],a:0},
{t:"HCF",q:"HCF(48, 18)?",o:["6","12","3","48"],a:0},
{t:"HCF",q:"HCF(1, 100)?",o:["1","100","10","50"],a:0},
{t:"HCF",q:"HCF(21, 14)?",o:["7","14","3","21"],a:0},
{t:"HCF",q:"HCF(2, 3)?",o:["1","2","3","6"],a:0},
{t:"HCF",q:"HCF(100, 25)?",o:["25","5","100","10"],a:0}
],
[
{t:"LCM",q:"LCM(4, 6)?",o:["12","24","6","4"],a:0},
{t:"LCM",q:"LCM(9, 12)?",o:["36","108","18","12"],a:0},
{t:"LCM",q:"LCM(2, 3)?",o:["6","5","2","3"],a:0},
{t:"LCM",q:"LCM(8, 12)?",o:["24","96","8","12"],a:0},
{t:"LCM",q:"LCM(10, 15)?",o:["30","150","10","15"],a:0},
{t:"LCM",q:"LCM(5, 7)?",o:["35","12","5","7"],a:0},
{t:"LCM",q:"LCM(2, 4)?",o:["4","8","2","6"],a:0},
{t:"LCM",q:"LCM(3, 5)?",o:["15","8","3","5"],a:0},
{t:"LCM",q:"LCM(6, 9)?",o:["18","54","6","3"],a:0},
{t:"LCM",q:"LCM(7, 14)?",o:["14","98","7","21"],a:0}
],
[
{t:"Rel",q:"LCM × HCF = ?",o:["Product of numbers","Sum","Difference","Quotient"],a:0},
{t:"Rel",q:"12, 18: HCF=6. LCM?",o:["36","108","12","18"],a:0},
{t:"Rel",q:"15, 25: HCF=5. LCM?",o:["75","375","25","15"],a:0},
{t:"Rel",q:"8, 12: HCF=4, LCM=24. Product 8×12?",o:["96","100","24","48"],a:0},
{t:"Rel",q:"HCF=6, LCM=60. Product of numbers?",o:["360","60","6","120"],a:0},
{t:"Rel",q:"20, 30: HCF?",o:["10","5","60","20"],a:0},
{t:"Rel",q:"20, 30: LCM?",o:["60","600","30","20"],a:0},
{t:"Rel",q:"LCM(4,5) × HCF(4,5)?",o:["20","9","1","40"],a:0},
{t:"Rel",q:"HCF(a,b)=1 and a·b=35. LCM?",o:["35","1","70","7"],a:0},
{t:"Rel",q:"12, 18: LCM?",o:["36","72","12","18"],a:0}
],
[
{t:"Euclid",q:"Euclid: a = bq + r, r satisfies?",o:["0 ≤ r < b","0 < r < b","r = 0","r > b"],a:0},
{t:"Euclid",q:"48 = 2·18 + 12, then HCF(18, 12) = ?",o:["6","12","2","18"],a:0},
{t:"Euclid",q:"Every integer >1 is a unique product of?",o:["Primes","Composites","Squares","Evens"],a:0},
{t:"Euclid",q:"Smallest prime?",o:["2","1","3","5"],a:0},
{t:"Euclid",q:"Primes < 10: 2, 3, 5, ?",o:["7","9","6","10"],a:0},
{t:"Euclid",q:"Is 1 a prime?",o:["No","Yes","Only in N","Sometimes"],a:0},
{t:"Euclid",q:"Coprime numbers have HCF?",o:["1","0","Product","Sum"],a:0},
{t:"Euclid",q:"HCF(100, 75) via Euclid?",o:["25","50","5","75"],a:0},
{t:"Euclid",q:"HCF(36, 24)?",o:["12","6","24","36"],a:0},
{t:"Euclid",q:"HCF(60, 48)?",o:["12","6","48","60"],a:0}
],
[
{t:"PrimeFac",q:"Prime factors of 60?",o:["2²×3×5","2×30","6×10","4×15"],a:0},
{t:"PrimeFac",q:"Prime factors of 100?",o:["2²×5²","10²","2×5²","4×25"],a:0},
{t:"PrimeFac",q:"Prime factors of 36?",o:["2²×3²","6²","4×9","2³×3"],a:0},
{t:"PrimeFac",q:"Prime factors of 18?",o:["2×3²","9×2","3×6","2²×3"],a:0},
{t:"PrimeFac",q:"Prime factors of 24?",o:["2³×3","4×6","2²×6","8×3"],a:0},
{t:"PrimeFac",q:"Prime factors of 45?",o:["3²×5","9×5","5×9","3×15"],a:0},
{t:"PrimeFac",q:"Prime factors of 50?",o:["2×5²","10×5","2²×5","25×2"],a:0},
{t:"PrimeFac",q:"Prime factors of 72?",o:["2³×3²","8×9","2²×3²","4×18"],a:0},
{t:"PrimeFac",q:"Prime factors of 81?",o:["3⁴","9²","27×3","3³"],a:0},
{t:"PrimeFac",q:"Prime factors of 90?",o:["2×3²×5","9×10","2×45","6×15"],a:0}
]
],
pro:[
[
{t:"Irrat",q:"Is √2 rational or irrational?",o:["Irrational","Rational","Both","Neither"],a:0},
{t:"Irrat",q:"Proof √2 is irrational uses?",o:["Contradiction","Induction","Direct proof","Construction"],a:0},
{t:"Irrat",q:"Sum rational + irrational = ?",o:["Irrational","Rational","Natural","Zero"],a:0},
{t:"Irrat",q:"Is 2+√3 rational?",o:["Irrational","Rational","Both","Zero"],a:0},
{t:"Irrat",q:"Square of any odd integer is?",o:["Odd","Even","Zero","Prime"],a:0},
{t:"Irrat",q:"If prime p | a², then p | ?",o:["a","a+1","a²","1"],a:0},
{t:"Irrat",q:"Product of two irrationals can be?",o:["Rational or irrational","Always rational","Always irrational","Always zero"],a:0},
{t:"Irrat",q:"Is √2 × √8 rational?",o:["Yes (=4)","No","Only if reduced","Irrational"],a:0},
{t:"Irrat",q:"Is π rational?",o:["No","Yes","Only as 22/7","Only approximately"],a:0},
{t:"Irrat",q:"Is 22/7 irrational?",o:["No (rational)","Yes","Only approximately","Sometimes"],a:0}
],
[
{t:"DecExp",q:"Decimal form of 3/8?",o:["0.375 (terminating)","0.3","0.38","Non-terminating"],a:0},
{t:"DecExp",q:"Decimal form of 1/7?",o:["Non-terminating recurring","Terminating","Irrational","0.14"],a:0},
{t:"DecExp",q:"Fraction terminates iff denominator (lowest form) has only?",o:["2 and/or 5","Only 3","Only 7","Any prime"],a:0},
{t:"DecExp",q:"Does 1/6 terminate?",o:["No","Yes","Only approximately","Sometimes"],a:0},
{t:"DecExp",q:"Does 7/20 terminate?",o:["Yes","No","Only approximately","Sometimes"],a:0},
{t:"DecExp",q:"0.25 as fraction?",o:["1/4","25/100","2/5","1/25"],a:0},
{t:"DecExp",q:"0.333... as fraction?",o:["1/3","3/10","1/30","3/100"],a:0},
{t:"DecExp",q:"0.75 as fraction?",o:["3/4","7/5","75/10","3/5"],a:0},
{t:"DecExp",q:"Digits in recurring block of 1/7?",o:["6","3","1","7"],a:0},
{t:"DecExp",q:"Terminating decimal is always?",o:["Rational","Irrational","Integer","Natural"],a:0}
],
[
{t:"AdvHCF",q:"HCF(336, 240)?",o:["48","24","12","96"],a:0},
{t:"AdvHCF",q:"LCM(336, 240)?",o:["1680","6720","336","240"],a:0},
{t:"AdvHCF",q:"HCF(867, 255)?",o:["51","17","3","255"],a:0},
{t:"AdvHCF",q:"LCM(867, 255)?",o:["4335","12990","867","255"],a:0},
{t:"AdvHCF",q:"HCF(135, 225)?",o:["45","15","9","225"],a:0},
{t:"AdvHCF",q:"LCM(135, 225)?",o:["675","3375","225","1350"],a:0},
{t:"AdvHCF",q:"HCF(4052, 12576)?",o:["4","2","8","12"],a:0},
{t:"AdvHCF",q:"LCM(52, 130)?",o:["260","520","130","100"],a:0},
{t:"AdvHCF",q:"HCF(6, 35)?",o:["1","2","5","7"],a:0},
{t:"AdvHCF",q:"LCM(8, 9, 25)?",o:["1800","200","100","225"],a:0}
],
[
{t:"FTA",q:"Fundamental Theorem: every integer >1 is a?",o:["Unique product of primes","Product of squares","Sum of primes","Unique sum"],a:0},
{t:"FTA",q:"Prime factorization of 1000?",o:["2³×5³","10³","2×500","4×250"],a:0},
{t:"FTA",q:"Factor 225?",o:["3²×5²","15²","9×25","3×75"],a:0},
{t:"FTA",q:"Factor 1024?",o:["2¹⁰","4⁵","2⁵×2⁵","32²"],a:0},
{t:"FTA",q:"Factor 729?",o:["3⁶","27²","9³","3³"],a:0},
{t:"FTA",q:"Smallest number divisible by 2, 3, 5, 7?",o:["210","42","105","30"],a:0},
{t:"FTA",q:"Numbers with same prime factorization are?",o:["Equal","Coprime","Different","Unrelated"],a:0},
{t:"FTA",q:"If a = 2³ × 3² × 5, does 5 | a?",o:["Yes","No","Only approximately","Only if squared"],a:0},
{t:"FTA",q:"Is 11 prime?",o:["Yes","No","Only in Z","Sometimes"],a:0},
{t:"FTA",q:"Prime factors of 77?",o:["7×11","1×77","7+11","77"],a:0}
],
[
{t:"Word",q:"Two drums 850 L and 680 L. Max same vessel to measure both?",o:["HCF = 170","LCM = 3400","680","850"],a:0},
{t:"Word",q:"Buses every 12, 18, 24 min. Meet every?",o:["LCM = 72 min","HCF = 6 min","12 min","36 min"],a:0},
{t:"Word",q:"Dodecagon (12-sided) and pentagon (5-sided) match at step?",o:["LCM(12,5) = 60","HCF = 1","12","5"],a:0},
{t:"Word",q:"HCF = 13, LCM = 182. One number is 26. Other?",o:["91","13","182","14"],a:0},
{t:"Word",q:"Classes 40 and 32 students. Max equal groups?",o:["HCF = 8","LCM = 160","40","32"],a:0},
{t:"Word",q:"Cyclists 48 and 60 km/h meet at common km?",o:["LCM = 240","HCF = 12","60","48"],a:0},
{t:"Word",q:"Tiles 20, 30, 45 cm. Min room length?",o:["LCM = 180 cm","HCF = 5 cm","90 cm","360 cm"],a:0},
{t:"Word",q:"Largest no. dividing 245 & 1029 with rem 5?",o:["HCF(240,1024) = 16","HCF(245,1029)","12","8"],a:0},
{t:"Word",q:"Coprime numbers 13 and 17. LCM?",o:["221","1","13","17"],a:0},
{t:"Word",q:"Classes every 18 and 24 min meet at?",o:["LCM = 72 min","HCF = 6 min","18 min","24 min"],a:0}
]
]
},
// ─── Grade 10 · Chapter 2 · Polynomials ───
2: { title:'Polynomials',
beginner:[
[
{t:"Zeros",q:"Zero of linear p(x)=ax+b?",o:["−b/a","b/a","a/b","−a/b"],a:0},
{t:"Zeros",q:"Zero of 2x + 6?",o:["−3","3","−6","6"],a:0},
{t:"Zeros",q:"Zero of x − 5?",o:["5","−5","0","1"],a:0},
{t:"Zeros",q:"Linear polynomial has how many zeros?",o:["1","0","2","Infinite"],a:0},
{t:"Zeros",q:"Quadratic polynomial has at most?",o:["2 zeros","1 zero","3 zeros","0 zeros"],a:0},
{t:"Zeros",q:"Cubic polynomial has at most?",o:["3 zeros","2 zeros","1 zero","4 zeros"],a:0},
{t:"Zeros",q:"If p(2)=0, then 2 is a?",o:["Zero of p","Constant","Degree","Coefficient"],a:0},
{t:"Zeros",q:"Zeros of x² + 2x − 3?",o:["1, −3","−1, 3","3, −3","1, 3"],a:0},
{t:"Zeros",q:"Zeros of x² − 9?",o:["±3","±9","3 only","−3 only"],a:0},
{t:"Zeros",q:"Zeros of x² + 1 (real)?",o:["None (complex)","±1","0","±i"],a:0}
],
[
{t:"QuadZeros",q:"Zeros of x² − 4?",o:["±2","±4","2 only","−2 only"],a:0},
{t:"QuadZeros",q:"Zeros of x² − 25?",o:["±5","±25","5 only","−5 only"],a:0},
{t:"QuadZeros",q:"Zeros of x² − 5x + 6?",o:["2, 3","−2, −3","1, 6","3, −2"],a:0},
{t:"QuadZeros",q:"Zeros of x² + 5x + 6?",o:["−2, −3","2, 3","−6, 1","1, 6"],a:0},
{t:"QuadZeros",q:"Zeros of x² − 7x + 12?",o:["3, 4","−3, −4","2, 6","1, 12"],a:0},
{t:"QuadZeros",q:"Zeros of x(x − 7)?",o:["0, 7","−7, 0","7 only","0 only"],a:0},
{t:"QuadZeros",q:"Zeros of (x−1)(x+1)?",o:["±1","±2","1 only","−1 only"],a:0},
{t:"QuadZeros",q:"Zeros of x² − 8x + 15?",o:["3, 5","−3, −5","1, 15","2, 4"],a:0},
{t:"QuadZeros",q:"Zeros of x² + x − 6?",o:["2, −3","−2, 3","3, −2","−3, 2"],a:0},
{t:"QuadZeros",q:"Zeros of x² + 3x − 10?",o:["2, −5","−2, 5","5, −2","2, 5"],a:0}
],
[
{t:"SumProd",q:"For ax² + bx + c, sum of zeros = ?",o:["−b/a","b/a","c/a","a/c"],a:0},
{t:"SumProd",q:"Product of zeros for ax²+bx+c = ?",o:["c/a","−c/a","b/a","a/c"],a:0},
{t:"SumProd",q:"Sum of zeros of x² − 5x + 6?",o:["5","−5","6","−6"],a:0},
{t:"SumProd",q:"Product of zeros of x² − 5x + 6?",o:["6","−6","5","−5"],a:0},
{t:"SumProd",q:"Sum of zeros of x² + 3x + 2?",o:["−3","3","2","−2"],a:0},
{t:"SumProd",q:"Product of zeros of x² + 3x + 2?",o:["2","−2","3","−3"],a:0},
{t:"SumProd",q:"Sum of zeros of 2x² − 4x + 1?",o:["2","−2","1/2","−1/2"],a:0},
{t:"SumProd",q:"Product of zeros of 2x² − 4x + 1?",o:["1/2","−1/2","2","−2"],a:0},
{t:"SumProd",q:"Sum of zeros of x² − 1?",o:["0","1","−1","2"],a:0},
{t:"SumProd",q:"Product of zeros of x² − 1?",o:["−1","1","0","2"],a:0}
],
[
{t:"Construct",q:"Quadratic with zeros 3 and −2?",o:["x² − x − 6","x² + x − 6","x² − x + 6","x² + x + 6"],a:0},
{t:"Construct",q:"Quadratic with zeros 1 and 4?",o:["x² − 5x + 4","x² + 5x + 4","x² − 4x + 1","x² − 3x + 4"],a:0},
{t:"Construct",q:"Quadratic with zeros 0 and 5?",o:["x² − 5x","x² + 5x","x² − 5","x² − 5x + 5"],a:0},
{t:"Construct",q:"Quadratic with zeros ±2?",o:["x² − 4","x² + 4","x² − 2x","x² − 2"],a:0},
{t:"Construct",q:"Quadratic with zeros −1 and −3?",o:["x² + 4x + 3","x² − 4x + 3","x² + 4x − 3","x² − 4x − 3"],a:0},
{t:"Construct",q:"Sum 5, product 6. Equation?",o:["x² − 5x + 6","x² + 5x + 6","x² − 6x + 5","x² + 6x + 5"],a:0},
{t:"Construct",q:"Sum 3, product 2. Equation?",o:["x² − 3x + 2","x² + 3x + 2","x² − 2x + 3","x² + 2x − 3"],a:0},
{t:"Construct",q:"Sum −4, product 3. Equation?",o:["x² + 4x + 3","x² − 4x + 3","x² + 4x − 3","x² − 4x − 3"],a:0},
{t:"Construct",q:"Zeros ±3. Equation?",o:["x² − 9","x² + 9","x² − 3","x² + 3"],a:0},
{t:"Construct",q:"Zeros 0 and 1. Equation?",o:["x² − x","x² + x","x² − 1","x² − x + 1"],a:0}
],
[
{t:"Kinds",q:"p(x) = 3 is?",o:["Constant (degree 0)","Linear","Quadratic","Zero"],a:0},
{t:"Kinds",q:"p(x) = 2x + 1 is?",o:["Linear","Constant","Quadratic","Cubic"],a:0},
{t:"Kinds",q:"p(x) = x² + 1 is?",o:["Quadratic","Linear","Cubic","Constant"],a:0},
{t:"Kinds",q:"p(x) = x³ + x is?",o:["Cubic","Quadratic","Linear","Biquadratic"],a:0},
{t:"Kinds",q:"p(x) = x⁴ + 2 is?",o:["Biquadratic (degree 4)","Cubic","Quadratic","Quintic"],a:0},
{t:"Kinds",q:"Degree of zero polynomial?",o:["Undefined (convention 0)","1","∞","−1"],a:0},
{t:"Kinds",q:"Is p(x) = 5x linear?",o:["Yes","No","Constant","Quadratic"],a:0},
{t:"Kinds",q:"Standard form writes polynomial in?",o:["Decreasing powers","Increasing powers","Alphabetical","Random"],a:0},
{t:"Kinds",q:"Polynomial degree = degree of highest term. True?",o:["True","False","Only for linear","Only for cubic"],a:0},
{t:"Kinds",q:"x² + 0 has degree?",o:["2","0","1","undefined"],a:0}
]
],
pro:[
[
{t:"DivAlgo",q:"Dividend = Divisor × ___ + Remainder",o:["Quotient","Zero","Degree","Coefficient"],a:0},
{t:"DivAlgo",q:"Divide x² by x. Q and R?",o:["Q=x, R=0","Q=1, R=x","Q=x², R=0","Q=0, R=x²"],a:0},
{t:"DivAlgo",q:"Remainder of x²+1 divided by x−1?",o:["2","0","1","−1"],a:0},
{t:"DivAlgo",q:"Remainder of x²−4 divided by x−2?",o:["0","4","−4","2"],a:0},
{t:"DivAlgo",q:"Remainder of x³+1 by x+1?",o:["0","2","−1","1"],a:0},
{t:"DivAlgo",q:"In division, degree of remainder < ?",o:["Divisor degree","Dividend degree","Quotient degree","Doesn't matter"],a:0},
{t:"DivAlgo",q:"Polynomial long division resembles?",o:["Number long division","Matrix multiplication","Graphing","Integration"],a:0},
{t:"DivAlgo",q:"Degree 5 ÷ Degree 2 → Q degree?",o:["3","2","1","5"],a:0},
{t:"DivAlgo",q:"If (x−a) divides p(x) exactly, p(a)=?",o:["0","1","a","−a"],a:0},
{t:"DivAlgo",q:"Is the division algorithm unique?",o:["Yes (Q and R unique)","No","Only for linear","Only over Z"],a:0}
],
[
{t:"IrrZ",q:"Zeros of x²−2?",o:["±√2","±2","±√3","±4"],a:0},
{t:"IrrZ",q:"Zeros of x²−3?",o:["±√3","±3","±√2","±9"],a:0},
{t:"IrrZ",q:"Zeros of x²+1 (real)?",o:["Not real","±1","0","±i"],a:0},
{t:"IrrZ",q:"Zeros of x²−2x−1?",o:["1±√2","−1±√2","1±√3","2±√2"],a:0},
{t:"IrrZ",q:"Discriminant b²−4ac > 0 means?",o:["Two real zeros","One zero","No real zeros","Always complex"],a:0},
{t:"IrrZ",q:"Discriminant = 0 means?",o:["One (repeated) real zero","Two distinct zeros","No real zeros","Infinite zeros"],a:0},
{t:"IrrZ",q:"Discriminant < 0 means?",o:["No real zeros","One zero","Two real zeros","Only integer zeros"],a:0},
{t:"IrrZ",q:"Zeros of x²−4x+4?",o:["2, 2","±2","4, −1","4, 1"],a:0},
{t:"IrrZ",q:"Zeros of x²+4 (real)?",o:["Not real","±2","±4","0"],a:0},
{t:"IrrZ",q:"Golden-ratio-related equation?",o:["x² − x − 1 = 0","x² − 4 = 0","x² + 1 = 0","x² − 1 = 0"],a:0}
],
[
{t:"Graph",q:"Graph of y = ax + b?",o:["Straight line","Parabola","Circle","Hyperbola"],a:0},
{t:"Graph",q:"Graph of y = ax² (a≠0)?",o:["Parabola","Line","Circle","Ellipse"],a:0},
{t:"Graph",q:"Quadratic opens up if?",o:["a > 0","a < 0","a = 0","Always"],a:0},
{t:"Graph",q:"Quadratic opens down if?",o:["a < 0","a > 0","a = 0","Never"],a:0},
{t:"Graph",q:"x-intercepts of a polynomial are?",o:["Its zeros","Its coefficients","Its degree","Its constant"],a:0},
{t:"Graph",q:"y-intercept of p(x) is p(0) = ?",o:["Constant term","Leading coefficient","Degree","Slope"],a:0},
{t:"Graph",q:"Cubic has at most how many x-intercepts?",o:["3","2","1","4"],a:0},
{t:"Graph",q:"Parabola vertex is at x = ?",o:["−b/(2a)","b/(2a)","−a/2","a/b"],a:0},
{t:"Graph",q:"Graph crosses x-axis at polynomial's?",o:["Zeros","Maxima","Minima","y-intercept"],a:0},
{t:"Graph",q:"Linear has how many x-intercepts?",o:["1","2","0","Infinite"],a:0}
],
[
{t:"Solve",q:"2x + 6 = 0. x = ?",o:["−3","3","−6","6"],a:0},
{t:"Solve",q:"x² − 9 = 0. x = ?",o:["±3","±9","3","−3"],a:0},
{t:"Solve",q:"x² − 5x + 6 = 0. x = ?",o:["2 or 3","−2 or −3","1 or 6","5 or 6"],a:0},
{t:"Solve",q:"x² + 2x − 8 = 0. x = ?",o:["−4 or 2","4 or −2","8 or −1","−8 or 1"],a:0},
{t:"Solve",q:"x² − 10x + 25 = 0. x = ?",o:["5 (repeated)","±5","25","−5"],a:0},
{t:"Solve",q:"x² = 4. x = ?",o:["±2","2","−2","±4"],a:0},
{t:"Solve",q:"(x−1)(x−2)(x−3) = 0. x = ?",o:["1, 2, 3","−1, −2, −3","0 only","1 only"],a:0},
{t:"Solve",q:"x² + 5x = 0. x = ?",o:["0, −5","0, 5","5, −5","0 only"],a:0},
{t:"Solve",q:"x(x − 1) = 0. x = ?",o:["0, 1","0, −1","1 only","0 only"],a:0},
{t:"Solve",q:"x³ = 8. x = ?",o:["2","±2","8","4"],a:0}
],
[
{t:"Apply",q:"Sum of zeros of 2x² + 3x + 1?",o:["−3/2","3/2","1/2","−1/2"],a:0},
{t:"Apply",q:"Product of zeros of 2x² + 3x + 1?",o:["1/2","−1/2","3/2","−3/2"],a:0},
{t:"Apply",q:"Quadratic with sum=7, product=12?",o:["x² − 7x + 12","x² + 7x + 12","x² − 12x + 7","x² − 7x − 12"],a:0},
{t:"Apply",q:"Polynomial with zeros 2, −3?",o:["x² + x − 6","x² − x − 6","x² + x + 6","x² − x + 6"],a:0},
{t:"Apply",q:"If one zero of x² − 3x + k is 2, k = ?",o:["2","4","6","−2"],a:0},
{t:"Apply",q:"Zeros of x² − (a+b)x + ab?",o:["a, b","a+b, ab","a−b, a+b","−a, −b"],a:0},
{t:"Apply",q:"Polynomial with only zero at origin (degree 1)?",o:["x","x + 1","x²","x − 1"],a:0},
{t:"Apply",q:"Polynomial degree n has at most how many zeros?",o:["n","n+1","2n","Infinite"],a:0},
{t:"Apply",q:"Can a polynomial have more zeros than its degree?",o:["No","Yes","Only even","Only odd"],a:0},
{t:"Apply",q:"Number of zeros (with multiplicity) of (x−1)²(x+2)?",o:["3","2","1","4"],a:0}
]
]
}}

};
