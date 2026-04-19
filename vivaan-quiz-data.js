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
{t:"Flat Shapes",q:"A square has how many equal sides?",o:["4","3","5","2"],a:0},
{t:"Flat Shapes",q:"Which shape has NO corners?",o:["Circle","Square","Triangle","Rectangle"],a:0},
{t:"Flat Shapes",q:"A rectangle has how many sides?",o:["4","3","5","6"],a:0},
{t:"Flat Shapes",q:"A triangle has how many corners?",o:["3","4","5","2"],a:0},
{t:"Flat Shapes",q:"A square has how many corners?",o:["4","3","2","5"],a:0},
{t:"Flat Shapes",q:"A clock face is shaped like a?",o:["Circle","Square","Triangle","Diamond"],a:0},
{t:"Flat Shapes",q:"A door is shaped like a?",o:["Rectangle","Circle","Triangle","Star"],a:0},
{t:"Flat Shapes",q:"A pizza slice looks like a?",o:["Triangle","Circle","Square","Star"],a:0},
{t:"Flat Shapes",q:"A coin is shaped like a?",o:["Circle","Square","Triangle","Hexagon"],a:0}
],
[
{t:"Solid Shapes",q:"A ball is shaped like a?",o:["Sphere","Cube","Cylinder","Cone"],a:0},
{t:"Solid Shapes",q:"A dice is shaped like a?",o:["Cube","Sphere","Cylinder","Cone"],a:0},
{t:"Solid Shapes",q:"A tin can is shaped like a?",o:["Cylinder","Cube","Sphere","Cone"],a:0},
{t:"Solid Shapes",q:"A birthday hat is shaped like a?",o:["Cone","Cube","Sphere","Cylinder"],a:0},
{t:"Solid Shapes",q:"A brick is shaped like a?",o:["Cuboid","Sphere","Cone","Cylinder"],a:0},
{t:"Solid Shapes",q:"How many faces does a cube have?",o:["6","4","8","5"],a:0},
{t:"Solid Shapes",q:"A globe is shaped like a?",o:["Sphere","Cube","Cylinder","Cone"],a:0},
{t:"Solid Shapes",q:"An ice cream cone is shaped like a?",o:["Cone","Cylinder","Sphere","Cube"],a:0},
{t:"Solid Shapes",q:"A fridge is shaped like a?",o:["Cuboid","Cube","Sphere","Cone"],a:0},
{t:"Solid Shapes",q:"A football is shaped like a?",o:["Sphere","Cube","Cylinder","Cone"],a:0}
],
[
{t:"Roll/Slide",q:"A ball can best?",o:["Roll","Stack","Slide","Float"],a:0},
{t:"Roll/Slide",q:"A book (lying flat) can?",o:["Slide","Roll","Float","Bounce"],a:0},
{t:"Roll/Slide",q:"Which does NOT roll?",o:["Box","Ball","Orange","Wheel"],a:0},
{t:"Roll/Slide",q:"Which can stack the easiest?",o:["Box","Ball","Egg","Cone"],a:0},
{t:"Roll/Slide",q:"A cylinder lying on its side can?",o:["Roll","Only stack","Float","Stick"],a:0},
{t:"Roll/Slide",q:"Which shape rolls the best?",o:["Sphere","Cube","Cuboid","Pyramid"],a:0},
{t:"Roll/Slide",q:"A cone on its flat base?",o:["Stacks","Rolls","Floats","Spins"],a:0},
{t:"Roll/Slide",q:"A wheel is designed to?",o:["Roll","Stack","Fly","Float"],a:0},
{t:"Roll/Slide",q:"Oranges roll easily because they are?",o:["Round","Square","Flat","Hollow"],a:0},
{t:"Roll/Slide",q:"Stacked books use shapes that are?",o:["Flat","Round","Pointy","Tiny"],a:0}
],
[
{t:"Counting",q:"How many sides in a pentagon?",o:["5","4","6","3"],a:0},
{t:"Counting",q:"How many corners in a pentagon?",o:["5","4","6","3"],a:0},
{t:"Counting",q:"How many sides in a hexagon?",o:["6","5","8","4"],a:0},
{t:"Counting",q:"How many corners in a hexagon?",o:["6","5","7","8"],a:0},
{t:"Counting",q:"How many sides in an octagon?",o:["8","6","10","7"],a:0},
{t:"Counting",q:"Triangle + Square = total sides?",o:["7","6","8","5"],a:0},
{t:"Counting",q:"Two triangles = total sides?",o:["6","3","4","5"],a:0},
{t:"Counting",q:"Two squares = total corners?",o:["8","4","6","10"],a:0},
{t:"Counting",q:"Circle has how many corners?",o:["0","1","4","2"],a:0},
{t:"Counting",q:"Rectangle has how many pairs of equal sides?",o:["2","1","4","3"],a:0}
],
[
{t:"Everyday",q:"A dinner plate is shaped like a?",o:["Circle","Square","Triangle","Oval"],a:0},
{t:"Everyday",q:"A postcard is shaped like a?",o:["Rectangle","Circle","Triangle","Square"],a:0},
{t:"Everyday",q:"A sandwich cut diagonally looks like a?",o:["Triangle","Circle","Square","Star"],a:0},
{t:"Everyday",q:"A water bottle is usually a?",o:["Cylinder","Cube","Sphere","Cone"],a:0},
{t:"Everyday",q:"A traffic cone is shaped like a?",o:["Cone","Cube","Cylinder","Sphere"],a:0},
{t:"Everyday",q:"A TV screen is shaped like a?",o:["Rectangle","Circle","Triangle","Pentagon"],a:0},
{t:"Everyday",q:"A window is usually a?",o:["Rectangle","Circle","Triangle","Star"],a:0},
{t:"Everyday",q:"A stop sign has how many sides?",o:["8","6","5","4"],a:0},
{t:"Everyday",q:"A kite (the toy) is shaped like a?",o:["Diamond","Circle","Square","Triangle"],a:0},
{t:"Everyday",q:"An egg is shaped like a?",o:["Oval","Circle","Square","Cube"],a:0}
]
],
pro:[
[
{t:"Cube",q:"Cube has how many edges?",o:["12","6","8","10"],a:0},
{t:"Cube",q:"Cube has how many corners (vertices)?",o:["8","6","12","4"],a:0},
{t:"Cube",q:"Cube has how many faces?",o:["6","4","8","5"],a:0},
{t:"Cuboid",q:"Cuboid has how many faces?",o:["6","4","8","5"],a:0},
{t:"Cuboid",q:"Cuboid has how many edges?",o:["12","6","8","10"],a:0},
{t:"Cylinder",q:"Cylinder has how many FLAT faces?",o:["2","1","3","0"],a:0},
{t:"Cylinder",q:"Cylinder has how many curved surfaces?",o:["1","2","3","0"],a:0},
{t:"Cone",q:"Cone has how many flat faces?",o:["1","2","3","0"],a:0},
{t:"Cone",q:"Cone has how many vertices (tips)?",o:["1","0","2","4"],a:0},
{t:"Sphere",q:"Sphere has how many corners?",o:["0","1","2","8"],a:0}
],
[
{t:"Polygons",q:"A 5-sided shape is called a?",o:["Pentagon","Hexagon","Octagon","Quadrilateral"],a:0},
{t:"Polygons",q:"A 6-sided shape is called a?",o:["Hexagon","Pentagon","Octagon","Heptagon"],a:0},
{t:"Polygons",q:"An 8-sided shape is called an?",o:["Octagon","Hexagon","Pentagon","Decagon"],a:0},
{t:"Polygons",q:"Shapes with 4 sides are called?",o:["Quadrilaterals","Triangles","Pentagons","Circles"],a:0},
{t:"Polygons",q:"A honeycomb cell is a?",o:["Hexagon","Square","Pentagon","Triangle"],a:0},
{t:"Polygons",q:"A stop sign is an?",o:["Octagon","Hexagon","Pentagon","Square"],a:0},
{t:"Polygons",q:"A quadrilateral has how many corners?",o:["4","3","5","6"],a:0},
{t:"Polygons",q:"A regular hexagon has all sides?",o:["Equal","Different","Two equal","Three equal"],a:0},
{t:"Polygons",q:"A 10-sided shape is a?",o:["Decagon","Octagon","Pentagon","Hexagon"],a:0},
{t:"Polygons",q:"A 3-sided polygon is a?",o:["Triangle","Square","Pentagon","Quadrilateral"],a:0}
],
[
{t:"Position",q:"The sky is ____ us.",o:["Above","Below","Beside","Inside"],a:0},
{t:"Position",q:"The ground is ____ our feet.",o:["Below","Above","Beside","Inside"],a:0},
{t:"Position",q:"A fish lives ____ water.",o:["Inside","Outside","Above","Below"],a:0},
{t:"Position",q:"The opposite of INSIDE is?",o:["Outside","Beside","Above","Between"],a:0},
{t:"Position",q:"The opposite of LEFT is?",o:["Right","Up","Down","Back"],a:0},
{t:"Position",q:"A book between two bookends is ____ them.",o:["Between","Above","Below","Beside"],a:0},
{t:"Position",q:"The opposite of UP is?",o:["Down","Left","Right","Inside"],a:0},
{t:"Position",q:"A ball under a chair is ____ the chair.",o:["Below","Above","Inside","Beside"],a:0},
{t:"Position",q:"The sun shines ____ us in the day.",o:["Above","Below","Inside","Beside"],a:0},
{t:"Position",q:"An apple ON a table is ____ it.",o:["Above","Below","Inside","Outside"],a:0}
],
[
{t:"Patterns",q:"Next: red, blue, red, blue, red, ___?",o:["blue","red","yellow","green"],a:0},
{t:"Patterns",q:"Next: A, B, A, B, A, B, ___?",o:["A","B","C","AB"],a:0},
{t:"Patterns",q:"Next: 2, 4, 6, 8, ___?",o:["10","9","12","7"],a:0},
{t:"Patterns",q:"Next: 1, 3, 5, 7, ___?",o:["9","8","10","11"],a:0},
{t:"Patterns",q:"Next: △ □ △ □ △, ___?",o:["□","△","○","◇"],a:0},
{t:"Patterns",q:"Next: 5, 10, 15, 20, ___?",o:["25","30","22","15"],a:0},
{t:"Patterns",q:"Next: A, B, C, A, B, C, ___?",o:["A","B","C","D"],a:0},
{t:"Patterns",q:"Next: big, small, big, small, big, ___?",o:["small","big","tiny","medium"],a:0},
{t:"Patterns",q:"Next (going down): 10, 9, 8, 7, ___?",o:["6","5","8","7"],a:0},
{t:"Patterns",q:"Next: 1, 1, 2, 2, 3, 3, 4, ___?",o:["4","5","3","6"],a:0}
],
[
{t:"Mixed",q:"Which is 3D: circle or cube?",o:["Cube","Circle","Both","Neither"],a:0},
{t:"Mixed",q:"Which is 2D: square or cube?",o:["Square","Cube","Both","Neither"],a:0},
{t:"Mixed",q:"Which has no corners: circle or square?",o:["Circle","Square","Both","Neither"],a:0},
{t:"Mixed",q:"Which rolls best?",o:["Sphere","Cube","Cuboid","Pyramid"],a:0},
{t:"Mixed",q:"Small squares in a 2×2 grid?",o:["4","3","5","6"],a:0},
{t:"Mixed",q:"Half of a circle is called a?",o:["Semi-circle","Half","Quarter","Oval"],a:0},
{t:"Mixed",q:"A rectangle with 4 equal sides is a?",o:["Square","Pentagon","Circle","Triangle"],a:0},
{t:"Mixed",q:"A balloon is shaped like a?",o:["Sphere","Cube","Cone","Cylinder"],a:0},
{t:"Mixed",q:"Shapes that look same on both sides are?",o:["Symmetric","Different","Round","Square"],a:0},
{t:"Mixed",q:"A cricket ball is a?",o:["Sphere","Cube","Cylinder","Cone"],a:0}
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
{t:"Ind vs Intl",q:"Commas (International) in 987654321?",o:["987,654,321","98,76,54,321","987,6,54,321","98,76,54,321"],a:0},
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
}}

};
