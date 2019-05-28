const beerCSV = `id,brewery_id,name,cat_id,style_id,abv,ibu,srm,upc,filepath,descript,last_mod
1,812,Hocus Pocus,11,116,4.5,0,0,0,,"Our take on a classic summer ale.  A toast to weeds, rays, and summer haze.  A light, crisp ale for mowing lawns, hitting lazy fly balls, and communing with nature, Hocus Pocus is offered up as a summer sacrifice to clodless days. Its malty sweetness finishes tart and crisp and is best apprediated with a wedge of orange.",7/22/2010 20:00
2,264,Grimbergen Blonde,-1,-1,6.7,0,0,0,,,7/22/2010 20:00
3,779,Widdershins Barleywine,-1,-1,9.1,0,0,0,,,7/22/2010 20:00
4,287,Lucifer,-1,-1,8.5,0,0,0,,,7/22/2010 20:00
5,1056,Bitter,-1,-1,4,0,0,0,,,7/22/2010 20:00
6,1385,Winter Warmer,1,13,5.2,0,0,0,,,7/22/2010 20:00
7,1099,Winter Welcome 2007-2008,-1,-1,6,0,0,0,,,7/22/2010 20:00
8,1099,Oatmeal Stout,3,42,5,0,0,0,,,7/22/2010 20:00
9,501,Espresso Porter,-1,-1,0,0,0,0,,,7/22/2010 20:00
10,545,Chocolate Stout,3,42,0,0,0,0,,,7/22/2010 20:00
11,742,Hitachino Nest Real Ginger Brew,-1,-1,7,0,0,0,,,7/22/2010 20:00
12,779,JuJu Ginger,-1,-1,4,0,0,0,,,7/22/2010 20:00
13,545,The Kidd Lager,7,86,0,0,0,0,,,7/22/2010 20:00
14,1099,Imperial Stout,3,42,7,0,0,0,,,7/22/2010 20:00
15,1315,Oak-Aged Belgian Tripel,-1,-1,9,0,0,0,,,7/22/2010 20:00
16,168,Ultrablonde,-1,-1,8,0,0,0,,,7/22/2010 20:00
17,1023,Wiesen Edel Weisse,4,50,6.2,0,0,0,,,7/22/2010 20:00
18,39,Old Foghorn 2001,-1,-1,10,0,0,0,,,7/22/2010 20:00
19,196,Framboise,-1,-1,6,0,0,0,,,7/22/2010 20:00
20,483,Cow Palace Scotch Ale 1998,1,15,8.7,0,0,0,,,7/22/2010 20:00
21,1142,Bigfoot 2001,-1,-1,9.6,0,0,0,,,7/22/2010 20:00
22,1142,Bigfoot 2002,-1,-1,9.6,0,0,0,,,7/22/2010 20:00
23,1142,Bigfoot 2003,-1,-1,9.6,0,0,0,,,7/22/2010 20:00
24,1142,Bigfoot 2004,-1,-1,9.6,0,0,0,,,7/22/2010 20:00
25,1142,Bigfoot 2005,-1,-1,9.6,0,0,0,,,7/22/2010 20:00
26,1220,Winter Ale,1,13,5.9,0,0,0,,,7/22/2010 20:00
27,878,Full Moon Winter Ale,5,72,5.6,0,0,0,,This full-bodied ale is brewed with roasted malts and a hint of Dark Belgian sugar for a perfectly balanced taste.,7/22/2010 20:00
28,935,Odell IPA,3,31,7,0,0,0,,"We took the traditional IPA, originally shipped from England to India in the 1700's, and made it bolder and more flavorful - American Style. We've added new varieties of highly aromatic American hops to create a distinctive bitterness profile and an incredible hop character.",7/22/2010 20:00
29,1271,Ornery Amber Lager,8,95,0,0,0,0,,Ornery Amber is brewed with a blend of the finest European hops and gently roasted malts.,7/22/2010 20:00
30,935,Cutthroat Porter,2,25,4.8,0,0,0,,"Not quite a stout but definitely no lightweight, Cutthroat Porter is smooth and robust. Inspired by the classic London porters, we use dark roasted malts to create a deep, rich color and flavor that hint at chocolate and coffee. We named it Cutthroat Porter as our tribute to the Colorado state fish - with its own rich heritage and unmistakable dark coloring. And while we're big fans of small batches, here's to the currently threatened Cutthroat population reaching mass quantities.",7/22/2010 20:00
31,1271,Maple Nut Brown Ale Ale,3,38,0,0,0,0,,Maple syrup is added to each barrel of Maple Nut Brown Ale to impart roasted sweetness balancing the nut flavor produced by chocolate malts.,7/22/2010 20:00
32,1271,Cocoa Porter,-1,-1,0,0,0,0,,,7/22/2010 20:00
33,190,Jenlain Blonde,-1,-1,7.5,0,0,0,,,7/22/2010 20:00
34,196,Blonde,-1,-1,7.5,0,0,0,,,7/22/2010 20:00
35,432,Flemish Primitive Wild Ale (Demon Fish),-1,-1,9,0,0,0,,,7/22/2010 20:00
36,294,Witkap-Pater Tripel,-1,-1,7.5,0,0,0,,,7/22/2010 20:00
37,1175,Winter Cheer,3,38,0,0,0,0,,,7/22/2010 20:00
38,743,Canaster Winter Scotch,-1,-1,8.7,0,0,0,,,7/22/2010 20:00
39,1307,16,-1,-1,10,0,0,0,,,7/22/2010 20:00
40,1307,Quelque Chose,5,70,8,0,0,0,,"Quelque Chose was launched in January 1996. This versatile beer was specifically developed as a winter beer because, when warmed to 70ÂºC (160ÂºF), it can be taken as a hot drink. On the other hand, on the rocks, it is a wonderful aperitif. The cherries are soaked for months in slightly bitter ale before being blended into the beer. Quelque Chose is made with dark roasted malts, and the end result is something commonly known as an authentic nectar. The most original of the Unibroue line, it is highly appreciated by winter-sports enthusiasts.",7/22/2010 20:00
41,277,Kriek,-1,-1,7,0,0,0,,,7/22/2010 20:00
42,170,BiÃ¨re Darbyste,11,116,0,0,0,0,,,7/22/2010 20:00
43,723,Maracaibo Especial,3,38,7.5,0,0,0,,"A rich brown ale inspired by the enigmatic monastic brews of Belgium, and the mysterious mist shrouded jungles of the tropics. Brewed with real cacao, and spiced with cinnamon and sweet orange peel for a sensual delight. A brew to be sipped, savored, and enjoyed!",7/22/2010 20:00
44,432,Flemish Primitive Wild Ale (Pin Head),-1,-1,9,0,0,0,,,7/22/2010 20:00
45,723,Calabaza Blanca,5,72,4.8,0,0,0,,"Aged in large oak casks and refermented in the bottle, Calabaza Blanca is a Belgian Biere Blanche. Spiced with orange peel and corriander, you'll find it refreshingly tart, with a wonderfully dry finish.",7/22/2010 20:00
46,901,Porter,2,25,0,0,0,0,,,7/22/2010 20:00
47,901,Cardinal Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
48,176,Zinnebir Xmas,-1,-1,6.6,0,0,0,,,7/22/2010 20:00
49,974,Bridal Ale 2005,-1,-1,0,0,0,0,,,7/22/2010 20:00
50,176,Zinnebir,3,26,0,0,0,0,,,7/22/2010 20:00
51,432,Saison Imperiale,-1,-1,8.5,0,0,0,,,7/22/2010 20:00
52,170,La Moneuse,-1,-1,8,0,0,0,,,7/22/2010 20:00
53,901,Red Sled Winter Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
54,39,Christmas Ale 2007,-1,-1,0,0,0,0,,,7/22/2010 20:00
55,176,Equinox Dark Belgian Winter,-1,-1,8,0,0,0,,,7/22/2010 20:00
56,856,Serafijn Christmas Angel,-1,-1,8,0,0,0,,,7/22/2010 20:00
57,160,Obovoid Empirical Stout,3,43,8,0,0,0,,,7/22/2010 20:00
58,1221,Furious Beer,3,31,6,0,0,0,,"Like Hops? You'll like this fire-hued beer. This is the beer I have always dreamed of making. This is the beer that would come to mind while spending the last two years tearing down walls, hanging sheetrock, moving kegs, power washing the ceilings, arguing with various agencies, and cutting the water main. 

Without Golden Promise malt, made by family-owned Simpsons Malt, Furious would just be pissed off-ed. From Scotland, this malt is still produced in the tradition of turning over the barley by hand, resulting in a malt that is unsurpassed in its quality. Golden Promise is also used extensively by premium whisky distilleries such as The Macallan. This malt provides the backbone for the intense hop character. Four American hop varieties are used at a rate of over three pounds per barrel. The result is a rich malt sweetness infused with bright hop flavor and aroma from beginning to end. Oh yeah, it's about 6% alcohol and around 100 IBUs.",7/22/2010 20:00
59,1221,Bender Beer,3,38,5.1,0,0,0,,"This beer is an amalgamation of styles; brown/porter/apa. Five distinct malts, including two from Belgium, give this beer added complexity and depth. We also add oatmeal to this beer to give it a smooth texture not usually associated with this type of beer. We add large amounts of American finishing hops to give Bender a citrus hop aroma because... we like hops. This is a session beer weighing in around 5% alcohol and 25 IBUs. Grab one today, we think you will want another!",7/22/2010 20:00
60,1315,Oak Aged Ebenezer,-1,-1,9.4,0,0,0,,,7/22/2010 20:00
61,160,Killer Penguin,3,35,10,0,0,0,,,7/22/2010 20:00
62,236,Oatmeal Stout,3,42,0,0,0,0,,,7/22/2010 20:00
63,935,Isolation Ale,11,141,6,0,0,0,,"Ever been in a warm, cozy cabin and had a secret desire to get snowed in? To celebrate the winter season, we offer our Isolation Ale - a traditional winter brew made with premium malts imported from England. It's just one of the reasons Isolation Ale stands alone.",7/22/2010 20:00
64,501,Festive Ale 2007,-1,-1,0,0,0,0,,,7/22/2010 20:00
65,586,Bourbon County Stout 2007,-1,-1,13,0,0,0,,,7/22/2010 20:00
66,670,Twelve Days,3,42,5.5,0,0,0,,,7/22/2010 20:00
67,1056,Seriously Bad Elf,-1,-1,9,0,0,0,,,7/22/2010 20:00
68,905,Big Shot Seasonal Ale,2,25,0,0,0,0,,,7/22/2010 20:00
69,923,God Jul - Winter Ale,3,42,8.5,0,0,0,,"A dark ale brewed specially for the Christmas season, with a rich, complex taste of caramel. This is a strong, dark and rather sweet Christmas Beer â€“ just the way we think a Christmas beer should be.",7/22/2010 20:00
70,1142,Harvest Ale 2007,3,26,6.7,0,0,0,,,7/22/2010 20:00
71,161,Nut Cracker Ale,11,141,5.9,0,0,0,,"Nutcracker Ale is Boulevardâ€™s holiday gift for real beer lovers. This hearty, warming brew is a classic winter ale, deep amber in color, with hints of molasses balanced by the â€œspicinessâ€ of freshly harvested Chinook hops.",7/22/2010 20:00
72,779,Goosinator Smoked Doppelbock 2007,8,95,0,0,0,0,,,7/22/2010 20:00
73,779,Snow Bound Winter Ale,-1,-1,8.6,0,0,0,,,7/22/2010 20:00
74,779,Warrior IPA,3,31,6.6,0,0,0,,,7/22/2010 20:00
75,266,Petrus Oud Bruin,-1,-1,5.5,0,0,0,,,7/22/2010 20:00
76,266,Petrus Gouden Tripel Ale,-1,-1,7.5,0,0,0,,,7/22/2010 20:00
77,266,Petrus Blond Ale,-1,-1,6.6,0,0,0,,,7/22/2010 20:00
78,266,Petrus Dubbel Bruin Ale,5,60,6.5,0,0,0,,,7/22/2010 20:00
79,266,Petrus Speciale,3,26,5.5,0,0,0,,,7/22/2010 20:00
80,1202,Weizengold Hefefein,4,50,5.1,0,0,0,,"Stiegl Weizengold. It has 12o original gravity; the choicest ingredients and a top fermentation process are responsible for the highest possible quality and an unmistakable flavor. It is brewed according to the classic wheat beer recipe: 60 % wheat malt and 40 % barley malt, top fermentation and in compliance with the Purity Law of 1516.  This fine yeast wheat beer specialty is a refreshing, natural and stimulating beer brand.",7/22/2010 20:00
81,160,Never Summer Ale,11,141,5.94,0,0,0,,,7/22/2010 20:00
82,1264,Modern Monks Belgian Blonde,3,26,0,0,0,0,,,7/22/2010 20:00
83,1264,Grand Cru,-1,-1,0,0,0,0,,,7/22/2010 20:00
84,210,JÃ¶rger WeiÃŸe Hell,4,50,0,0,0,0,,,7/22/2010 20:00
85,1272,OSB Premium Ale,-1,-1,4.5,0,0,0,,,7/22/2010 20:00
86,425,Morocco Ale,-1,-1,5.5,0,0,0,,,7/22/2010 20:00
87,1047,Glacier Ale,3,33,0,0,0,0,,,7/22/2010 20:00
88,1047,Bent Nail IPA,3,31,0,0,0,0,,,7/22/2010 20:00
89,879,Espresso Porter,-1,-1,0,0,0,0,,,7/22/2010 20:00
90,879,Harvest Ale,3,26,0,0,0,0,,,7/22/2010 20:00
91,879,Stillwater Rye,-1,-1,0,0,0,0,,,7/22/2010 20:00
92,879,Sharptail Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
93,879,Fat Belly Amber,3,33,0,0,0,0,,,7/22/2010 20:00
94,879,Whitetail Wheat,8,95,0,0,0,0,,,7/22/2010 20:00
95,879,Sandbagger Gold,-1,-1,0,0,0,0,,,7/22/2010 20:00
96,901,Brunette Nut Brown Ale,3,38,0,0,0,0,,,7/22/2010 20:00
97,901,Irish Red,-1,-1,0,0,0,0,,,7/22/2010 20:00
98,901,Belgian Wit,-1,-1,0,0,0,0,,,7/22/2010 20:00
99,901,EOS Hefeweizen,4,50,0,0,0,0,,,7/22/2010 20:00
100,901,India Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
101,1185,Winter Ale,1,13,6.3,0,0,0,,,7/22/2010 20:00
102,1260,Pride & Joy Mild Ale,1,10,0,0,0,0,,,7/22/2010 20:00
103,1260,Robert the Bruce Scottish Ale,1,15,7,0,0,0,,"A big malty body from chocolate and roasted malts, well balanced with just the right combination of hops. Robust yet smooth, a true malt-lover's delight.",7/22/2010 20:00
104,1056,Lump of Coal Dark Holiday Stout,3,42,8,0,0,0,,,7/22/2010 20:00
105,1056,Warm Welcome Nut Browned Ale,3,38,6,0,0,0,,,7/22/2010 20:00
106,884,Pendle Witches Brew,3,26,5.1,0,0,0,,,7/22/2010 20:00
107,345,Carnegie Stark-Porter,2,25,5.5,0,0,0,,,7/22/2010 20:00
108,727,Harvest Ale 2002,1,13,11.5,0,0,0,,,7/22/2010 20:00
109,1075,Woody Organic IPA,3,31,6.2,0,0,0,,,7/22/2010 20:00
110,620,Adriaan,-1,-1,5,0,0,0,,,7/22/2010 20:00
111,304,Leute Bok Bier,7,90,7.5,0,0,0,,,7/22/2010 20:00
112,905,La Folie Falling Rock,-1,-1,6,0,0,0,,,7/22/2010 20:00
113,1315,Oak Aged IPA,-1,-1,6,0,0,0,,,7/22/2010 20:00
114,304,Tikka Gold,3,26,5,0,0,0,,,7/22/2010 20:00
115,179,La Divine Double Blond,-1,-1,7.5,0,0,0,,,7/22/2010 20:00
116,179,La Divine Tripel Amber,-1,-1,9,0,0,0,,,7/22/2010 20:00
117,292,Ename Tripel,-1,-1,8.5,0,0,0,,,7/22/2010 20:00
118,827,Triple Dipsea Belgian,-1,-1,9.2,0,0,0,,,7/22/2010 20:00
119,1019,Oktoberfest Weizen,-1,-1,5.7,0,0,0,,,7/22/2010 20:00
120,1029,Imperial Hefeweizen,-1,-1,7.5,0,0,0,,,7/22/2010 20:00
121,481,Triple Exultation Old Ale,1,13,9.7,0,0,0,,,7/22/2010 20:00
122,130,Organic Gingerbread Ale,-1,-1,6.8,0,0,0,,,7/22/2010 20:00
123,1064,Falcon Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
124,441,Buzzsaw Brown,3,38,4.8,0,0,0,,"By 1915, Bend, Oregon, was alive with the sound of the buzz saw, as two of the country's largest pine sawmills set up shop on the banks of the Deschutes River.  The mills are  gone now, but the smokestacks still stand testament to Bend's humble beginnings. 

Buzzsaw Brown is an easy-drinking beer that is refreshing after a hard dayâ€™s work. The timber mills in Bend may be closed, but whether your adventure includes a day of scaling rock faces, hitting 18 holes or skiing the slopes in spring, Buzzsaw Brown is the perfect end to a fun-filled day.

â€œBuzzsaw Brown is one of my favorite beers,â€ says Deschutes Brewery Brewmaster Larry Sidor. â€œThe unique combination of European and American malts makes it a very food friendly beer that pairs well with a wide variety of flavors.â€",7/22/2010 20:00
125,369,Eisenbahn South American Pale Ale (S.A.P.A.),3,26,0,0,0,0,,,7/22/2010 20:00
126,584,Geist Bock,7,90,6.1,0,0,0,,"This is one of our rare lagers brewed in the style of the German Heiliges Geist Bock, or Holy Ghost Bock. The name refers to the lighter nature of the beer as opposed to the darker and heavier Doppel Bock and Mai Bock also brewed during the spring in Germany. There is a rich malt flavor, a firm German style lager head, and a clean lagered finish to this beer.  Available on draft or in 12 oz. bottles.",7/22/2010 20:00
127,623,Troll Porter,2,25,0,0,0,0,,,7/22/2010 20:00
128,397,Dark Ale,1,10,4.5,0,0,0,,"A dark brew full of promise. Coopers Dark Ale is a journey in taste, starting fresh and creamy, and finishing with a lingering coffee flavour. 

Conditioned and naturally brewed using the top fermentation method, Coopers 'Dark' is made using roasted and chocolate malts, giving it a rich dark colour and unique flavour. 

Coopers Dark Ale has no additives and no preservatives.",7/22/2010 20:00
129,441,Cinder Cone Red,3,33,5.4,0,0,0,,"Cinder Cone Red's diverse selection of hops and barley captivates thirsty palates with its toffee-like flavor, intense citrus aroma and defined bitterness. Located on the northern slope of Mt. Bachelor, the Cinder Cone was also known as \Red Hill\"" due to its reddish color that is revealed as the seasons change.",7/22/2010 20:00
130,562,LTD 02 Lager,7,90,6.4,0,0,0,,,7/22/2010 20:00
131,189,Saison Vielle Provision,-1,-1,6.5,0,0,0,,,7/22/2010 20:00
132,130,Organic Barley Wine Ale 2005,-1,-1,9.5,0,0,0,,,7/22/2010 20:00
133,562,Old Boardhead 2006,-1,-1,9,0,0,0,,,7/22/2010 20:00
134,622,Blue Dot Double India Pale Ale,3,32,7,0,0,0,,,7/22/2010 20:00
135,562,Nugget,3,33,0,0,0,0,,,7/22/2010 20:00
136,1175,American Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
137,236,471 Extra ESB,-1,-1,7.8,0,0,0,,,7/22/2010 20:00
138,935,Odell Red Ale,3,33,6.5,0,0,0,,"The Rocky Mountain Goat is no ordinary goat. Just like Odell Red is no ordinary red. 

We took the American-style red to a whole new level by adding a variety of aggressive American hopsâ€”giving this ale a distinctive fresh hop aroma and flavor. 

We think you'll agree this red has some serious kick.",7/22/2010 20:00
139,335,Long Leg English Fuggles Hop Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
140,671,Summer Lightning,-1,-1,5,0,0,0,,,7/22/2010 20:00
141,255,Haymaker Extra Pale Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
142,447,Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
143,447,Silk Lady,3,26,4.4,0,0,0,,,7/22/2010 20:00
144,447,Danger Ale,3,38,5.2,0,0,0,,,7/22/2010 20:00
145,447,Irish Style Ale,-1,-1,5.2,0,0,0,,,7/22/2010 20:00
146,1392,Yeti Special Export,8,95,7,0,0,0,,,7/22/2010 20:00
147,1151,Steelie Brown Ale,3,38,0,0,0,0,,,7/22/2010 20:00
148,441,Bond Street 19th Anniversary,-1,-1,8.7,0,0,0,,,7/22/2010 20:00
149,1151,Trumpeter,3,42,0,0,0,0,,,7/22/2010 20:00
150,1264,Nitro Porter,2,25,0,0,0,0,,,7/22/2010 20:00
151,62,Fourteen,-1,-1,9.46,0,0,0,,,7/22/2010 20:00
152,919,Old Stock Ale 2007,1,13,11.7,0,0,0,,,7/22/2010 20:00
153,160,Cold Hop,1,2,6.5,0,0,0,,,7/22/2010 20:00
154,742,Hitachino Nest Espresso Stout,-1,-1,7.5,0,0,0,,,7/22/2010 20:00
155,433,Witte,-1,-1,5,0,0,0,,,7/22/2010 20:00
156,432,Slaapmutske Triple Nightcap,-1,-1,8.1,0,0,0,,,7/22/2010 20:00
157,723,Biere de Mars,1,13,7,0,0,0,,A sustaining beer that is brewed to comfort in the gusty ides of March and welcome in a wealth of warmer weather.,7/22/2010 20:00
158,300,Kerst Pater Special Christmas Beer,-1,-1,9,0,0,0,,,7/22/2010 20:00
159,432,Zoetzuur Flemish Ale,-1,-1,7,0,0,0,,,7/22/2010 20:00
160,869,WPA (Wheat Pale Ale),-1,-1,0,0,0,0,,,7/22/2010 20:00
161,869,Smoked Hefe,8,95,0,0,0,0,,,7/22/2010 20:00
162,1084,The Unforgiven Amber Ale,3,33,5.8,0,0,0,,,7/22/2010 20:00
163,192,Strange Ghost,-1,-1,8,0,0,0,,,7/22/2010 20:00
164,595,Duke IPA,3,31,5.1,0,0,0,,,7/22/2010 20:00
165,595,Broad Axe Stout,3,42,5,0,0,0,,,7/22/2010 20:00
166,595,Northern Light Lager,8,95,4.4,0,0,0,,,7/22/2010 20:00
167,31,Podge Belgian Imperial Stout,3,42,10.5,0,0,0,,,7/22/2010 20:00
168,307,Okocim Porter,2,25,8.3,0,0,0,,,7/22/2010 20:00
169,458,1809,-1,-1,5,0,0,0,,,7/22/2010 20:00
170,433,Pannepot,-1,-1,10,0,0,0,,,7/22/2010 20:00
171,604,Samurai,-1,-1,5.1,0,0,0,,"Looking for something a little different? Brewed with rice and barley malts, Samurai is an easy drinking, unfiltered ale that changes the status quo for unfiltered beers. The addition of rice gives Samurai a slightly fruity, crisp, refreshing and clean taste. This is definitely not your everyday unfiltered beer.",7/22/2010 20:00
172,122,Crystal Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
173,177,Gavroche French Red Ale,-1,-1,8.5,0,0,0,,,7/22/2010 20:00
174,1138,Coney Island Lager,-1,-1,0,0,0,0,,,7/22/2010 20:00
175,191,La BiÃ¨re des Collines van de Saisis,-1,-1,0,0,0,0,,,7/22/2010 20:00
176,211,Dark Beer / StiftsbrÃ¤u,-1,-1,0,0,0,0,,,7/22/2010 20:00
177,723,LuciÃ©rnaga,5,64,6.5,0,0,0,,"An artisan pale ale brewed in the Grand Cru tradition. Enjoy its golden effervescence and gentle hop aroma. Coriander and Grains of Paradise round out the spicy palate, melting o so softly into a silken finish of hoppiness and bliss! Make any season a celebration!",7/22/2010 20:00
178,202,CuvÃ©e des Champions 2003-2004,5,70,0,0,0,0,,,7/22/2010 20:00
179,859,Beer Geek Breakfast,3,43,7.5,0,0,0,,"Breakfast is the most important meal of the day, many say, and if you are a beer geek there is no better way to start the day than with a powerful, complex morning stout. The unique mix of oats and coffee gives this beer large body and power, while the coffee, at the same time, creates a nice balance.",7/22/2010 20:00
180,432,Flemish Primitive Wild Ale (Spoon Whacker),-1,-1,9,0,0,0,,,7/22/2010 20:00
181,39,Bock,7,90,5.5,0,0,0,,,7/22/2010 20:00
182,810,Double India Pale Ale,3,26,8.6,0,0,0,,,7/22/2010 20:00
183,984,Old Bawdy 2006,-1,-1,10,0,0,0,,,7/22/2010 20:00
184,397,Extra Strong Vintage Ale,-1,-1,7.5,0,0,0,,"If fine wine were beer it would no doubt be Coopers Extra Strong Vintage Ale. This strong ale imparts rich full flavours that are suitable for maturation. Brewed with choice malts and an extended top fermentation, Coopers Extra Strong Vintage Ale will improve with age, becoming more interesting and complex in flavour for up to 18 months. The results are well worth the wait!",7/22/2010 20:00
185,481,Certified Organic India Pale Ale,3,26,7,0,0,0,,,7/22/2010 20:00
186,481,Certified Organic Porter,2,25,5.5,0,0,0,,,7/22/2010 20:00
187,481,Certified Organic Extra Pale Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
188,481,Certified Organic Amber Ale,3,33,4.8,0,0,0,,"Eel River Brewing Company, brewers of California's first Certified Organic Ale, proudly brings you our Organic Amber Ale. Unique in flavor and purity, this medium bodied beer has a hoppy bouquet and a distinctive rich taste with a caramel-like sweetness that is balanced with a liberal dose of certified organic Pacific Gems and Hallertau hops, imported from New Zealand. Pure taste, pure ingredients, pure good.",7/22/2010 20:00
189,706,Farm House Ale,-1,-1,6.7,0,0,0,,,7/22/2010 20:00
190,255,Beer Town Brown,3,38,0,0,0,0,,,7/22/2010 20:00
191,890,Tanners Jack,-1,-1,4.4,0,0,0,,,7/22/2010 20:00
192,62,Mephistopheles Stout,3,42,16.03,0,0,0,,,7/22/2010 20:00
193,923,NÃ¸gne Ã˜ Brown Ale,3,38,4.5,0,0,0,,"A dark brown English ale, in which classic English malts meet the spicy hoppiness of the new world.  Recommended serving temperature 8Â°C/45Â°F. Goes very well with â€˜pub grub.â€™",7/22/2010 20:00
194,1204,Vertical Epic 07.07.07,-1,-1,8.4,0,0,0,,,7/22/2010 20:00
195,1136,Ringwood Brewery Old Thumper Extra Special Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
196,1136,Export Ale,3,26,5.1,0,0,0,,,7/22/2010 20:00
197,950,Bourbon Barrel Porter,-1,-1,9.1,0,0,0,,,7/22/2010 20:00
198,1204,Old Guardian Barley Wine 2007,-1,-1,11.26,0,0,0,,,7/22/2010 20:00
199,892,White Christmas,-1,-1,6.5,0,0,0,,,7/22/2010 20:00
200,175,Winter,-1,-1,10.5,0,0,0,,,7/22/2010 20:00
201,765,Undercover Investigation Shut-Down Ale,3,26,9.28,0,0,0,,,7/22/2010 20:00
202,727,Harvest Ale 2006,1,13,11.6,0,0,0,,,7/22/2010 20:00
203,202,Classic Gueuze,5,70,0,0,0,0,,,7/22/2010 20:00
204,1315,Gueuze-Lambic,5,70,6.5,0,0,0,,,7/22/2010 20:00
205,484,Schwarzbier / Dunkel,7,86,4.9,0,0,0,,,7/22/2010 20:00
206,779,Sawtooth Ale,3,26,0,0,0,0,,,7/22/2010 20:00
207,779,Pole Star Pilsner,-1,-1,0,0,0,0,,,7/22/2010 20:00
208,935,90 Shilling,1,7,5.3,0,0,0,,"We introduced 90 Shilling, our flagship beer, at our opening party in 1989. For a while, we'd been wondering - what would happen if we lightened up the traditional Scottish ale? The result is an irresistibly smooth and delicious medium-bodied amber ale. The name 90 Shilling comes from the Scottish method of taxing beer. Only the highest quality beers were taxed 90 Shillings. A shilling was a British coin used from 1549 to 1982. We think you'll find this original ale brilliantly refreshing, and worth every shilling.",7/22/2010 20:00
209,905,Sunshine Wheat,11,116,4.8,0,0,0,,"SUNSHINE WHEAT is a great beer for trouncing thirst.  Yet, it has a depth of character that inspires a quiet momentâ€™s reflection. Sunshine Wheat swirls in the mouth with ripples of coriander and orange peel tartness, settling nicely into a tranquil sea of apple and honey tones.  A filtered wheat beer, Sunshine offers a crisp, refreshing alternative to heavier-bodied heffe-weizens.",7/22/2010 20:00
210,174,Grand Cru,-1,-1,9.5,0,0,0,,,7/22/2010 20:00
211,70,Der Weisse Bock,4,55,8.5,0,0,0,,,7/22/2010 20:00
212,176,Stouterik / The Brussels Stout,-1,-1,0,0,0,0,,,7/22/2010 20:00
213,779,Black Jack Porter,2,25,0,0,0,0,,,7/22/2010 20:00
214,161,Lunar Ale,3,38,5.1,0,0,0,,"Our first new year-round brand launch since 1996, Lunar Ale is in a category all its own. Brewed using a unique aromatic yeast, this refreshing variety is best described as a cloudy brown ale with a complex, malty aroma and flavor, and a crisp, dry finish.",7/22/2010 20:00
215,604,Denver Pale Ale / DPA,3,26,5.4,0,0,0,,"Historically Great Divideâ€™s flagship beer, DPAâ€™s record speaks for itself. By continually garnering national and international recognition, DPA has risen to become one of the most award-winning English-style pale ales in the world.

Sporting a brilliant copper hue and an assertive floral hop aroma, DPA is known for its smooth, malty middle, which is expertly complemented with hearty and complex hop flavor. DPAâ€™s extraordinary hop finish is marked by crisp yet moderate hop bitterness. Its well-balanced profile makes DPA the perfect beer to accompany a hearty mountain picnic or a night on the town. For those who seek beers characterized by excitement, flavor and distinction, Denver Pale Ale is the natural choice.",7/22/2010 20:00
216,296,Grotten Flemish Ale,5,72,7.7,0,0,0,,,7/22/2010 20:00
217,1316,Grand Cru,-1,-1,9,0,0,0,,,7/22/2010 20:00
218,501,Summer Common,-1,-1,0,0,0,0,,,7/22/2010 20:00
219,1185,Golden Ale,-1,-1,4.7,0,0,0,,,7/22/2010 20:00
220,174,Ambree,-1,-1,9,0,0,0,,,7/22/2010 20:00
221,296,Pater 6,5,60,6.7,0,0,0,,"This name became a reference. This beer is mostly pointed out with its product name: â€œa Paterkeâ€. 

This â€œPaterkeâ€ is a chestnut coloured dark beer with a high fermentation (6.7 alcohol content) and a full taste.",7/22/2010 20:00
222,187,Blanche de Namur,-1,-1,4.5,0,0,0,,,7/22/2010 20:00
223,905,Skinny Dip,3,37,4.2,0,0,0,,"Ever tried a Skinny Dip? You wouldn't be alone. Featured by both Men's Journal and the Today Show as a favorite summer brew, this full-bodied, highly drinkable beer makes a splash every summer in our Seasonal line-up. Cascade hops frolic with a hint of lime leaf, giving the beer complexity that's surprisingly refreshing.",7/22/2010 20:00
224,174,Blanche Double,-1,-1,6,0,0,0,,,7/22/2010 20:00
225,236,Summer Bright Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
226,905,Mothership Wit,-1,-1,4.8,0,0,0,,"Our first venture into organically-produced beer, Mothership Wit Organic Wheat Beer elevates the zesty Wit or White beers of Belgium. Our far-flung Beer Rangers affectionately refer to our Fort Collins brewery as the Mothership, a name that conjures images of earth shot from space and the interconnectivity of it all. Mothership Wit is brewed with wheat and barley malt, as well as coriander and orange peel spicing resulting in a balance of citrus and sour flavors held in suspension by a bright burst of carbonation.",7/22/2010 20:00
227,696,Lia Fail Stone of Destiny Ale,-1,-1,4.7,0,0,0,,,7/22/2010 20:00
228,395,Premium XB Bluebird Bitter,-1,-1,4.4,0,0,0,,,7/22/2010 20:00
229,1056,IPA,3,31,5.5,0,0,0,,,7/22/2010 20:00
230,167,Houblon,-1,-1,9,0,0,0,,,7/22/2010 20:00
231,935,Double Pilsner,8,95,8.1,0,0,0,,,7/22/2010 20:00
232,708,Creamy Dark,8,95,4.9,0,0,0,,,7/22/2010 20:00
233,757,Premium Pils Edelherb,-1,-1,4.9,0,0,0,,,7/22/2010 20:00
234,590,StÃ¼venbrÃ¤u Maibock,7,90,0,0,0,0,,,7/22/2010 20:00
235,590,Jack of Spades Schwarzbier,7,86,3.9,0,0,0,,,7/22/2010 20:00
236,1179,Shiner Hefeweizen,4,50,5.4,0,0,0,,,7/22/2010 20:00
237,1154,Sapporo Premium Beer,8,95,0,0,0,0,,,7/22/2010 20:00
238,501,Dark German Lager,-1,-1,0,0,0,0,,,7/22/2010 20:00
239,44,Spring Heat Spiced Wheat,-1,-1,5.2,0,0,0,,,7/22/2010 20:00
240,567,Gose,-1,-1,4.6,0,0,0,,,7/22/2010 20:00
241,1176,Pils,-1,-1,5,0,0,0,,,7/22/2010 20:00
242,1274,New,8,95,4.6,0,0,0,,,7/22/2010 20:00
243,369,Eisenbahn Defumada,-1,-1,0,0,0,0,,,7/22/2010 20:00
244,369,Eisenbahn Escura,7,86,0,0,0,0,,,7/22/2010 20:00
245,369,Eisenbahn Dourada,-1,-1,0,0,0,0,,,7/22/2010 20:00
246,501,Fallen Angel Sweet Stout,3,42,0,0,0,0,,,7/22/2010 20:00
247,604,Hot Shot ESB,1,5,5,0,0,0,,"HotShot ESB is an easy-drinking and remarkably smooth Extra Special Bitter, brewed in the classic-English style. More assertively hopped than ordinary bitters, light copper-colored HotShot showcases clean hop flavors, balanced by its slightly fruity nose and light-caramel malt character.

While HotShot is one of Great Divideâ€™s easiest-drinking and lower alcohol beers, its complex flavor profile makes it the perfect session beer for craft beer lovers.",7/22/2010 20:00
248,312,Porter,2,25,8,0,0,0,,,7/22/2010 20:00
249,923,NÃ¸gne Ã˜ Imperial Stout,3,43,9,0,0,0,,"We think the russian tsar would have liked his stout this way. A dark, rich ale in which a generous sweetness with roasted malt bitterness.  Serving temp.10Â°C/50Â°F. Great with vanilla ice cream or dark chocolate.",7/22/2010 20:00
250,923,NÃ¸gne Ã˜ Porter,2,25,7,0,0,0,,"In this quite dark ale, dark malts provide flavors of coffee and dried fruit. Recommended serving temperature 10Â°C/50Â°F.  Try with dark chocolate, cheese, or red meat dishes.",7/22/2010 20:00
251,923,NÃ¸gne Ã˜ Pale Ale,3,26,6,0,0,0,,A refreshing light and hoppy ale. Probably our best allrounder.  Recommended serving temperature 8Â°C/45Â°F.  Ideal with barbequed or smoked meat dishes.,7/22/2010 20:00
252,501,Eccentric Belgian Wheat,-1,-1,0,0,0,0,,,7/22/2010 20:00
253,1265,Oatmeal Stout,3,42,0,0,0,0,,,7/22/2010 20:00
254,1265,Amber Light,8,95,0,0,0,0,,,7/22/2010 20:00
255,1265,New World Wheat,8,95,0,0,0,0,,,7/22/2010 20:00
256,1265,Maibock,7,90,0,0,0,0,,,7/22/2010 20:00
257,1265,Ironwood Dark,3,38,0,0,0,0,,,7/22/2010 20:00
258,1265,Cascade Amber,3,33,0,0,0,0,,,7/22/2010 20:00
259,1265,Alpine Gold,-1,-1,0,0,0,0,,,7/22/2010 20:00
260,624,Illuminator Doppelbock,7,90,6.8,0,0,0,,,7/22/2010 20:00
261,624,Old Princeton Landing IPA,3,31,6.1,0,0,0,,,7/22/2010 20:00
262,624,Paddle Out Stout,3,42,5.2,0,0,0,,,7/22/2010 20:00
263,624,Pillar Point Pale Ale,3,26,4.6,0,0,0,,,7/22/2010 20:00
264,624,Sandy Beach Blonde Hefeweizen,4,50,4.5,0,0,0,,,7/22/2010 20:00
265,624,Mavericks Amber Ale,3,33,4.8,0,0,0,,,7/22/2010 20:00
266,624,Harbor Light Ale,-1,-1,4.8,0,0,0,,,7/22/2010 20:00
267,1126,Leroy Barleywine,-1,-1,0,0,0,0,,,7/22/2010 20:00
268,1126,Oatmeal Stout,3,42,6,0,0,0,,,7/22/2010 20:00
269,1126,Amber,3,33,5,0,0,0,,,7/22/2010 20:00
270,1126,Blur IPA,3,31,0,0,0,0,,,7/22/2010 20:00
271,1126,Pelican Pale,3,26,5,0,0,0,,,7/22/2010 20:00
272,1126,Brew Ribbon,8,95,0,0,0,0,,,7/22/2010 20:00
273,701,Casey Jones Imperial IPA,3,31,7.25,0,0,0,,,7/22/2010 20:00
274,701,Fairfax Coffee Porter,-1,-1,5.5,0,0,0,,,7/22/2010 20:00
275,701,Epiphany Ale,3,33,5.5,0,0,0,,,7/22/2010 20:00
276,701,IPA,3,31,6,0,0,0,,,7/22/2010 20:00
277,701,Chazz Cat Rye,8,95,4.5,0,0,0,,,7/22/2010 20:00
278,701,Shining Star Pale Ale,3,26,5,0,0,0,,,7/22/2010 20:00
279,701,Honey Bunny Blonde Ale,8,95,5.8,0,0,0,,,7/22/2010 20:00
280,701,Kent Lake Kolsch,-1,-1,4,0,0,0,,,7/22/2010 20:00
281,892,Old Blarney Barleywine,-1,-1,10,0,0,0,,,7/22/2010 20:00
282,892,Irish Dry Stout,3,42,4.8,0,0,0,,,7/22/2010 20:00
283,892,Kilt Lifter Scottish Ale,1,15,8,0,0,0,,,7/22/2010 20:00
284,892,India Pale Ale,3,26,6.5,0,0,0,,,7/22/2010 20:00
285,588,Blonde Bock,7,90,7,0,0,0,,,7/22/2010 20:00
286,588,Schwarzbier,7,86,4.3,0,0,0,,,7/22/2010 20:00
287,588,Czech Lager,-1,-1,0,0,0,0,,,7/22/2010 20:00
288,385,Yule Tide,5,61,10,0,0,0,,"The latest addition to Baltimore's own Clipper City Brewing Company - Mutiny Fleet is their holiday brew Yule Tide, a Belgian style triple ale, which like the rest of the Mutiny Fleet is distributed in 22 ounce bombers.",7/22/2010 20:00
289,588,Pilsner,-1,-1,5.3,0,0,0,,,7/22/2010 20:00
290,308,Warka Strong,8,95,7,0,0,0,,European Strong Lager,7/22/2010 20:00
291,1074,Porter,2,25,0,0,0,0,,,7/22/2010 20:00
292,1074,ESB,-1,-1,0,0,0,0,,,7/22/2010 20:00
293,1074,Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
294,1074,Kristall Weizen,8,95,0,0,0,0,,,7/22/2010 20:00
295,1163,ESB (Extra Special Blizzard),-1,-1,6,0,0,0,,,7/22/2010 20:00
296,677,Paint the Town Red,3,33,0,0,0,0,,,7/22/2010 20:00
297,677,Golden Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
298,1004,Train Wreck IPA,3,31,0,0,0,0,,,7/22/2010 20:00
299,1004,Zone 7 Porter,2,25,3.8,0,0,0,,,7/22/2010 20:00
300,1004,Pleasanton Pale,3,26,5.3,0,0,0,,,7/22/2010 20:00
301,1004,Island Wheat,8,95,0,0,0,0,,,7/22/2010 20:00
302,707,Hefeweizen,4,50,5.6,0,0,0,,,7/22/2010 20:00
303,707,Red Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
304,707,Penalty Shot Porter,2,25,5.8,0,0,0,,,7/22/2010 20:00
305,707,India Pale Ale,3,26,7.5,0,0,0,,,7/22/2010 20:00
306,707,Grid Iron Amber Ale,3,33,5.6,0,0,0,,,7/22/2010 20:00
307,707,Boys of Summer Wheat,8,95,3.5,0,0,0,,,7/22/2010 20:00
308,523,Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
309,523,Red Ale,3,33,0,0,0,0,,,7/22/2010 20:00
310,523,Hefeweizen,8,95,0,0,0,0,,,7/22/2010 20:00
311,523,Bitter,-1,-1,0,0,0,0,,,7/22/2010 20:00
312,523,Double IPA,3,31,0,0,0,0,,,7/22/2010 20:00
313,133,Tatonka Stout,3,43,8.5,0,0,0,,,7/22/2010 20:00
314,133,P.M. Porter,2,25,6.4,0,0,0,,,7/22/2010 20:00
315,133,Jeremiah Red,2,22,7.3,0,0,0,,,7/22/2010 20:00
316,133,Piranha Pale Ale,3,26,5.7,0,0,0,,,7/22/2010 20:00
317,133,Harvest Hefeweizen,4,50,4.9,0,0,0,,,7/22/2010 20:00
318,133,Brewhouse Blonde,-1,-1,4.7,0,0,0,,,7/22/2010 20:00
319,133,Nutty Brewnette,3,38,5.9,0,0,0,,,7/22/2010 20:00
320,515,India Pale Ale (IPA),3,31,0,0,0,0,,,7/22/2010 20:00
321,515,Belgian Tripel,-1,-1,0,0,0,0,,,7/22/2010 20:00
322,515,Belgian Abbey,-1,-1,0,0,0,0,,,7/22/2010 20:00
323,515,Stout,3,42,0,0,0,0,,,7/22/2010 20:00
324,515,Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
325,515,Best Bitter,-1,-1,0,0,0,0,,,7/22/2010 20:00
326,515,Hefe Weizen,4,50,0,0,0,0,,,7/22/2010 20:00
327,515,Pilsner,-1,-1,0,0,0,0,,,7/22/2010 20:00
328,515,KÃ¶lsch,-1,-1,0,0,0,0,,,7/22/2010 20:00
329,727,Harvest Ale 2005 (Whisky),-1,-1,11.5,0,0,0,,,7/22/2010 20:00
330,727,Harvest Ale 2005 (Calvados),-1,-1,11.5,0,0,0,,,7/22/2010 20:00
331,727,Harvest Ale 2005 (Sherry),-1,-1,11.5,0,0,0,,,7/22/2010 20:00
332,1072,Old Crustacean Barleywine 2006,-1,-1,11.5,0,0,0,,,7/22/2010 20:00
333,236,Avalanche Amber,3,33,5.4,0,0,0,,,7/22/2010 20:00
334,236,Hefe Proper Ale,8,95,0,0,0,0,,,7/22/2010 20:00
335,935,Levity Amber Ale,3,33,5.1,0,0,0,,"Levity is our lighter take on the amber ale. Munich and honey malts give it a full-bodied flavor and a happy-go-lucky personality. Then we let the finishing hops shine, for a beer that's crisp instead of bitter, as many ambers are. Levity was named by our brewers partly for its light color - and partly for the way it just refuses to take itself too seriously. Hey, we could all use a little levity once in a while.",7/22/2010 20:00
336,935,Easy Street Wheat,11,116,4.6,0,0,0,,"Light and refreshing, Easy Street Wheat is an unfiltered American-style wheat beer. Leaving in the yeast gives the beer a nice, smooth finish and a slightly citrusy flavor. Easy Street Wheat gets its name by brewers \taking it easy\"" and not filtering the beer. However we encourage you to work just a little harder in pouring it: just pour 2/3 of the beer into a glass swirl what's left to stir up the yeast then pour the rest and enjoy.",7/22/2010 20:00
337,161,Boulevard Pale Ale,3,26,5.4,0,0,0,,"Boulevard Pale Ale is a smooth, fruity, well-balanced beer with year-round appeal. A variety of caramel malts impart a rich flavor and amber color, while liberal use of whole hops adds zest and aroma. Pale Ale is the first beer we brewed, and continues to be a perennial favorite.",7/22/2010 20:00
338,161,Bully! Porter,2,25,5.4,0,0,0,,"The intense flavors of dark-roasted malt in Boulevardâ€™s rendition of the classic English porter are perfectly balanced by a generous and complex hop character. Bully! Porterâ€™s robust nature makes it the ideal companion to a variety of foods, from seafood to chocolate.",7/22/2010 20:00
339,795,Bovine Belgian Winter Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
340,795,XX Black Angus Stout,3,42,0,0,0,0,,,7/22/2010 20:00
341,795,Blarney Stone Stout,3,42,0,0,0,0,,,7/22/2010 20:00
342,795,Bison Brown Ale,3,38,0,0,0,0,,,7/22/2010 20:00
343,795,Prairie Pale,3,26,0,0,0,0,,,7/22/2010 20:00
344,795,Wildcat Wheat,8,95,0,0,0,0,,,7/22/2010 20:00
345,161,Boulevard Dry Stout,3,42,4.9,0,0,0,,"Velvety black and perfectly opaque, our bottled Dry Stout is the somewhat livelier companion to our popular draught version of this enduring style. This surprisingly smooth, drinkable beer is a delightful harmony of smoky roasted flavors and tangy, coffee-like notes.",7/22/2010 20:00
346,160,Planet Porter / Boulder Porter,2,25,5.5,0,0,0,,,7/22/2010 20:00
347,195,Amber,-1,-1,8,0,0,0,,,7/22/2010 20:00
348,187,Blanche des Moines,-1,-1,4.5,0,0,0,,,7/22/2010 20:00
349,187,Triple Moine,-1,-1,7.2,0,0,0,,,7/22/2010 20:00
350,272,Arabier,5,65,9,0,0,0,,"An arabier is a pure malt beer 8Â°vol/alc brewed with flower Nugget-hops from Poperinge. It has the special dry-hopping taste and aroma, so appreciated by beer lovers all over the world. It is one of the two main beers from De Dolle Brouwers throughout the year. Aging time is limited due to the fact that hop bitterness is declining with the time. Store arabier cool and dark and serve cool at 10Â°C. Cheers!",7/22/2010 20:00
351,272,Bos Keun,5,65,8.9,0,0,0,,,7/22/2010 20:00
352,175,Grand Cru,-1,-1,10.5,0,0,0,,,7/22/2010 20:00
353,272,Oerbier,-1,-1,7.5,0,0,0,,,7/22/2010 20:00
354,272,Dulle Teve / Mad Bitch,-1,-1,10,0,0,0,,,7/22/2010 20:00
355,278,Vuuve,-1,-1,0,0,0,0,,,7/22/2010 20:00
356,284,Gouden Carolus Tripel,-1,-1,9,0,0,0,,,7/22/2010 20:00
357,284,Gouden Carolus Ambrio 1471,-1,-1,8,0,0,0,,,7/22/2010 20:00
358,269,Pauwel Kwak,-1,-1,8,0,0,0,,"LOOK:
Kwak is recognisable by its deep bright amber colour and a dense, creamy coloured head. The pale wood of the glass holder makes a pleasant contrast with the beer.

SMELL:
You will smell a mellow, fruity and malty aroma with a slightly spicy character (coriander, hops). Additional earthy and very subtle aromas of banana and perhaps also a whiff of pineapple or mango in the background.

TASTE:
Discover a very mellow, fruity attack, a nougat-like solidity, and a slightly spicy character with hints of liquorice passing into a warm finish that reminds you of caramelised banana. The bitterness always remains in the background but in the end emerges delicately.",7/22/2010 20:00
359,285,Delirium NoÃ«l,5,72,10,0,0,0,,,7/22/2010 20:00
360,7,Rochefort 10,5,62,11.3,0,0,0,,"Reddish-brown colour, with a very compact head and an aroma of figs, feels like honey in the mouth. The alcohol profile is a major component in the flavour of this rich ale. It is very similar to 6 and 8, but has much more of everything. Some may find the high alcohol content to be disagreeable.",7/22/2010 20:00
361,167,McChouffe,3,29,8.5,0,0,0,,"Description : Dark Ale, strong, spicy, lightly hoppy, with evoluting taste. Natural Beer, bottle refermented, unfiltered, not pasteurised and without any additives

Alcohol : 8,5% alc./vol.

Original gravity : 16 Â°Plato

Storage : Store the bottles vertically in a cold place, sheltered from light. The yeast deposit can either be drunk or left according to taste

Serve at : 8 to 12Â°C (botlle)",7/22/2010 20:00
362,236,471 Double IPA,3,31,9.2,0,0,0,,,7/22/2010 20:00
363,167,La Chouffe Golden Ale,5,65,8,0,0,0,,,7/22/2010 20:00
364,184,Saison Voisin,-1,-1,5,0,0,0,,,7/22/2010 20:00
365,322,Olde Expensive Ale,1,13,0,0,0,0,,,7/22/2010 20:00
366,110,Quadrupel,-1,-1,10,0,0,0,,,7/22/2010 20:00
367,110,Tripel,-1,-1,8,0,0,0,,,7/22/2010 20:00
368,110,Dubbel,-1,-1,7,0,0,0,,,7/22/2010 20:00
369,903,Old Growler,2,25,6.5,0,0,0,,,7/22/2010 20:00
370,431,Urthel Vlaemse Bock,7,90,7.5,0,0,0,,,7/22/2010 20:00
371,296,Watou Tripel,5,61,7.5,0,0,0,,The flavour of this beer is pleasantly soft and is characterized by a delicate bitterness where the balance between malt and hop is based upon a fruity orange taste with a straight fresh after taste (7.5% alcohol content),7/22/2010 20:00
372,586,Matilda,-1,-1,7,0,0,0,,,7/22/2010 20:00
373,638,Old Engine Oil Special Reserve (aged in malt whisky casks),-1,-1,8,0,0,0,,,7/22/2010 20:00
374,935,Imperial Stout,3,42,7.1,0,0,0,,,7/22/2010 20:00
375,757,EKU 28,7,90,11,0,0,0,,,7/22/2010 20:00
376,757,Eisbock,7,90,9.2,0,0,0,,,7/22/2010 20:00
377,1115,Doppelbock Dunkel,7,92,8.5,0,0,0,,"DoppelBock Dunkel has a pleasant full and creamy body, with a cofeeish aroma. Nicely warming with toffeelike malty sweetness, balanced by a hoppy-bitterness in the finish.",7/22/2010 20:00
378,1385,Special London Ale,1,13,6.4,0,0,0,,,7/22/2010 20:00
379,1385,Oatmeal Stout,3,42,5.2,0,0,0,,,7/22/2010 20:00
380,128,Super,-1,-1,8,0,0,0,,,7/22/2010 20:00
381,128,Wayan,-1,-1,5.6,0,0,0,,,7/22/2010 20:00
382,160,GABF 25th Year Beer,1,5,0,0,0,0,,,7/22/2010 20:00
383,39,Old Foghorn 2006,-1,-1,9.4,0,0,0,,,7/22/2010 20:00
384,21,Grand Cru 2006,-1,-1,10,0,0,0,,,7/22/2010 20:00
385,363,Cerveza Negra,3,42,6.5,0,0,0,,,7/22/2010 20:00
386,363,Cerveza Diablo,8,95,7.5,0,0,0,,,7/22/2010 20:00
387,363,Cerveza Roja,7,84,6,0,0,0,,,7/22/2010 20:00
388,300,Buffalo Belgian Stout,-1,-1,9,0,0,0,,,7/22/2010 20:00
389,238,Rader AmbrÃ©e,-1,-1,0,0,0,0,,,7/22/2010 20:00
390,238,Rader Blonde,-1,-1,6.5,0,0,0,,,7/22/2010 20:00
391,626,Toleration,-1,-1,4.4,0,0,0,,,7/22/2010 20:00
392,1185,English Ale,3,26,0,0,0,0,,,7/22/2010 20:00
393,425,Ripon Jewel Ale,3,26,5.8,0,0,0,,,7/22/2010 20:00
394,200,XTra,-1,-1,4.5,0,0,0,,,7/22/2010 20:00
395,723,Bam BiÃ¨re,5,74,4.5,0,0,0,,"An artisan farmhouse ale that is golden, naturally cloudy, bottle conditioned and dry hopped for a perfectly refreshing balance of spicy malts, hops and yeast.",7/22/2010 20:00
396,1115,Samichlaus Bier 2005,7,90,14,0,0,0,,,7/22/2010 20:00
397,609,Barleywine,3,35,10,0,0,0,,"Our American-style Barleywine undergoes a three hour boil to intensify the caramel malts and the enormous Pacific Northwest hop charge. The result is a rich, estery brew with toffee notes and citrus hop flavors layered throughout. Enjoy this brew fresh today or lay it down for aging to see how the flavors of each vintage evolve.",7/22/2010 20:00
398,1177,Old Godfather,-1,-1,10.2,0,0,0,,,7/22/2010 20:00
399,1023,Aventinus Weizen-Eisbock,7,90,12,0,0,0,,,7/22/2010 20:00
400,1023,Aventinus Weizenstarkbier / Doppel Weizen Bock,4,55,8.2,0,0,0,,"Dark-ruby, almost black-colored and streaked with fine top-fermenting yeast, this beer has a compact and persistent head. This is a very intense wheat doppelbock with a complex spicy chocolate-like arome with a hint of banana and raisins. On the palate, you experience a soft touch and on the tongue it is very rich and complex, though fresh with a hint of caramel. It finishes in a rich soft and lightly bitter impression.",7/22/2010 20:00
401,905,New Belgium Trippel Belgian Style Ale,5,61,8.5,0,0,0,,"Our Trippel Belgian Style Ale (pronounced triple) opens with a bold blast of hops that slowly gives way to the fruity esters implied by our Belgian yeast strain. The Three Graces hand-painted on the label are Zeusâ€™s daughters Aglaia (splendor), Euphrosyne (mirth) and Thalia (good cheer). In the Belgian tradition of brewing singles, doubles and triples, Trippel is the strongest with the longest fermentation. Remarkably smooth and complex, our bottle-conditioned Trippel is spiced with a trace of coriander.",7/22/2010 20:00
402,249,Hennepin Farmhouse Ale,-1,-1,7.7,0,0,0,,,7/22/2010 20:00
403,905,Abbey Belgian Style Ale,5,60,7,0,0,0,,"Winner of four World Beer Cup medals and eight medals at the Great American Beer Fest, Abbey Belgian Ale is the Mark Spitz of New Belgiumâ€™s lineup - but it didnâ€™t start out that way. When Jeff and Kim first sampled the beer at the Lyons Folks Fest, reviews were mixed at best. One of founder Jeffâ€™s first two Belgian style homebrews (along with Fat Tire), Abbey is a Belgian dubbel (or double) brewed with six different malts and an authentic Belgian yeast strain. Abbey is bottle-conditioned, weighs in at 7.0% alcohol by volume, and pairs well with chocolate (or boldly served by itself) for dessert.",7/22/2010 20:00
404,1142,India Pale Ale,3,26,6.8,0,0,0,,,7/22/2010 20:00
405,1142,Bigfoot 2006,-1,-1,9.6,0,0,0,,,7/22/2010 20:00
406,1054,Iron Fist Pale Ale,3,26,0,0,0,0,,An amber pale ale dry hopped with a blend of American hops.,7/22/2010 20:00
407,586,Demolition,8,95,8,0,0,0,,,7/22/2010 20:00
408,723,Oro de Calabaza,5,65,8,0,0,0,,Brewed in the Franco-Belgian tradition of strong golden ales.  Spicy and peppery with a gentle hop bouquet and the beguiling influence of wild yeast.,7/22/2010 20:00
409,723,La Roja,3,33,7.2,0,0,0,,"An artisan amber ale brewed in the Flanders tradition.  Deep amber with earthy caramel, spice, and sour fruit notes developed through natural barrel aging.  Unfiltered, unpasteurized and blended from barrels ranging in age from two to ten months.",7/22/2010 20:00
410,919,Brother Thelonious,-1,-1,9,0,0,0,,,7/22/2010 20:00
411,441,Hop Trip Fresh Hop Pale Ale,3,26,5.5,0,0,0,,"This Fresh Hop Pale Ale is all about celebrating the hop harvest in the fall.  Fresh picked hops have to be added to the brew immediately and in abundance.  Roughly 270 pounds of Crystal hops from Doug Weathers' farm outside Salem, Oregon will be added to the 50 barrel batch in addition to some dry kilned whole flower hops.  That adds up to approximately 5.5 pounds of hops per barrel brewed.  Another deliciously interesting beer in our Bond Street Series.",7/22/2010 20:00
412,130,Organic Belgian Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
413,1192,Nieuw Ligt Grand Cru 2006,-1,-1,12,0,0,0,,,7/22/2010 20:00
414,604,Hibernation Ale,1,13,8.1,0,0,0,,"Great Divideâ€™s award-winning Hibernation Ale is Coloradoâ€™s original strong ale â€“ it has been our winter seasonal each year since 1995. Since that time, Hibernation has become the most sought-after winter beer in Colorado. Hibernationâ€™s massive flavors are so intense that it requires over three months of aging each year. Each summer, while our brewers are still spending their weekends in flip-flops and shorts, they prepare for Julyâ€™s Hibernation brewing schedule.

We cellar Hibernation until late October, when it reaches the peak of perfection. This lengthy aging process gives Hibernation its revered malty richness, complex hop profile and hearty warming character, which is perfect right out of the bottle or cellared for longer periods of time. Hibernation is a lively treat that really beats the winter chill. This scrumptious, collectible, and imminently cellarable ale is only available for six weeks each year, from November 1 to December 15.  Hibernation Ale is the perfect gift or accompaniment to your winter festivities.",7/22/2010 20:00
415,623,Wee Heavy Winter Ale,1,15,0,0,0,0,,,7/22/2010 20:00
416,905,2Â° Below,1,5,6.6,0,0,0,,"Pull on your wool socks and crack open a 2Â° Below Ale. This tasty winter warmer started life as a small batch beer brewed for the Al Johnson Uphill Downhill â€“ a telemark ski race in Crested Butte, Colorado. The Uphill Downhill celebrates the exploits of Al Johnson, letter carrier extraordinaire, who delivered mail by ski in the late 1800â€™s. Dry hopping during fermentation creates a floral nose with a hint of pepper and spicy, subtle undertones. 2Â° Below provides a bright, hoppy palate and a cheery warm afterglow.",7/22/2010 20:00
417,425,Monkey Wrench Dark Ale,2,25,5.3,0,0,0,,,7/22/2010 20:00
418,425,Old Legover,-1,-1,4.1,0,0,0,,,7/22/2010 20:00
419,604,Hercules Double IPA,3,31,9.1,0,0,0,,"Hoppier, maltier and with more alcohol than a standard IPA, Hercules Double IPA definitely is not for the faint of heart. Hercules Double IPA is, however, an elixir fit for the gods. A brash but creamy wonder, Hercules pours a deep orange-coppery color, forming substantial lace in the glass. Hercules Double IPA delivers a huge amount of piney, floral, and citrusy hop aroma and flavor from start to finish. A hefty backbone of nutty, toffee-like malt character balances Herculesâ€™ aggressive, punchy hop profile.",7/22/2010 20:00
420,604,Fresh Hop Pale Ale,3,26,6.1,0,0,0,,"The September hop harvest is a once-a-year opportunity to brew with fresh hops, also called â€œwet hops.â€ Given the perishable nature of just-harvested hop cones, they are shipped overnight to Great Divide shortly after harvest. The morning of the scheduled hop delivery in Denver, Great Divideâ€™s brewers begin brewing Fresh Hop and are ready to hop the beer just as the fresh hops are delivered.

Using fresh hops is a big endeavor, requiring four to five times the volume of hops compared to the usual process of using pelletized hops. This complex process brings impressive results: Fresh Hop is an American-Style Pale Ale with moderate hop bitterness marked by a unique and intensely grassy hop flavor and aroma. Fresh Hop is a superbly refreshing, medium bodied, light-copper colored pale ale.",7/22/2010 20:00
421,98,Twisted Thistle India Pale Ale,3,26,6.1,0,0,0,,,7/22/2010 20:00
422,1315,Espresso Stout,-1,-1,0,0,0,0,,,7/22/2010 20:00
423,441,Inversion IPA,3,31,6.8,0,0,0,,"After several months of experimentation, energy and obsession, Deschutes Breweryâ€™s brewers have triumphed once again.  Inversion I.P.A.'s trio of American hops delivers an over-the-top nose with hints of orange and grapefruit.  Inversion is then dry-hopped for seven days resulting in an added hoppy kick.  To balance the hop character, Deschutesâ€™ brewers used crystal and caraston malts that weave throughout the beer providing soft, complex caramel flavors. 

Just like clear days up on the mountain, Inversion I.P.A. will deliver a path to higher ground.  Inversion I.P.A. is a phenomenal NW-style I.P.A., beckoning all beer drinkers and enticing I.P.A. lovers to invert their world and find clarity above the routine of the everyday.",7/22/2010 20:00
424,844,India Pale Ale,3,26,7.5,0,0,0,,,7/22/2010 20:00
425,844,London Porter,2,25,6.5,0,0,0,,,7/22/2010 20:00
426,742,Hitachino Nest Celebration Ale 2006,-1,-1,9,0,0,0,,,7/22/2010 20:00
427,363,Rubia,8,95,6,0,0,0,,,7/22/2010 20:00
428,562,Session Premium Lager,8,95,5.1,0,0,0,,,7/22/2010 20:00
429,156,Mocny BOSS / BOSS Beer,8,95,8.1,0,0,0,,,7/22/2010 20:00
430,127,La Rossa,7,90,7.2,0,0,0,,,7/22/2010 20:00
431,905,Blue Paddle Pilsener,7,77,4.8,0,0,0,,"Climb on in and grab a paddle. Our first foray into lagered beers, Blue Paddle Pilsener-Lager, is a Czech style pilsener with a refreshing crispness from noble hops and a rich, malty finish. â€˜Blue Paddleâ€™ refers to the implement our warehouse managerâ€™s Grandma once used to lovingly paddle his a** when she caught him stealing sips of her beer. With more body than a traditional Belgian pils, Blue Paddle is reflective of Europeâ€™s finest pilseners.",7/22/2010 20:00
432,367,Lager,8,95,4,0,0,0,,,7/22/2010 20:00
433,70,Hell,-1,-1,4.9,0,0,0,,,7/22/2010 20:00
434,70,Pilsner,-1,-1,4.9,0,0,0,,,7/22/2010 20:00
435,70,Ungespundet Lager Hefetrub,-1,-1,5.2,0,0,0,,,7/22/2010 20:00
436,1188,Keller-Bier,-1,-1,0,0,0,0,,,7/22/2010 20:00
437,1264,Imperial Porter,2,25,0,0,0,0,,,7/22/2010 20:00
438,1264,Amber Ale,3,33,0,0,0,0,,,7/22/2010 20:00
439,905,La Folie,-1,-1,6,0,0,0,,"La Folie Wood-Aged Biere, is our original wood-conditioned beer, resting in French Oak barrels between one and three years before being bottled. . Peter Bouckaert, came to us from Rodenbach â€“ home of the fabled sour red. Our La Folie emulates the spontaneous fermentation beers of Peterâ€™s beloved Flanders with sour apple notes, a dry effervescence, and earthy undertones. New in 2010, we'll do a single bottling of La Folie for the year. Collect the 22oz unique to 2010 designed bottle and start a yearly wood-aged collection of goodness.",7/22/2010 20:00
440,296,Abt 12,5,62,10,0,0,0,,"The absolute top quality in the hierarchy of the St. Bernardus beers. It is also the beer with the highest alcohol content (10.50 %).
A dark ivory coloured beer with a high fermentation. 

The show piece of the brewery. Thanks to its soft and unconditionally genuine aroma, the beer can be smoothly tasted.  The Abt has a very fruity flavour.",7/22/2010 20:00
441,195,Nostradamus,-1,-1,9.5,0,0,0,,,7/22/2010 20:00
442,175,Triple,-1,-1,9,0,0,0,,,7/22/2010 20:00
443,168,Ultrabrune,-1,-1,10,0,0,0,,,7/22/2010 20:00
444,277,PÃ¨re NoÃ«l,-1,-1,0,0,0,0,,,7/22/2010 20:00
445,1375,Bah Humbug,1,13,6,0,0,0,,,7/22/2010 20:00
446,727,Harvest Ale 2005 (Port),-1,-1,11.5,0,0,0,,,7/22/2010 20:00
447,727,Harvest Ale 2005,1,13,11.5,0,0,0,,,7/22/2010 20:00
448,727,Moonraker,-1,-1,7.5,0,0,0,,,7/22/2010 20:00
449,638,Old Engine Oil,2,25,6,0,0,0,,,7/22/2010 20:00
450,1043,Pitchfork Rebellious Bitter,-1,-1,4.3,0,0,0,,,7/22/2010 20:00
451,638,Bitter and Twisted,-1,-1,3.8,0,0,0,,,7/22/2010 20:00
452,1185,India Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
453,1043,Old Slug Porter,2,25,4.5,0,0,0,,,7/22/2010 20:00
454,744,Golden Abbot Lager,-1,-1,0,0,0,0,,,7/22/2010 20:00
455,744,Porter,2,25,7.1,0,0,0,,,7/22/2010 20:00
456,757,MÃ¶nchshof KellerbrÃ¤u,-1,-1,0,0,0,0,,,7/22/2010 20:00
457,626,Nightmare,2,25,5,0,0,0,,,7/22/2010 20:00
458,205,Ur-Weisse,4,50,0,0,0,0,,,7/22/2010 20:00
459,650,Schlenkerla Helles Lagerbier,-1,-1,4.3,0,0,0,,,7/22/2010 20:00
460,743,Ondineke Oilsjtersen Tripel,-1,-1,8.5,0,0,0,,,7/22/2010 20:00
461,1043,Ale Mary,3,26,6,0,0,0,,,7/22/2010 20:00
462,743,Jan de Lichte,-1,-1,7,0,0,0,,,7/22/2010 20:00
463,1142,Bigfoot 2000,-1,-1,9.6,0,0,0,,,7/22/2010 20:00
464,222,Rauchbier Lager,-1,-1,4.6,0,0,0,,,7/22/2010 20:00
465,14,Bourbon Imperial Stout,-1,-1,0,0,0,0,,,7/22/2010 20:00
466,14,Witbier,-1,-1,0,0,0,0,,,7/22/2010 20:00
467,14,Bavarian Bock,7,90,0,0,0,0,,,7/22/2010 20:00
468,14,Heater,3,33,0,0,0,0,,,7/22/2010 20:00
469,14,Harvest Brown,3,38,0,0,0,0,,,7/22/2010 20:00
470,14,Brout,-1,-1,0,0,0,0,,,7/22/2010 20:00
471,650,Aecht Schlenkerla Rauchbier MÃ¤rzen,-1,-1,0,0,0,0,,,7/22/2010 20:00
472,650,Aecht Schlenkerla Rauchbier Weizen,8,95,0,0,0,0,,,7/22/2010 20:00
473,757,Kapuziner Schwarz-Weizen,-1,-1,5.4,0,0,0,,,7/22/2010 20:00
474,70,Christmas Bock,7,90,6,0,0,0,,,7/22/2010 20:00
475,296,Prior 8,5,60,8,0,0,0,,"This noble delicious beer with a high fermentation has a ruby purple colour with a full malty and fruity taste (8% alcohol content). 

This beer has a beautiful round froth due to the second fermentation with a taste that creates a perfect balance between sweet and sour.",7/22/2010 20:00
476,395,Old Man Ale,-1,-1,4.8,0,0,0,,,7/22/2010 20:00
477,1056,Criminally Bad Elf,-1,-1,10.5,0,0,0,,,7/22/2010 20:00
478,1056,Very Bad Elf Special Reserve Ale,-1,-1,7.5,0,0,0,,,7/22/2010 20:00
479,70,Weisse,4,50,4.9,0,0,0,,,7/22/2010 20:00
480,757,MÃ¶nchshof Premium Schwarzbier,7,86,4.9,0,0,0,,Schwarzbier means black beer in German. It is a medium-bodied very opaque and deep-sepia in color with a chewy texture and a firm creamy long-lasting head. In spite of its dark color it comes across as a soft and elegant brew that is rich mild and surprisingly balanced. It never tastes harsh toasty or acrid. The beer is often referred to as a Schwarzpils a black Pils but unlike a blond Pils which can be assertively bitter the hop bitterness in Schwarzbier is always gentle and subdued. In a glass Schwarzbier looks much like a British dark ale but looks can be deceiving. Schwarzbier unlike a British ale has a clean lager taste that leaves next to no perception of fruitiness on the palate. Instead Schwarzbier produces very mild almost bittersweet notes of chocolate coffee and vanilla. Like most traditional German lagers Schwarzbier has a malty middle but the sweetness is never cloying or overpowering. The beer is moderately to well attenuated and the finish tends to be dry. Its alcohol level by volume is in the range of 4.5 to 5% rarely higher. To accentuate the Schwarzbier's dark elegance and appealing head always serve it in a tall fluted or tulip-shaped glass.,7/22/2010 20:00
481,296,St. Bernardus Tripel,5,61,8,0,0,0,,"This beer, with high fermentation, has a pale amber colour and a flowery, fruity taste with a harmonious balance between sweet and sour (8% alcohol content). 
This beer has a thick and vivid froth and strikes by its balanced taste with a delicate bitterness.",7/22/2010 20:00
482,296,BiÃ¨re Blanche,-1,-1,0,0,0,0,,,7/22/2010 20:00
483,1375,Wychcraft,-1,-1,0,0,0,0,,,7/22/2010 20:00
484,1204,Double Bastard Ale,3,26,10,0,0,0,,,7/22/2010 20:00
485,7,Rochefort 6,3,29,7.5,0,0,0,,"eddish colour, almost like autumn leaves, very consistent texture with a slightly spicy aroma and an intense taste of caramel, fruit, and hints of raisins. It is only brewed about once per year, representing approximately 1% of total beer production, thus is quite difficult to obtain.",7/22/2010 20:00
486,277,Guldenberg,-1,-1,8.5,0,0,0,,,7/22/2010 20:00
487,262,Westmalle Trappist Tripel,5,61,9.5,0,0,0,,"Was first brewed in 1934 and the recipe has not changed since 1956. It is made with pale candy sugar and has a very pale color produced from a mash of light pilsener malts. Styrian Goldings hops are used along with some German varieties and the classic Saaz pilsener hop. After a long secondary fermentation, the Tripel Westmalle is bottled with a dose of sugar and yeast. This beer holds up well in the bottle over time and seems to soften with age.",7/22/2010 20:00
488,590,Fire in the Hole!,-1,-1,0,0,0,0,,,7/22/2010 20:00
489,590,Cow Palace Scotch Ale,1,15,6.8,0,0,0,,,7/22/2010 20:00
490,590,Toil & Trubbel Dubbel,-1,-1,8.1,0,0,0,,,7/22/2010 20:00
491,590,Abtskelder Tripel,-1,-1,8.4,0,0,0,,,7/22/2010 20:00
492,590,All-American Gold,-1,-1,0,0,0,0,,,7/22/2010 20:00
493,511,Curator Dunkler Doppelbock,7,90,9,0,0,0,,,7/22/2010 20:00
494,511,Kloster Dunkel,-1,-1,0,0,0,0,,,7/22/2010 20:00
495,511,Kloster Edel-Hell,-1,-1,0,0,0,0,,,7/22/2010 20:00
496,594,Teton Ale,3,33,0,0,0,0,,,7/22/2010 20:00
497,534,Pilsener,-1,-1,4.8,0,0,0,,,7/22/2010 20:00
498,230,Nickelbier,7,90,6.5,0,0,0,,,7/22/2010 20:00
499,216,Edel-Pils,-1,-1,4.8,0,0,0,,,7/22/2010 20:00
500,845,Weiss-Gold,-1,-1,0,0,0,0,,,7/22/2010 20:00
501,225,Zwickelbier,-1,-1,0,0,0,0,,,7/22/2010 20:00
502,225,Pils,-1,-1,5,0,0,0,,,7/22/2010 20:00
503,225,Spezial,-1,-1,5.1,0,0,0,,,7/22/2010 20:00
504,1120,WeiÃŸe,4,50,0,0,0,0,,,7/22/2010 20:00
505,1120,Schwarzbier,7,86,5.3,0,0,0,,,7/22/2010 20:00
506,1120,Pils,-1,-1,4.9,0,0,0,,,7/22/2010 20:00
507,1120,Original NÂº 1 NaturtrÃ¼b,-1,-1,0,0,0,0,,,7/22/2010 20:00
508,74,Schwarze,7,86,0,0,0,0,,,7/22/2010 20:00
509,74,Blonde,-1,-1,0,0,0,0,,,7/22/2010 20:00
510,74,Rotgold-Pils,8,95,4.9,0,0,0,,,7/22/2010 20:00
511,30,Spezial,-1,-1,5.2,0,0,0,,,7/22/2010 20:00
512,30,Pils,-1,-1,4.9,0,0,0,,,7/22/2010 20:00
513,204,Coronator Helle Doppelbock,7,90,7.5,0,0,0,,,7/22/2010 20:00
514,204,See-Weizen Bio-Hefeweizen,4,50,0,0,0,0,,,7/22/2010 20:00
515,204,Kellerpils,-1,-1,0,0,0,0,,,7/22/2010 20:00
516,204,Pils,-1,-1,0,0,0,0,,,7/22/2010 20:00
517,204,Kronenbier,-1,-1,0,0,0,0,,,7/22/2010 20:00
518,1146,Dunkles Weissbier,-1,-1,0,0,0,0,,,7/22/2010 20:00
519,1146,Festbier,7,84,0,0,0,0,,,7/22/2010 20:00
520,1146,Dunkles Lager,-1,-1,0,0,0,0,,,7/22/2010 20:00
521,1146,Weizen,4,50,0,0,0,0,,,7/22/2010 20:00
522,1146,BrÃ¤ustatt Pils,-1,-1,0,0,0,0,,,7/22/2010 20:00
523,1146,BrÃ¤ustatt Gold,-1,-1,0,0,0,0,,,7/22/2010 20:00
524,205,Altbairisch Dunkel,-1,-1,0,0,0,0,,,7/22/2010 20:00
525,671,Pickled Santa,-1,-1,6,0,0,0,,,7/22/2010 20:00
526,727,Manchester Star Ale,1,13,7.3,0,0,0,,,7/22/2010 20:00
527,189,Moinette Brune,-1,-1,8.5,0,0,0,,,7/22/2010 20:00
528,192,Chocolat,-1,-1,8,0,0,0,,,7/22/2010 20:00
529,190,BiÃ¨re de NoÃ«l,-1,-1,0,0,0,0,,,7/22/2010 20:00
530,164,BiÃ¨re de Gamme,-1,-1,0,0,0,0,,,7/22/2010 20:00
531,129,Panil BarriquÃ©e,-1,-1,0,0,0,0,,,7/22/2010 20:00
532,183,CuvÃ©e du 7Ã¨me,-1,-1,0,0,0,0,,,7/22/2010 20:00
533,192,Dark White,-1,-1,0,0,0,0,,,7/22/2010 20:00
534,501,Festive Ale 2006,-1,-1,0,0,0,0,,,7/22/2010 20:00
535,44,Green Valley Stone Mill Pale Ale,3,26,5.5,0,0,0,,,7/22/2010 20:00
536,44,Green Valley Wild Hop Lager,8,95,0,0,0,0,,,7/22/2010 20:00
537,806,LÃ¶wen Weisse,4,50,0,0,0,0,,,7/22/2010 20:00
538,1198,Herbstbier,7,86,0,0,0,0,,,7/22/2010 20:00
539,1198,Altbier,3,38,0,0,0,0,,,7/22/2010 20:00
540,1198,Huusbier,-1,-1,0,0,0,0,,,7/22/2010 20:00
541,217,Leermond Bier,-1,-1,0,0,0,0,,,7/22/2010 20:00
542,649,Original Ittinger KlosterbrÃ¤u,8,95,0,0,0,0,,,7/22/2010 20:00
543,233,Huusbier Schwarz,2,25,4.5,0,0,0,,,7/22/2010 20:00
544,233,Oktoberfest,4,55,0,0,0,0,,,7/22/2010 20:00
545,233,Weizentrumpf,4,50,5.5,0,0,0,,,7/22/2010 20:00
546,233,Honey Brown Ale,8,95,6,0,0,0,,,7/22/2010 20:00
547,233,Huusbier Hell,-1,-1,4.6,0,0,0,,,7/22/2010 20:00
548,748,KÃ¶nig Ludwig Weissbier Dunkel,-1,-1,0,0,0,0,,,7/22/2010 20:00
549,877,Gambrinus,-1,-1,4.6,0,0,0,,,7/22/2010 20:00
550,877,NaturtrÃ¼bes Kellerbier,7,90,0,0,0,0,,,7/22/2010 20:00
551,1116,Stout,3,42,5,0,0,0,,,7/22/2010 20:00
552,1116,Weizen,4,50,5,0,0,0,,,7/22/2010 20:00
553,1116,Spezial,-1,-1,5.5,0,0,0,,,7/22/2010 20:00
554,1116,Naturtrubes,-1,-1,5.1,0,0,0,,,7/22/2010 20:00
555,219,St. Galler Landbier,-1,-1,0,0,0,0,,,7/22/2010 20:00
556,569,Maisbier,-1,-1,0,0,0,0,,,7/22/2010 20:00
557,569,Weizenbier,4,50,0,0,0,0,,,7/22/2010 20:00
558,569,Dunkel,-1,-1,0,0,0,0,,,7/22/2010 20:00
559,569,Hell,-1,-1,0,0,0,0,,,7/22/2010 20:00
560,877,Spezial,-1,-1,5.6,0,0,0,,,7/22/2010 20:00
561,1344,Single-Malt-Bier,8,95,0,0,0,0,,,7/22/2010 20:00
562,1344,Ur-Pils,-1,-1,5.1,0,0,0,,,7/22/2010 20:00
563,1344,Ur-Weizen,4,50,5,0,0,0,,,7/22/2010 20:00
564,1344,Hanf,-1,-1,5,0,0,0,,,7/22/2010 20:00
565,1344,Dunkel,-1,-1,4.8,0,0,0,,,7/22/2010 20:00
566,1344,Hell,-1,-1,4.8,0,0,0,,,7/22/2010 20:00
567,1344,Blond,-1,-1,4.8,0,0,0,,,7/22/2010 20:00
568,213,Dunkle Weisse,-1,-1,5.3,0,0,0,,,7/22/2010 20:00
569,750,WalderBrÃ¤u Export,-1,-1,0,0,0,0,,,7/22/2010 20:00
570,216,Hefe-Weizen,4,50,5.2,0,0,0,,,7/22/2010 20:00
571,216,Edel-Spezial,-1,-1,5.2,0,0,0,,,7/22/2010 20:00
572,479,Alt-DÃ¼rrener-WeiÃŸe,-1,-1,0,0,0,0,,,7/22/2010 20:00
573,479,Edelweiss,4,50,0,0,0,0,,,7/22/2010 20:00
574,479,Kristall-Weizen,-1,-1,0,0,0,0,,,7/22/2010 20:00
575,479,Hofgutsbier,-1,-1,0,0,0,0,,,7/22/2010 20:00
576,479,Humpis-Original Naturtrub,-1,-1,5.1,0,0,0,,,7/22/2010 20:00
577,568,Hefeweizen,4,50,0,0,0,0,,,7/22/2010 20:00
578,568,Spezial,8,95,0,0,0,0,,,7/22/2010 20:00
579,568,Kellerpils,-1,-1,0,0,0,0,,,7/22/2010 20:00
580,451,Sanwald Dunkelweizen,-1,-1,0,0,0,0,,,7/22/2010 20:00
581,451,Das Schwarze / Dark,-1,-1,4.9,0,0,0,,,7/22/2010 20:00
582,1083,Hecker Dunkel,-1,-1,5.2,0,0,0,,,7/22/2010 20:00
583,1083,Kristall Weizen,-1,-1,0,0,0,0,,,7/22/2010 20:00
584,1083,Hefe Weizen Dunkel,-1,-1,0,0,0,0,,,7/22/2010 20:00
585,1083,Schimmele Hefe Pils,-1,-1,0,0,0,0,,,7/22/2010 20:00
586,1083,Hefe Weizen Hell,4,50,0,0,0,0,,,7/22/2010 20:00
587,1083,Spezial-Export,-1,-1,0,0,0,0,,,7/22/2010 20:00
588,1083,Edel-Pils,-1,-1,0,0,0,0,,,7/22/2010 20:00
589,230,Herbstbeer,7,84,0,0,0,0,,,7/22/2010 20:00
590,230,Weizen,4,50,0,0,0,0,,,7/22/2010 20:00
591,230,Kupfer,8,95,0,0,0,0,,,7/22/2010 20:00
592,230,Messing,-1,-1,0,0,0,0,,,7/22/2010 20:00
593,905,Saison,-1,-1,0,0,0,0,,,7/22/2010 20:00
594,285,Duinen Dubbel,-1,-1,8,0,0,0,,,7/22/2010 20:00
595,165,Castelain St.Amand French Country Ale,-1,-1,5.9,0,0,0,,,7/22/2010 20:00
596,357,Red Racer India Pale Ale,3,31,6.5,0,0,0,,,7/22/2010 20:00
597,357,Steelhead Stout,3,42,0,0,0,0,,,7/22/2010 20:00
598,357,Iceberg Copper Bock,7,90,0,0,0,0,,,7/22/2010 20:00
599,357,Boomers Red Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
600,357,Springboard Lager,8,95,0,0,0,0,,,7/22/2010 20:00
601,119,Light Lager,8,95,0,0,0,0,,,7/22/2010 20:00
602,119,Old Sullivan Porter,2,25,0,0,0,0,,,7/22/2010 20:00
603,119,Brotherhood Black & Tan,3,38,0,0,0,0,,,7/22/2010 20:00
604,119,Clover Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
605,119,Lager,8,95,0,0,0,0,,,7/22/2010 20:00
606,119,Red Truck Ale,3,33,0,0,0,0,,,7/22/2010 20:00
607,120,Dry Stout,3,42,0,0,0,0,,,7/22/2010 20:00
608,120,Extra Special Bitter,-1,-1,0,0,0,0,,,7/22/2010 20:00
609,120,Nut Brown Ale,3,38,0,0,0,0,,,7/22/2010 20:00
610,120,Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
611,120,Vienna Lager,8,95,0,0,0,0,,,7/22/2010 20:00
612,120,Pilsner,-1,-1,0,0,0,0,,,7/22/2010 20:00
613,120,Blonde Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
614,1085,Cream Ale,1,10,0,0,0,0,,,7/22/2010 20:00
615,1085,Blonde Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
616,1085,Special Lager,8,95,0,0,0,0,,,7/22/2010 20:00
617,1085,Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
618,1034,Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
619,788,Beacon India Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
620,1237,Traditional India Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
621,1237,Mad Scow Stout,3,42,0,0,0,0,,,7/22/2010 20:00
622,1237,Red Truck Ale,3,33,0,0,0,0,,,7/22/2010 20:00
623,1237,Two Lions Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
624,1237,Baden Powell Cream Ale,8,95,0,0,0,0,,,7/22/2010 20:00
625,1237,Dominion Lager,8,95,0,0,0,0,,,7/22/2010 20:00
626,1381,Yippee IPA,3,31,0,0,0,0,,,7/22/2010 20:00
627,1381,Downtown Brown,3,38,0,0,0,0,,,7/22/2010 20:00
628,453,Tropical Lager,8,95,0,0,0,0,,,7/22/2010 20:00
629,453,Honey Brown,8,95,0,0,0,0,,,7/22/2010 20:00
630,453,IPA,3,31,0,0,0,0,,,7/22/2010 20:00
631,453,Game Day,-1,-1,0,0,0,0,,,7/22/2010 20:00
632,453,Red Truck Ale,3,33,0,0,0,0,,,7/22/2010 20:00
633,453,Red Truck Lager,-1,-1,0,0,0,0,,,7/22/2010 20:00
634,828,Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
635,828,Premium Gold,8,95,0,0,0,0,,,7/22/2010 20:00
636,873,India Pale Ale,3,26,5.8,0,0,0,,,7/22/2010 20:00
637,873,Oatmeal Stout,3,42,6.5,0,0,0,,,7/22/2010 20:00
638,873,Cream Ale,8,95,4.8,0,0,0,,,7/22/2010 20:00
639,873,Blonde Draft,-1,-1,4.8,0,0,0,,,7/22/2010 20:00
640,598,Hefeweizen,4,50,0,0,0,0,,,7/22/2010 20:00
641,598,Island Lager,8,95,5,0,0,0,,,7/22/2010 20:00
642,598,English Bay Pale Ale,3,26,5,0,0,0,,,7/22/2010 20:00
643,598,Kitsilano Maple Cream Ale,8,95,5,0,0,0,,,7/22/2010 20:00
644,598,Cypress Honey Lager,8,95,4.7,0,0,0,,,7/22/2010 20:00
645,457,Pelican Bay Brown,3,38,0,0,0,0,,,7/22/2010 20:00
646,457,Marina Light Lager,-1,-1,4.7,0,0,0,,,7/22/2010 20:00
647,457,Haupenthal Hefeweizen,4,50,4.8,0,0,0,,,7/22/2010 20:00
648,457,Old Bridge Dark Lager,8,95,5.3,0,0,0,,,7/22/2010 20:00
649,457,Johnston Pilsener,-1,-1,4.9,0,0,0,,,7/22/2010 20:00
650,457,Cartwright Pale Ale,3,26,4.3,0,0,0,,,7/22/2010 20:00
651,1307,15,-1,-1,10,0,0,0,,,7/22/2010 20:00
652,202,Gueuze Bio / Organic Gueuze,5,70,0,0,0,0,,,7/22/2010 20:00
653,1178,Hopluia,3,26,0,0,0,0,,,7/22/2010 20:00
654,995,Czech Premium Lager,-1,-1,0,0,0,0,,,7/22/2010 20:00
655,935,Bobby,-1,-1,0,0,0,0,,,7/22/2010 20:00
656,590,1916 Irish Stout,3,42,3.5,0,0,0,,,7/22/2010 20:00
657,590,Model-A-Tor Doppelbock,7,90,7.4,0,0,0,,,7/22/2010 20:00
658,590,Wilsteraner Altbier,3,38,5.6,0,0,0,,,7/22/2010 20:00
659,590,Eighty-Shilling Scottish Ale (80/-),-1,-1,5.3,0,0,0,,,7/22/2010 20:00
660,647,Dark Lager,-1,-1,0,0,0,0,,,7/22/2010 20:00
661,647,Lager Beer,-1,-1,0,0,0,0,,,7/22/2010 20:00
662,647,Premium Light Lager Beer,8,95,0,0,0,0,,,7/22/2010 20:00
663,236,Trademark English Pale,3,26,0,0,0,0,,,7/22/2010 20:00
664,829,Jolly Roger,-1,-1,0,0,0,0,,,7/22/2010 20:00
665,829,Firkin IPA,3,31,0,0,0,0,,,7/22/2010 20:00
666,829,Portage Bay Pilsener,-1,-1,5.5,0,0,0,,,7/22/2010 20:00
667,829,Old Seattle Lager,8,95,4.3,0,0,0,,,7/22/2010 20:00
668,829,Nightwatch Dark Ale,2,25,5.5,0,0,0,,,7/22/2010 20:00
669,829,Islander Pale Ale,3,26,5,0,0,0,,,7/22/2010 20:00
670,829,Salmon Bay E.S.B.,-1,-1,5.5,0,0,0,,,7/22/2010 20:00
671,829,Clipper Gold Hefeweizen,8,95,5.2,0,0,0,,,7/22/2010 20:00
672,829,Flagship Red Alt Ale,3,33,5.2,0,0,0,,,7/22/2010 20:00
673,123,Slam Dunkelweizen,-1,-1,8,0,0,0,,,7/22/2010 20:00
674,123,Trombipulator,-1,-1,0,0,0,0,,,7/22/2010 20:00
675,123,Faux Paddy Irish Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
676,123,Black Mulligan Dublin Stout,3,42,0,0,0,0,,,7/22/2010 20:00
677,123,Coal Creek Porter,2,25,0,0,0,0,,,7/22/2010 20:00
678,123,Atlas Amber Ale,3,33,0,0,0,0,,,7/22/2010 20:00
679,123,Prime Time Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
680,123,Snow Melt Nitrogen Pale,3,26,0,0,0,0,,,7/22/2010 20:00
681,123,Old Rip Oatmeal Stout,3,42,0,0,0,0,,,7/22/2010 20:00
682,123,Scarlet Fire IPA,3,31,0,0,0,0,,,7/22/2010 20:00
683,496,The Immortal IPA,3,31,6.3,0,0,0,,,7/22/2010 20:00
684,496,Whoville Weizenbock,4,55,6.6,0,0,0,,,7/22/2010 20:00
685,497,Warminster Special Bitter,-1,-1,3.8,0,0,0,,,7/22/2010 20:00
686,497,AK-47 Malt Liquor,-1,-1,6,0,0,0,,,7/22/2010 20:00
687,497,Foster Child Australian Lager,8,95,4,0,0,0,,,7/22/2010 20:00
688,496,Avatar Jasmine IPA,-1,-1,6.2,0,0,0,,,7/22/2010 20:00
689,496,BiFrÃ¶st Winter Ale,3,26,0,0,0,0,,,7/22/2010 20:00
690,496,Elysian Fields Pale Ale,3,26,4.8,0,0,0,,,7/22/2010 20:00
691,496,Loki,-1,-1,4.8,0,0,0,,,7/22/2010 20:00
692,496,Zephyrus Pilsner,-1,-1,4.7,0,0,0,,,7/22/2010 20:00
693,496,Perseus Porter,2,25,5.4,0,0,0,,,7/22/2010 20:00
694,496,The Wise ESB,1,5,5.9,0,0,0,,,7/22/2010 20:00
695,496,Ambrosia Maibock,7,90,5.3,0,0,0,,,7/22/2010 20:00
696,496,BÃªte Blanche,-1,-1,0,0,0,0,,,7/22/2010 20:00
697,984,Auld Acquaintance Spiced Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
698,984,India Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
699,984,Oatmeal Stout,3,42,0,0,0,0,,,7/22/2010 20:00
700,984,Kilt Lifter Scotch Ale,1,15,0,0,0,0,,,7/22/2010 20:00
701,984,Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
702,984,Weisse,8,95,0,0,0,0,,,7/22/2010 20:00
703,1296,Imperial Stout,3,42,6.2,0,0,0,,,7/22/2010 20:00
704,1296,Imperial I.P.A.,3,26,7.2,0,0,0,,,7/22/2010 20:00
705,1296,India Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
706,1296,N.W. Pale Ale,3,26,5,0,0,0,,,7/22/2010 20:00
707,1296,Bock,7,90,5,0,0,0,,,7/22/2010 20:00
708,1296,Weissbier,8,95,4.3,0,0,0,,,7/22/2010 20:00
709,1296,Saison,-1,-1,5.7,0,0,0,,,7/22/2010 20:00
710,1296,Pilsner,-1,-1,4.7,0,0,0,,,7/22/2010 20:00
711,842,Nebraska Bitter,-1,-1,0,0,0,0,,,7/22/2010 20:00
712,842,Irish Stout,3,42,0,0,0,0,,,7/22/2010 20:00
713,842,I.M. Pale,3,26,0,0,0,0,,,7/22/2010 20:00
714,842,Wheat Beer,8,95,0,0,0,0,,,7/22/2010 20:00
715,842,Golden,-1,-1,0,0,0,0,,,7/22/2010 20:00
716,842,Porter,2,25,0,0,0,0,,,7/22/2010 20:00
717,842,Terminator Stout,3,42,6.45,0,0,0,,"Black as the darkest night, rich as the most decadent dessert, Terminator is for the true stout lover. This is a full bodied and flavor packed ale which draws it's robust complexity from kiln-baked specialty grains. Look for a wide array of toasted, chocolate, nutty and coffee-like flavors in every pint! The devoted swear by it, and it remains one of our top selling ales year after year.",7/22/2010 20:00
718,842,India Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
719,842,Hammerhead Ale,3,26,0,0,0,0,,,7/22/2010 20:00
720,445,Icebreaker Barley Wine,-1,-1,0,0,0,0,,,7/22/2010 20:00
721,445,Industrial IPA,3,32,7.4,0,0,0,,"This one's a butt-kicker! Essentially, the same recipe as the IPA, but with approximately 25% more grain and twice the hops!",7/22/2010 20:00
722,445,IPA,3,31,6.2,0,0,0,,"OUR FLAGSHIP BEER, the one for which we're known throughout the Puget Sound. Columbus hops impart intense bitterness with flavors of grapefruit and a hint of cedar.",7/22/2010 20:00
723,445,Possession Porter,2,25,5.6,0,0,0,,,7/22/2010 20:00
724,445,Steamer Glide Stout,3,42,4.8,0,0,0,,,7/22/2010 20:00
725,445,E.S.B.,-1,-1,0,0,0,0,,,7/22/2010 20:00
726,445,Brown Ale,3,38,5.6,0,0,0,,,7/22/2010 20:00
727,445,Golden Ale,-1,-1,5.2,0,0,0,,,7/22/2010 20:00
728,445,Hefe-Weizen,4,50,5.8,0,0,0,,,7/22/2010 20:00
729,445,Lighthouse Ale,3,26,4.3,0,0,0,,,7/22/2010 20:00
730,475,Golden,-1,-1,0,0,0,0,,,7/22/2010 20:00
731,1124,Gale Force IPA,3,31,5.6,0,0,0,,,7/22/2010 20:00
732,1124,Porter,2,25,5.8,0,0,0,,,7/22/2010 20:00
733,1124,Nut Brown,3,38,4.3,0,0,0,,,7/22/2010 20:00
734,1124,Amber Ale,3,38,5.1,0,0,0,,,7/22/2010 20:00
735,1124,Hefe Weizen,8,95,4.6,0,0,0,,,7/22/2010 20:00
736,1124,Maibock,7,90,0,0,0,0,,,7/22/2010 20:00
737,1124,Sequoia Red,3,33,0,0,0,0,,,7/22/2010 20:00
738,1124,Homeport Blonde,-1,-1,4.6,0,0,0,,,7/22/2010 20:00
739,1151,Skibbereen Stout,3,42,5.3,0,0,0,,,7/22/2010 20:00
740,1151,Red Card Lager,-1,-1,6.65,0,0,0,,,7/22/2010 20:00
741,1151,Navidad,3,33,0,0,0,0,,,7/22/2010 20:00
742,1151,Free Bike Amber,3,33,4.5,0,0,0,,,7/22/2010 20:00
743,1151,Highwater Porter,2,25,6,0,0,0,,,7/22/2010 20:00
744,1151,Skagit Brown Ale,3,38,4.8,0,0,0,,,7/22/2010 20:00
745,1151,Yellowjacket Pale Ale,3,26,4.5,0,0,0,,,7/22/2010 20:00
746,1151,Dutch Girl Lager,-1,-1,4.3,0,0,0,,,7/22/2010 20:00
747,1151,Del Rio Lager,8,95,4,0,0,0,,,7/22/2010 20:00
748,504,Barleywine,-1,-1,0,0,0,0,,,7/22/2010 20:00
749,504,Imperial Pale,3,26,0,0,0,0,,,7/22/2010 20:00
750,504,Spring Bock,7,90,0,0,0,0,,,7/22/2010 20:00
751,504,Irish Stout,3,42,0,0,0,0,,,7/22/2010 20:00
752,504,India Pale Ale,3,26,6.6,0,0,0,,,7/22/2010 20:00
753,504,Porter,2,25,5.9,0,0,0,,,7/22/2010 20:00
754,504,Firehouse Red,3,33,0,0,0,0,,,7/22/2010 20:00
755,504,Tacoma Brew,-1,-1,5.1,0,0,0,,,7/22/2010 20:00
756,504,Hefeweizen,4,50,4.3,0,0,0,,,7/22/2010 20:00
757,504,Belgian White,-1,-1,4.1,0,0,0,,,7/22/2010 20:00
758,526,Poseidon Imperial Stout,3,42,0,0,0,0,,,7/22/2010 20:00
759,526,Thornton Creel Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
760,526,Blonde Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
761,526,Light,-1,-1,0,0,0,0,,,7/22/2010 20:00
762,526,WinterFish Ale,3,26,7.5,0,0,0,,,7/22/2010 20:00
763,526,Mudshark Porter,2,25,0,0,0,0,,,7/22/2010 20:00
764,526,Organic India Pale Ale,3,31,6.7,0,0,0,,"Fish Tale Organic India Pale Ale is a medium-bodied beer with a rich golden color. The organic pale and crystal malts lay down a firm malt body. This provides the backbone for an assertive hop profile featuring organic Pacific Gem. The moment the Mighty Fish Brewers sampled this pungent and resinous New Zealand hop, they knew it would be perfect for their Organic I.P.A. The result: A Cascadian treasure.",7/22/2010 20:00
765,526,Wild Salmon Pale Ale,3,26,4,0,0,0,,,7/22/2010 20:00
766,526,Organic Amber Ale,3,33,5,0,0,0,,"Medium-bodied with an appealing amber hue, this is the First Ale of the Republic. Its organic pale, Munich, and crystal malts create a gentle sweet character that is difficult to resist.  From organic Hallertauer hops come a zesty flavor and aroma that beautifully balance Organic Amber's malt profile. The result: Truly delicious ale that salutes organic farmers and all the goodness they bring to our tables.",7/22/2010 20:00
767,526,Blind Pig Dunkelweizen,8,95,4.7,0,0,0,,,7/22/2010 20:00
768,526,Whistling Pig Hefeweizen,8,95,4.5,0,0,0,,,7/22/2010 20:00
769,1030,Snow Cap,1,13,7,0,0,0,,,7/22/2010 20:00
770,1030,DPA,3,26,5.1,0,0,0,,,7/22/2010 20:00
771,1030,Krystal Weizen,8,95,4.9,0,0,0,,,7/22/2010 20:00
772,1030,Thunder Head IPA,3,31,6.7,0,0,0,,,7/22/2010 20:00
773,1030,Amber Weizen,8,95,5.5,0,0,0,,,7/22/2010 20:00
774,1030,Hefeweizen,8,95,5.2,0,0,0,,,7/22/2010 20:00
775,1030,Curve Ball,-1,-1,4.8,0,0,0,,,7/22/2010 20:00
776,704,Bourbon Barrel Stout,-1,-1,0,0,0,0,,,7/22/2010 20:00
777,704,Oak Stout,-1,-1,0,0,0,0,,,7/22/2010 20:00
778,704,Two Frog Dubbel,-1,-1,0,0,0,0,,,7/22/2010 20:00
779,704,Farm Frog,-1,-1,0,0,0,0,,,7/22/2010 20:00
780,704,Frosty Frog,3,26,0,0,0,0,,,7/22/2010 20:00
781,494,Dry Hopped IPA,3,31,0,0,0,0,,,7/22/2010 20:00
782,494,No Doubt Stout,3,42,5.75,0,0,0,,,7/22/2010 20:00
783,494,Riot Ale,3,26,7.5,0,0,0,,,7/22/2010 20:00
784,494,IPA,3,31,5.5,0,0,0,,,7/22/2010 20:00
785,494,Alembic Pale,3,26,5.5,0,0,0,,,7/22/2010 20:00
786,494,Luna Weizen,8,95,4.5,0,0,0,,,7/22/2010 20:00
787,966,Castaway Barley Wine Winter Ale,-1,-1,11,0,0,0,,,7/22/2010 20:00
788,966,Blacktop Porter,2,25,0,0,0,0,,,7/22/2010 20:00
789,966,Puget Porter,2,25,0,0,0,0,,,7/22/2010 20:00
790,966,Rat City IPA,3,31,0,0,0,0,,,7/22/2010 20:00
791,966,Fauntleroy Stout,3,42,0,0,0,0,,,7/22/2010 20:00
792,966,Alki Ale,3,26,0,0,0,0,,,7/22/2010 20:00
793,966,Vashon Old Stock Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
794,966,Admiral ESB,-1,-1,0,0,0,0,,,7/22/2010 20:00
795,966,Driftwood Ale,3,26,0,0,0,0,,,7/22/2010 20:00
796,770,Kataja Olut IVB,-1,-1,7,0,0,0,,,7/22/2010 20:00
797,1185,Cream Stout,3,42,6.5,0,0,0,,,7/22/2010 20:00
798,526,Leviathan 2004,-1,-1,10,0,0,0,,,7/22/2010 20:00
799,160,MoJo India Pale Ale,3,31,6.8,0,0,0,,,7/22/2010 20:00
800,526,Old Woody 2005,1,13,10,0,0,0,,,7/22/2010 20:00
801,103,Weisse,-1,-1,0,0,0,0,,,7/22/2010 20:00
802,431,Urthel Hop-It,5,72,9.5,0,0,0,,,7/22/2010 20:00
803,641,Super Natural Oatmeal Stout,3,42,8,0,0,0,,,7/22/2010 20:00
804,432,Flemish Primitive Wild Ale (Pig Nun),-1,-1,9,0,0,0,,,7/22/2010 20:00
805,432,Andelot Cuvee Diabolique,-1,-1,8.5,0,0,0,,,7/22/2010 20:00
806,432,Lozen Boer Abt,-1,-1,10,0,0,0,,,7/22/2010 20:00
807,641,Imperial Gold Malt Liquor,8,95,9.9,0,0,0,,,7/22/2010 20:00
808,1177,Double Daddy,3,26,9.5,0,0,0,,,7/22/2010 20:00
809,1072,Old Crustacean Barleywine 2005,-1,-1,0,0,0,0,,,7/22/2010 20:00
810,622,Fred,-1,-1,10,0,0,0,,,7/22/2010 20:00
811,21,Wee Heavy,1,15,9.5,0,0,0,,,7/22/2010 20:00
812,709,Porter,2,25,0,0,0,0,,,7/22/2010 20:00
813,540,Horn Dog,3,35,10.2,0,0,0,,"By far the biggest dog in the yard... Horn Dog Barley Wine is a dark and malty English-style Barely Wine that is aged for a minimum of three months before being packaged. Like a fine wine, this beer will only get better with age when stored at optimum conditions.",7/22/2010 20:00
814,137,Nut Brown Ale,3,38,0,0,0,0,,,7/22/2010 20:00
815,137,Chaser Pale,-1,-1,0,0,0,0,,,7/22/2010 20:00
816,270,Trappist Extra,-1,-1,9.5,0,0,0,,,7/22/2010 20:00
817,174,Brune,-1,-1,9.5,0,0,0,,,7/22/2010 20:00
818,459,Olde School Barleywine,3,35,15.04,0,0,0,,,7/22/2010 20:00
819,1115,Urbock 23Â°,7,92,9.6,0,0,0,,Schloss Eggenberg Urbock 23Â° is one of the strongest beers in the world. We keep the Urbock 23Â° in our Schloss cellars for 9 months until it is dark gold and strongly matured. Urbock 23Â° has received the highest acknowledgments and honours at international exhibitions and world evaluations. It is brewed exclusively from natural raw ingredients after the purity requirement of 1516. Schloss Eggenberg Urbock is filled in a 0.33 litre designer bottle embossed with Schloss Eggenberg and in barrels for the export (20 and 30 litre).,7/22/2010 20:00
820,447,Double Diamond Winter,-1,-1,8.5,0,0,0,,,7/22/2010 20:00
821,1204,Stone IPA,3,31,6.9,0,0,0,,"An \India Pale Ale\"" by definition is highly hopped and high in alcohol (ours is 6.9% alc./vol.).

Medium Bodied Refreshing Ale
Light-medium malt character with a heavy dose of over the top hops! Two full weeks of \""dry hopping\"" give this beer its abundant hop aroma and crisp hop flavor.""",7/22/2010 20:00
822,188,Scaldis Prestige,-1,-1,13,0,0,0,,,7/22/2010 20:00
823,432,Flemish Primitive Wild Ale (Surly Bird),-1,-1,9,0,0,0,,,7/22/2010 20:00
824,623,Red Menace Big Amber,3,33,0,0,0,0,,,7/22/2010 20:00
825,174,Blonde,-1,-1,7.5,0,0,0,,,7/22/2010 20:00
826,297,St. Sebastiaan Golden,-1,-1,7.7,0,0,0,,,7/22/2010 20:00
827,221,Pils,-1,-1,4.7,0,0,0,,,7/22/2010 20:00
828,221,Hefe-Weizen,4,50,5.2,0,0,0,,,7/22/2010 20:00
829,368,Xingu,7,86,4.7,0,0,0,,,7/22/2010 20:00
830,562,Slip Knot Imperial IPA 2006,3,31,7.8,0,0,0,,,7/22/2010 20:00
831,447,Bottleworks IPA,3,31,8.5,0,0,0,,,7/22/2010 20:00
832,919,Old Rasputin Russian Imperial Stout,3,43,9,0,0,0,,"Produced in the tradition of 18th Century English brewers who supplied the court of Russia's Catherine the Great, Old Rasputin seems to develop a cult following wherever it goes. It's a rich, intense brew with big complex flavors and a warming finish.",7/22/2010 20:00
833,604,Yeti Imperial Stout,3,43,9.5,0,0,0,,"Traditionally, Imperial Stouts, the biggest and boldest of all stouts, were brewed with massive amounts of roasted malts and hops, resulting in a velvety smooth but robust beer characterized by high alcohol content and extremely high hop bitterness. Meeting the challenge of this aggressive, challenging beer style, Great Divideâ€™s Yeti Imperial Stout is an onslaught of the senses. An almost viscous, inky-black brew, Yeti opens with a massive, roasty, chocolate, coffee malt flavor that eventually gives way to rich toffee and burnt caramel notes. Packed with an enormous quantity of American hops, Yetiâ€™s hop profile reveals a slightly citrusy, piney, and wonderfully dry hoppy finish.",7/22/2010 20:00
834,745,Hefe-Weizen Dunkel,-1,-1,0,0,0,0,,,7/22/2010 20:00
835,745,Winter-Traum,7,84,5.4,0,0,0,,,7/22/2010 20:00
836,301,Poperings Hommel Ale,3,26,7.5,0,0,0,,,7/22/2010 20:00
837,907,Smoked Rye Bock,8,95,0,0,0,0,,,7/22/2010 20:00
838,1263,Russian Imperial Stout,3,42,0,0,0,0,,,7/22/2010 20:00
839,190,Jenlain St Druon de Sebourg,-1,-1,6,0,0,0,,,7/22/2010 20:00
840,196,Les Sans Culottes,-1,-1,7,0,0,0,,,7/22/2010 20:00
841,202,Bruocsella 1900 Grand Cru,5,70,0,0,0,0,,,7/22/2010 20:00
842,188,Scaldis / Bush Amber 12%,-1,-1,12,0,0,0,,,7/22/2010 20:00
843,590,Princess of Darkness Porter,2,25,4.6,0,0,0,,,7/22/2010 20:00
844,590,Impromptu Pale Ale,3,26,5,0,0,0,,,7/22/2010 20:00
845,590,Steinworthy Oktoberfest,7,84,6,0,0,0,,,7/22/2010 20:00
846,590,DSB / Dusters Special Bitter,-1,-1,5.6,0,0,0,,,7/22/2010 20:00
847,590,Bugeater Brown Ale,3,38,4.4,0,0,0,,,7/22/2010 20:00
848,590,Tin Lizzie Hefeweizen,4,50,5.5,0,0,0,,,7/22/2010 20:00
849,590,All-American Lager (discontinued),-1,-1,0,0,0,0,,,7/22/2010 20:00
850,590,Heavenly Helles,-1,-1,5.3,0,0,0,,,7/22/2010 20:00
851,169,Orval Trappist Ale,5,72,6.9,0,0,0,,,7/22/2010 20:00
852,270,Trappist Bruin Bier / BiÃ¨re Brune,-1,-1,0,0,0,0,,,7/22/2010 20:00
853,7,Rochefort 8,-1,-1,9.2,0,0,0,,"Yellowish-brown colour, with a more pronounced aroma, more fruits and a slight amount of Demi-Sec. This variety constitutes the largest proportion of production.",7/22/2010 20:00
854,271,Satan Red,-1,-1,8,0,0,0,,,7/22/2010 20:00
855,671,Entire Stout,3,42,4.5,0,0,0,,,7/22/2010 20:00
856,1056,Ivanhoe,3,26,5.2,0,0,0,,,7/22/2010 20:00
857,277,XX Bitter,-1,-1,6,0,0,0,,,7/22/2010 20:00
858,359,Moza,7,90,0,0,0,0,,,7/22/2010 20:00
859,370,Negra,7,86,5.4,0,0,0,,,7/22/2010 20:00
860,1003,Stout,3,42,0,0,0,0,,,7/22/2010 20:00
861,717,Porter,2,25,0,0,0,0,,,7/22/2010 20:00
862,717,Oktoberfest,7,84,0,0,0,0,,,7/22/2010 20:00
863,717,Tip Top Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
864,1303,DoppelSticke,7,90,8.5,0,0,0,,,7/22/2010 20:00
865,1303,Sticke,3,38,6,0,0,0,,,7/22/2010 20:00
866,1303,Alt,3,38,4.5,0,0,0,,,7/22/2010 20:00
867,742,Hitachino Nest Japanese Classic Ale,1,2,7,0,0,0,,,7/22/2010 20:00
868,1204,9th Anniversary IPA,3,31,7.5,0,0,0,,,7/22/2010 20:00
869,622,Adam,1,13,10,0,0,0,,,7/22/2010 20:00
870,622,Rose,-1,-1,7.5,0,0,0,,,7/22/2010 20:00
871,303,Kasteel Bier Donker-Foncee,-1,-1,11,0,0,0,,,7/22/2010 20:00
872,431,Urthel Samaranth Quadrium Ale,-1,-1,11.5,0,0,0,,,7/22/2010 20:00
873,432,Andelot Mystique,-1,-1,8.5,0,0,0,,,7/22/2010 20:00
874,432,Andelot Angelique,-1,-1,7,0,0,0,,,7/22/2010 20:00
875,432,Andelot Euphorique,-1,-1,6.5,0,0,0,,,7/22/2010 20:00
876,1307,Terrible,5,72,10.5,0,0,0,,"Topped by a sumptuous head of foam, La Terrible possesses a fruity aroma enriched with notes of roasted malt and Madeira. Its long lasting flavour is both elegant and full bodied.

La Terrible is a dark brown beer on lees and is part of a collection of exotic and refined Unibroue beers brewed using 100% natural raw materials. It may be drunk as an aperitif or as an after dinner digestive. It is equally a perfect accompaniment to the above-mentioned dishes or a pleasant alternative to coffee.",7/22/2010 20:00
877,269,Deus Brut des Flandres,-1,-1,11.5,0,0,0,,,7/22/2010 20:00
878,28,Kentucky Ale,3,26,0,0,0,0,,,7/22/2010 20:00
879,935,5 Barrel Pale Ale,1,1,5.3,0,0,0,,"The distinctive hop character of our 5 Barrel Pale Ale is due to the extraction of essential oils from select hops. We treat 5 Barrel Pale Ale to an infusion of fresh whole hop flowers in the Hop Back and the Fermentor, as well as four hop additions during the kettle boil. We like how this gives the beer a fresh, lively flavor and aroma.",7/22/2010 20:00
880,1143,Spruce Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
881,174,Triple ImpÃ©riale,-1,-1,0,0,0,0,,,7/22/2010 20:00
882,189,Avec Les Bons Voeux,-1,-1,9.5,0,0,0,,,7/22/2010 20:00
883,175,Blonde,5,72,6,0,0,0,,This authentic Abbey Ale is based on the recipe perfected centuries ago by the monks of Abbey Du Val-Dieu.,7/22/2010 20:00
884,1143,Oatmeal Cream Stout,3,42,0,0,0,0,,,7/22/2010 20:00
885,903,Augustinian Ale,-1,-1,5.2,0,0,0,,,7/22/2010 20:00
886,1378,Butty Bach,-1,-1,4.5,0,0,0,,,7/22/2010 20:00
887,623,Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
888,109,De Horste Vermeer Traditional Dutch Ale,-1,-1,8,0,0,0,,,7/22/2010 20:00
889,195,Troublette,-1,-1,5.5,0,0,0,,,7/22/2010 20:00
890,194,Blonde Tradition,-1,-1,6.2,0,0,0,,,7/22/2010 20:00
891,128,NoÃ«l,1,13,0,0,0,0,,,7/22/2010 20:00
892,182,Yeti,-1,-1,8,0,0,0,,,7/22/2010 20:00
893,175,Brune / Brown,-1,-1,8,0,0,0,,,7/22/2010 20:00
894,586,Pere Jacques,-1,-1,0,0,0,0,,,7/22/2010 20:00
895,1331,1784 Anniversary Beer,-1,-1,5.4,0,0,0,,,7/22/2010 20:00
896,1331,Baltas Alus,4,50,5.2,0,0,0,,,7/22/2010 20:00
897,623,El Jefe Weizen Ale,4,50,0,0,0,0,,,7/22/2010 20:00
898,89,Hefeweizen,8,95,0,0,0,0,,,7/22/2010 20:00
899,89,Dancing Trout Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
900,1177,Untouchable Pale Ale,3,26,5.5,0,0,0,,,7/22/2010 20:00
901,21,X Extra Pale Ale,3,26,5,0,0,0,,,7/22/2010 20:00
902,584,Chehalem Mountain IPA,3,31,0,0,0,0,,,7/22/2010 20:00
903,892,Moylander Double IPA,3,32,8.5,0,0,0,,"â€œIf One is Good, Then Two is Better!â€ Our Moylander Double IPA is fat and resiny, with aggresive and excessive hops swinging on on an enormous malt backbone like naughty monkeys on a vine. Double malt, double hops - do the math, itâ€™s academic. This brew has twice the things youâ€™re looking for, and itâ€™s big enough to share with the one you love. And isnâ€™t that what it's all about?",7/22/2010 20:00
904,803,Indica India Pale Ale,3,26,6.5,0,0,0,,,7/22/2010 20:00
905,305,Vichtenaar,-1,-1,5.1,0,0,0,,,7/22/2010 20:00
906,261,Zatte Amsterdamse Tripel,-1,-1,8,0,0,0,,,7/22/2010 20:00
907,919,Old Stock Ale 2004,1,13,11.4,0,0,0,,,7/22/2010 20:00
908,604,Old Ruffian,3,35,10.2,0,0,0,,"Old Ruffian is a hefty, hop-forward Barley Wine. Seemingly mellow at first sniff, with its subtle fruit aromas and complex caramel sweetness, this deep mahogany-hued ale quickly shows its true character marked by bold hop flavors and massive hop bitterness. Old Ruffianâ€™s rich, slightly creamy, caramel malt mouthfeel balances its grapefruit, pine, and floral hop flavors, working wonders on your palate.",7/22/2010 20:00
909,849,Talon,-1,-1,10.5,0,0,0,,,7/22/2010 20:00
910,661,Will-BrÃ¤u Ur-Bock,7,90,0,0,0,0,,,7/22/2010 20:00
911,745,Asam-Bock,7,90,6.9,0,0,0,,,7/22/2010 20:00
912,745,Barock-Dunkel,-1,-1,4.7,0,0,0,,,7/22/2010 20:00
913,745,Hefe-Weizen Hell,4,50,0,0,0,0,,,7/22/2010 20:00
914,659,Neuschwansteiner Bavarian Lager,-1,-1,0,0,0,0,,,7/22/2010 20:00
915,1143,Wooly Bully,7,84,0,0,0,0,,,7/22/2010 20:00
916,623,Mongoose IPA,3,31,0,0,0,0,,,7/22/2010 20:00
917,1177,Big Daddy IPA,3,31,6.5,0,0,0,,"No lightweight, Big Daddy I.P.A tips the scales with a huge hop flavor and a clean, dry finish that leaves the scene without a trace.",7/22/2010 20:00
918,604,Titan IPA,3,31,6.8,0,0,0,,"Traditionally India Pale Ales, the hoppiest of all pales, were brewed with more alcohol and large quantities of hops in order to survive the lengthy ocean journey from the U.K. to India. Unlike our brewing forefathers, Great Divide enjoys the modern benefits of refrigeration and we donâ€™t have any plans to ship Titan IPA to India. Instead, we brew Titan IPA for hop disciples â€“ independent beer drinkers seeking out robust, flavorful beers characterized by their abundance of hops flavor, aroma and bitterness. As a big, aggressively hopped India Pale Ale, Titan IPA fills this bill â€“ beginning with piney hop aromas and citrus hop flavors, and finishing with a rich, malty sweetness that is carefully balanced with crisp hop bitterness.",7/22/2010 20:00
919,1185,St Peter's Organic Ale,1,1,4.5,0,0,0,,"Water is extracted from our own 300â€™ deep borehole and combined with Soil Association accredited light malted barley from Norfolk. Organic hops provide the distinctive palate. The yeast used is St. Peterâ€™s own single strand variety. The result is a delicate, clean, crisp, lightly carbonated, traditional English Ale with a full â€˜citrus hopâ€™ aftertaste. This lovely beer won the Soil Associationâ€™s top prize in 2002 and a silver medal in 2006.",7/22/2010 20:00
920,1185,Old-Style Porter,2,25,5.1,0,0,0,,,7/22/2010 20:00
921,1307,Ã‰dition 2005,-1,-1,0,0,0,0,,,7/22/2010 20:00
922,1204,Vertical Epic 05.05.05,-1,-1,8.5,0,0,0,,,7/22/2010 20:00
923,21,Speedway Stout,3,43,12,0,0,0,,"A HUGE Imperial Stout that weighs in at an impressive 12% ABV! As if that's not enough, we added pounds of coffee for a little extra kick. Our special-edition Brewer's Reserve Speedway Stout, which is aged in Bourbon barrels, has been rated the #1 BEST BEER IN THE WORLD at ratebeer.com. It was also featured on CNBC's \Squawk Box\"" in a segment on the best dark beers in America.""",7/22/2010 20:00
924,447,Cream Stout,3,42,0,0,0,0,,,7/22/2010 20:00
925,447,Grand Cru,-1,-1,10,0,0,0,,,7/22/2010 20:00
926,199,AmbrÃ©e / Chestnut Beer,-1,-1,0,0,0,0,,,7/22/2010 20:00
927,441,Quail Springs IPA,3,31,6,0,0,0,,,7/22/2010 20:00
928,447,IPA,3,31,5.5,0,0,0,,,7/22/2010 20:00
929,26,Cambonator Doppelbock,7,90,7.2,0,0,0,,,7/22/2010 20:00
930,447,Best Bitter,-1,-1,5.5,0,0,0,,,7/22/2010 20:00
931,156,Porter Czarny Boss / Black BOSS Porter,3,42,9.6,0,0,0,,,7/22/2010 20:00
932,604,Oak Aged Yeti Imperial Stout,3,43,9.5,0,0,0,,"Crack open Yeti Imperial Stoutâ€™s sophisticated sibling â€“ Oak Aged Yeti Imperial Stout. Although these beers come from the same clan, they have entirely different personalities. Aging on a blend of French and toasted oak chips infuses a subtle oak and vanilla character into Yetiâ€™s already intense chocolate, roasted coffee malt flavor and hugely assertive hop profile. Who says you canâ€™t tame a Yeti?",7/22/2010 20:00
933,1205,Riverboat Rye,-1,-1,0,0,0,0,,,7/22/2010 20:00
934,1205,Masterpiece Porter,2,25,0,0,0,0,,,7/22/2010 20:00
935,1205,Stout,3,42,0,0,0,0,,,7/22/2010 20:00
936,1103,Pioneer Black River Red,3,33,0,0,0,0,,,7/22/2010 20:00
937,207,Pilsner,-1,-1,4.8,0,0,0,,,7/22/2010 20:00
938,1315,Double IPA,3,31,6.8,0,0,0,,,7/22/2010 20:00
939,1315,Dundee Export 90 Scotch Ale,-1,-1,6.5,0,0,0,,,7/22/2010 20:00
940,1315,Blackstone Stout,3,42,5.9,0,0,0,,,7/22/2010 20:00
941,691,Red Ale,3,33,5.5,0,0,0,,,7/22/2010 20:00
942,823,Schuylkill Punch,11,121,6,0,0,0,,"Ruby colored ale fermented with over 500 pounds of real black and red raspberries for a distinct berry aroma and a tart, sweet flavor. This beer is gently filtered to preserve its delicate profile and is made with both Belgian Ale Yeast and our Proprietary Lager Strain.",7/22/2010 20:00
943,823,Nokdechiloff,3,35,12.7,0,0,0,,"This winter warmer will knock the chill away until summer. It used as much malt as our brew house can handle and armloads of fresh hops and lovingly laid in our fermentor for four months. Massively malty and balanced with burly bitterness it is truly the king of beers, approaching wine in strength. A definitive one to have when youâ€™re only having one. Adoringly served in brandy snifters to preserve precious properties.",7/22/2010 20:00
944,823,California Dreaming,3,32,8,0,0,0,,"Imperial, or super IPAâ€™s were spawned out of the fascination of hops by the American consumer and are beyond Pale Ales and IPAâ€™S in terms of both hop and alcohol content. Our interpretation is orange-gold in color, lightly bitter but highly hoppy with a firm malt backbone. 
Weâ€™ll gladly put this head-to-head with the best that those California Hophead/Brewers have to offer.",7/22/2010 20:00
945,823,Manayunk Lager,7,84,6.4,0,0,0,,"In strict accordance with the German purity law of 1516, we present to you this annually brewed festbier. Traditionally brewed in March and stored deep in the caves of Germany, this beer was brought to the masses to celebrate in October. It is a Vienna-style lager with a bit more malt and hops making a malty but balanced beverage. Copper-orange in color, it sports a toasty malt backbone that wonderfully compliments itself with many of our menu items.",7/22/2010 20:00
946,823,Brilliant Barstool,1,1,5.1,0,0,0,,"A true English session ale brewed in the pale ale style using ye olde techniques of yesteryear. Specially crafted to inspire you and your thirstiest mates barstool conversations. Light copper in colour. This pint is quite malty with just enough East Kent hops for a nice, earthy hoppiness. Naturally cask conditioned, this may be served a little cold for a true Brit but is a 
complimentary double nod to one of the 1st beer styles. Cheers mate!",7/22/2010 20:00
947,823,Krooks Mill,3,26,5.3,0,0,0,,"A well-balanced, hoppy American style pale ale with a generous usage of Caramel and Crystal malts. This beer is amber in color and is finished
with fresh Cascade, Columbus and Mt. Hood hops from the Pacific Northwest for a wonderful floral aroma. World Beer Cup Bronze Medal winner and a Perennial favorite here at the Brewery. Also available in bottles to go.",7/22/2010 20:00
948,823,Summer Gold,-1,-1,5,0,0,0,,,7/22/2010 20:00
949,823,Bohemian Blonde,7,77,4.7,0,0,0,,"Our lightest beer â€“ pale blonde in color with a crisp, softly sweet malt flavor, smooth finish and very subtle bitterness. Went to the final judging table at the GABF alongwith the Mega Breweries last year!",7/22/2010 20:00
950,503,Trompe La Mort,7,90,7.4,0,0,0,,,7/22/2010 20:00
951,916,3C Extreme,3,26,0,0,0,0,,,7/22/2010 20:00
952,916,Bill Payer Ale / BPA,3,26,0,0,0,0,,,7/22/2010 20:00
953,916,Ich Bin Ein Berliner Weisse,-1,-1,0,0,0,0,,,7/22/2010 20:00
954,916,Wee Heavier,1,15,9.5,0,0,0,,,7/22/2010 20:00
955,916,Tart,-1,-1,0,0,0,0,,,7/22/2010 20:00
956,916,Spring Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
957,449,PÃ©chÃ© Mortel,-1,-1,0,0,0,0,,,7/22/2010 20:00
958,290,Oude Gueuze Vielle,5,70,0,0,0,0,,,7/22/2010 20:00
959,202,Lambic 2002,-1,-1,0,0,0,0,,,7/22/2010 20:00
960,283,Gueuze 1882,5,70,5,0,0,0,,,7/22/2010 20:00
961,691,Oatmeal Stout,3,42,0,0,0,0,,,7/22/2010 20:00
962,691,Belgian Singel,-1,-1,0,0,0,0,,,7/22/2010 20:00
963,691,IPA,3,31,0,0,0,0,,,7/22/2010 20:00
964,691,Kolsch,-1,-1,0,0,0,0,,,7/22/2010 20:00
965,1321,Dunkelweizen,-1,-1,0,0,0,0,,,7/22/2010 20:00
966,1321,Regiment Pale Ale,3,26,6.1,0,0,0,,,7/22/2010 20:00
967,1321,Red Coat Ale,3,33,5.7,0,0,0,,,7/22/2010 20:00
968,1158,Instigator Doppelbock,7,90,7.5,0,0,0,,,7/22/2010 20:00
969,1158,Piketown Pils,-1,-1,5.1,0,0,0,,,7/22/2010 20:00
970,1158,Seamus Irish Red,-1,-1,5.6,0,0,0,,,7/22/2010 20:00
971,1158,Helles Bock,7,90,6.6,0,0,0,,,7/22/2010 20:00
972,1158,Burns Scottish Ale,-1,-1,5.3,0,0,0,,,7/22/2010 20:00
973,1158,Anniversary IPA Ahtanum,3,31,7.2,0,0,0,,,7/22/2010 20:00
974,1158,Anniversary IPA Glacier,3,31,7.2,0,0,0,,,7/22/2010 20:00
975,1158,Route 113 IPA,3,31,7.2,0,0,0,,"A big, flavorful IPA for all the hopheads out there, brewed with British Pale and Crystal malts, and hopped with Centennial, Cascade, German Northern Brewer, & UK East Kent Goldings. Bold and spicy.",7/22/2010 20:00
976,1158,Featherweight Lager,8,95,4.1,0,0,0,,,7/22/2010 20:00
977,1158,Royal Weisse,4,50,5.7,0,0,0,,,7/22/2010 20:00
978,1158,Phoenix Pale Ale,3,26,5.5,0,0,0,,,7/22/2010 20:00
979,1158,Helles Golden Lager,-1,-1,4.7,0,0,0,,,7/22/2010 20:00
980,409,Golden Treasure,3,37,4.2,0,0,0,,"For those who enjoy a clean, crisp, refreshing beer this medium copper colored brew is perfect. With its low level of hop bitterness and slightly sweet flavor it is one of our lightest ales. We use the lightest grains with Kent Goldings and Liberty hops. This beer is an excellent choice for the not so brave.",7/22/2010 20:00
981,409,Crabby Larry's Irish Red Ale,2,22,6,0,0,0,,Rich and smooth on the pallate this ale is a near perfect Irish Red. A variety of hops Liberty & Fuggles combined with some roasted barley make an agreeable brew.,7/22/2010 20:00
982,409,Calico Jack Amber Ale,3,33,5.4,0,0,0,,"A rich, malty beer made with classic American hops for a full and complex flavor. Very smooth in aroma and palate. The caramel overtones leave a nice finish.",7/22/2010 20:00
983,409,Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
984,409,Summer Lager,8,95,0,0,0,0,,,7/22/2010 20:00
985,1011,Irish Stout,3,42,0,0,0,0,,,7/22/2010 20:00
986,1011,Hop Hazard,3,26,0,0,0,0,,,7/22/2010 20:00
987,1011,Indian Red Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
988,1011,Lager,8,95,0,0,0,0,,,7/22/2010 20:00
989,1011,Special Ale,3,33,0,0,0,0,,,7/22/2010 20:00
990,841,Irish Red Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
991,841,Abbey 8,-1,-1,8,0,0,0,,,7/22/2010 20:00
992,841,Farmhouse Saison,-1,-1,6.2,0,0,0,,,7/22/2010 20:00
993,841,East Kent IPA,3,31,6.6,0,0,0,,,7/22/2010 20:00
994,841,French Country Spring Beer,-1,-1,6.5,0,0,0,,,7/22/2010 20:00
995,841,Black Lab Stout,3,42,5.7,0,0,0,,,7/22/2010 20:00
996,841,Old Rogue Pale Ale,3,26,5.5,0,0,0,,,7/22/2010 20:00
997,841,Unicorn Amber Ale,3,33,4,0,0,0,,,7/22/2010 20:00
998,841,Light Lager,8,95,3.5,0,0,0,,,7/22/2010 20:00
999,721,Half Again Bock,7,90,0,0,0,0,,,7/22/2010 20:00
1000,721,Winterfest Lager,7,84,0,0,0,0,,,7/22/2010 20:00
1001,721,Scottish Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
1002,721,Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
1003,721,Light Lager,8,95,0,0,0,0,,,7/22/2010 20:00
1004,700,Russian Imperial Stout,3,42,9.5,0,0,0,,,7/22/2010 20:00
1005,700,Irish Red Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
1006,700,Iron Hill Belgian Tripel,-1,-1,9.5,0,0,0,,"Traditional Belgian-style golden ale, complex aroma and flavor of plums, spice and bananas with a refreshing balanced bitterness.",7/22/2010 20:00
1007,700,Pig Iron Porter,2,25,0,0,0,0,,"Historically, porter had its heyday in 18th century London, where it was the beer of the working class. It doesn't take much to work up a thirst for this flavorful beer. The distinct roasted and chocolate notes are well balanced by a slight bitterness.",7/22/2010 20:00
1008,700,Ironbound Ale,3,26,5.1,0,0,0,,"Hold onto your beer mugs, because this medium-bodied beer has been overwhelmed with hop additions. Brewed as an American pale ale, it's a celebration of American hop varieties: Cascade, Crystal, Centennial and Chinook. You won't be disappointed.",7/22/2010 20:00
1009,700,Lodestone Lager,-1,-1,0,0,0,0,,,7/22/2010 20:00
1010,700,Anvil Ale,1,5,4.8,0,0,0,,"English style best bitter. It is a traditional English pub ale that is easy drinking, often referred to as a \session beer\"". It is medium-bodied and copper colored with a noticeable malt flavor up front that finishes with a hop bitterness and floral hop flavor.""",7/22/2010 20:00
1011,700,Light Lager,8,95,0,0,0,0,,,7/22/2010 20:00
1012,227,Brau Light,8,95,0,0,0,0,,,7/22/2010 20:00
1013,549,Dirty Bastard Scotch Style Ale,1,15,8.5,0,0,0,,"Founders flagship beer. Dirty Bastard is an absolute beautiful beer to behold. Dark ruby in color and brewed with ten varieties of imported malts this beer continuously lives up to its reputation as a bold and powerful ale. Dirty Bastard is complex in the finish with hints of smoke and peat paired with a malty richness, finalized with a good bit of hop attitude.  This beer ain't for the wee lads.",7/22/2010 20:00
1014,71,Eagle Lake Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
1015,71,Rapidan Brown,3,38,0,0,0,0,,,7/22/2010 20:00
1016,71,Saint Peter Red,3,33,0,0,0,0,,,7/22/2010 20:00
1017,71,Mankato Gold,-1,-1,0,0,0,0,,,7/22/2010 20:00
1018,71,Anniversary Ale,1,13,9,0,0,0,,,7/22/2010 20:00
1019,71,Kasota IPA,3,31,0,0,0,0,,,7/22/2010 20:00
1020,62,The Beast Grand Cru,5,66,14.9,0,0,0,,"The Beast is a seducer - accommodating, complicated, powerful, dark and created to last the ages. With a deep burgundy color and aromas of honey, nutmeg, mandarin orange and pineapple, this massive and challenging brew has flavors akin to a beautiful Carribean rum. Dates, plums, raisins and molasses are dominant in a rich vinous texture. Cellarable for 10+ years.",7/22/2010 20:00
1021,23,Four,-1,-1,10,0,0,0,,,7/22/2010 20:00
1022,272,Special Extra Export Stout,-1,-1,9,0,0,0,,,7/22/2010 20:00
1023,521,Pilsner,-1,-1,0,0,0,0,,,7/22/2010 20:00
1024,521,Lemon Wheat,11,116,0,0,0,0,,,7/22/2010 20:00
1025,521,Stout,3,42,0,0,0,0,,,7/22/2010 20:00
1026,521,Bock,7,90,0,0,0,0,,,7/22/2010 20:00
1027,942,Long Face Amber,3,33,0,0,0,0,,,7/22/2010 20:00
1028,942,Marzen Lager,7,84,0,0,0,0,,,7/22/2010 20:00
1029,942,Off KIL Ter Scottish Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
1030,942,"Stout \To Be Named Later\""""",3,42,0,0,0,0,,,7/22/2010 20:00
1031,942,Mild Brown,3,38,0,0,0,0,,,7/22/2010 20:00
1032,942,Caramel Apple Ale,1,10,0,0,0,0,,,7/22/2010 20:00
1033,612,Wexford Irish Cream Ale,11,113,5,0,0,0,,"Based on a traditional Irish recipe from county Wexford that dates back to 1810, we use only the best ingredients to ensure that our Wexford Ale has a smooth mellow creaminess we believe you will enjoy.",7/22/2010 20:00
1034,23,Grand Cru,-1,-1,7.2,0,0,0,,,7/22/2010 20:00
1035,1204,Old Guardian Barley Wine 2005,-1,-1,0,0,0,0,,,7/22/2010 20:00
1036,98,Wee Heavy,1,15,6.5,0,0,0,,,7/22/2010 20:00
1037,1162,Roza Reserve,-1,-1,0,0,0,0,,,7/22/2010 20:00
1038,26,Winterfestival,7,84,5.5,0,0,0,,,7/22/2010 20:00
1039,15,St. Martin Doppelbock,7,90,7.5,0,0,0,,,7/22/2010 20:00
1040,15,JubilÃ¤ums German Pils,-1,-1,0,0,0,0,,,7/22/2010 20:00
1041,26,Bayrisch Hell,-1,-1,4.7,0,0,0,,,7/22/2010 20:00
1042,1181,Sprecher Doppelbock,7,92,7.85,0,0,0,,This dark lager was originally brewed as liquid bread to sustain Bavarian monks while fasting. Its sweet complex malt character comes from brewing with many varieties of dark roasted caramel malts and long periods of cold storage (6 months).,7/22/2010 20:00
1043,1295,Gingered Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
1044,1295,Bourbon Barrel Scotch Ale,-1,-1,7.5,0,0,0,,,7/22/2010 20:00
1045,1295,Burntwood Black Ale,2,25,0,0,0,0,,,7/22/2010 20:00
1046,1295,Derailed Ale,3,26,0,0,0,0,,,7/22/2010 20:00
1047,527,HabaÃ±ero,-1,-1,0,0,0,0,,,7/22/2010 20:00
1048,527,1100 Wheat Wine,-1,-1,11.5,0,0,0,,,7/22/2010 20:00
1049,527,Witchtree ESB,-1,-1,5.6,0,0,0,,,7/22/2010 20:00
1050,527,Big Boat Oatmeal Stout,3,42,6.6,0,0,0,,,7/22/2010 20:00
1051,527,XXX English Ale,3,26,6.6,0,0,0,,,7/22/2010 20:00
1052,527,El NiÃ±o IPA,3,31,0,0,0,0,,,7/22/2010 20:00
1053,527,Starfire Pale Ale,3,26,6.2,0,0,0,,,7/22/2010 20:00
1054,527,Farmhouse Reserve,-1,-1,6.3,0,0,0,,,7/22/2010 20:00
1055,527,Lighthouse Ale,8,95,4.4,0,0,0,,,7/22/2010 20:00
1056,1169,Chocolate Mint Stout,-1,-1,0,0,0,0,,,7/22/2010 20:00
1057,1169,Porter,2,25,0,0,0,0,,,7/22/2010 20:00
1058,1169,Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
1059,1169,Nut Brown Ale,3,38,4.2,0,0,0,,,7/22/2010 20:00
1060,1169,Honey Pilsner,8,95,4.5,0,0,0,,,7/22/2010 20:00
1061,1169,Cream Ale,8,95,0,0,0,0,,,7/22/2010 20:00
1062,170,Moneuse Speciale NoÃ«l,-1,-1,0,0,0,0,,,7/22/2010 20:00
1063,192,Speciale NoÃ«l,-1,-1,0,0,0,0,,,7/22/2010 20:00
1064,246,Christmas Ale,-1,-1,8.5,0,0,0,,,7/22/2010 20:00
1065,432,K-O Blond Beer,-1,-1,10,0,0,0,,,7/22/2010 20:00
1066,295,Brune / Bruin,-1,-1,7.5,0,0,0,,,7/22/2010 20:00
1067,296,Grotten Brown,3,29,6.7,0,0,0,,"The latest acquisition â€œGrottenbierâ€ was created by Master Brewer Pierre Celis. It is an aromatic dark beer with 6.5% alcohol content.

In the marl pits in Kanne ( Belgium) and Valkenburg (the Netherlands), deep under the ground, you can taste the Grottenbier in a constant temperature of 11Â° Celsius.

As it is the case with Champagne, the bottles are placed in a â€œpupitreâ€ with results in an additional fermentation. 

This beer with a high fermentation with a second fermentation in the bottle has been pointed out as one of the best 10 present-day beers by beer guru Michael Jackson.",7/22/2010 20:00
1068,447,Barley Wine Ale,-1,-1,10,0,0,0,,,7/22/2010 20:00
1069,622,Doggie Claws 2004,-1,-1,11.5,0,0,0,,,7/22/2010 20:00
1070,765,Imperial Stout,3,42,8.2,0,0,0,,,7/22/2010 20:00
1071,765,Censored (aka The Kronic),3,33,5.9,0,0,0,,,7/22/2010 20:00
1072,703,Wee Beast,1,15,7,0,0,0,,,7/22/2010 20:00
1073,286,Bloesem Bink,-1,-1,7.1,0,0,0,,,7/22/2010 20:00
1074,282,Loterbol,-1,-1,8,0,0,0,,,7/22/2010 20:00
1075,1242,IPA,3,31,6.7,0,0,0,,,7/22/2010 20:00
1076,622,Ruth,-1,-1,4.5,0,0,0,,,7/22/2010 20:00
1077,693,Mojave Gold,8,95,0,0,0,0,,,7/22/2010 20:00
1078,693,Eastern Sierra Lager,-1,-1,0,0,0,0,,,7/22/2010 20:00
1079,1366,Princess of Darkness Porter,2,25,5.4,0,0,0,,,7/22/2010 20:00
1080,693,Mojave Red,8,95,0,0,0,0,,,7/22/2010 20:00
1081,693,Desert Pale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
1082,592,Plaid Bastard,1,15,8,0,0,0,,,7/22/2010 20:00
1083,577,Dos Rios Vienna Lager,8,95,0,0,0,0,,,7/22/2010 20:00
1084,371,Rye On,8,95,4.8,0,0,0,,,7/22/2010 20:00
1085,116,Black Lab Stout,3,42,0,0,0,0,,,7/22/2010 20:00
1086,36,Loyal Duke Scotch Ale,1,15,8.6,0,0,0,,,7/22/2010 20:00
1087,822,Amber,3,38,0,0,0,0,,,7/22/2010 20:00
1088,702,Jubilee Ale,1,13,0,0,0,0,,,7/22/2010 20:00
1089,382,Mocha Joe,-1,-1,8.1,0,0,0,,,7/22/2010 20:00
1090,491,Otis Alt,3,38,5.3,0,0,0,,,7/22/2010 20:00
1091,977,Weizen,4,50,0,0,0,0,,,7/22/2010 20:00
1092,1284,Kellerbier,-1,-1,0,0,0,0,,,7/22/2010 20:00
1093,1258,American Pale Ale,3,26,5.2,0,0,0,,"Thomas Hooker American Pale Ale is an extremely vivid, medium-bodied brew. Hooker Pale Ale stresses the crisp bitterness, lingering resin flavor, and aroma of American hops which are characteristic of the most distinctive West Coast Ales. The caramel sweetness of the malt balances the chock-full-of-hops flavor to yield a complex but quite refreshing brew.",7/22/2010 20:00
1094,1333,Sled Dog Doppelbock,7,90,0,0,0,0,,,7/22/2010 20:00
1095,866,Weathertop Doppelbock,7,90,7.3,0,0,0,,,7/22/2010 20:00
1096,1013,Wheat Wine,-1,-1,11.5,0,0,0,,,7/22/2010 20:00
1097,601,Pioneer Peak Porter,2,25,4.3,0,0,0,,,7/22/2010 20:00
1098,513,Wild Banshee Barleywine,-1,-1,9.8,0,0,0,,,7/22/2010 20:00
1099,124,Thundermuck Stout,3,42,0,0,0,0,,,7/22/2010 20:00
1100,904,Solidarity,3,42,0,0,0,0,,,7/22/2010 20:00
1101,444,Irish Red,-1,-1,0,0,0,0,,,7/22/2010 20:00
1102,625,Buccaneer Brown Ale,3,38,0,0,0,0,,,7/22/2010 20:00
1103,834,Hoppy Hour IPA,3,31,0,0,0,0,,,7/22/2010 20:00
1104,1044,Sisyphus Barleywine,-1,-1,11.1,0,0,0,,,7/22/2010 20:00
1105,1025,Pallavicini Pilsner,-1,-1,0,0,0,0,,,7/22/2010 20:00
1106,1027,Four Alarm Alt,3,38,4.8,0,0,0,,,7/22/2010 20:00
1107,818,Hibernator Doppelbock,7,90,0,0,0,0,,,7/22/2010 20:00
1108,860,Silver,-1,-1,5.1,0,0,0,,,7/22/2010 20:00
1109,1119,IPA,3,31,0,0,0,0,,,7/22/2010 20:00
1110,1129,Thunderhead Amber Ale,3,33,6,0,0,0,,,7/22/2010 20:00
1111,1145,Impale Ale,3,26,0,0,0,0,,,7/22/2010 20:00
1112,1294,Old Town IPA,3,31,0,0,0,0,,,7/22/2010 20:00
1113,1305,Emancipator,7,90,8.3,0,0,0,,,7/22/2010 20:00
1114,778,Pale,3,26,0,0,0,0,,,7/22/2010 20:00
1115,1263,Black Sheep Espresso Stout,-1,-1,0,0,0,0,,,7/22/2010 20:00
1116,76,Superhop Ale,3,26,5.6,0,0,0,,,7/22/2010 20:00
1117,144,Oatmeal Stout,1,21,4.5,0,0,0,,,7/22/2010 20:00
1118,841,5 Czars Imperial Stout,3,42,0,0,0,0,,,7/22/2010 20:00
1119,537,Ironhead Porter Old No. 3,2,25,6,0,0,0,,,7/22/2010 20:00
1120,383,KÃ¶lsch,-1,-1,0,0,0,0,,,7/22/2010 20:00
1121,823,Slam Dunkel,-1,-1,0,0,0,0,,,7/22/2010 20:00
1122,16,Irvington Porter,2,25,0,0,0,0,,,7/22/2010 20:00
1123,485,Marzen,7,84,0,0,0,0,,,7/22/2010 20:00
1124,239,Big Woody Lager,-1,-1,0,0,0,0,,,7/22/2010 20:00
1125,118,Schaumbergfest,7,84,0,0,0,0,,,7/22/2010 20:00
1126,59,Tannhauser,3,26,0,0,0,0,,,7/22/2010 20:00
1127,263,Trappist Westvleteren 8,5,60,8,0,0,0,,,7/22/2010 20:00
1128,1261,Peat Smoked Altbier,8,95,0,0,0,0,,,7/22/2010 20:00
1129,879,Billings IPA,3,31,0,0,0,0,,,7/22/2010 20:00
1130,64,Peak One Porter,2,25,0,0,0,0,,,7/22/2010 20:00
1131,64,Old Smoky,8,95,0,0,0,0,,,7/22/2010 20:00
1132,1379,St. Charles ESB,1,5,4.5,0,0,0,,"Our British-style session beer is cask conditioned and dry hopped. Tea colored with a toasted malt flavor, it's an easy drinker with a light mouthfeel and elgeant hop nose.",7/22/2010 20:00
1133,440,Wild Turkey Bourbon Stout,-1,-1,0,0,0,0,,,7/22/2010 20:00
1134,440,Lucky U Denver Special Bitter,-1,-1,4.46,0,0,0,,,7/22/2010 20:00
1135,440,Redwing,3,33,4.73,0,0,0,,,7/22/2010 20:00
1136,440,Pale Ale,3,26,5.5,0,0,0,,,7/22/2010 20:00
1137,440,Oatmeal Stout,3,42,6.54,0,0,0,,,7/22/2010 20:00
1138,440,Nut Brown Ale,3,38,5.2,0,0,0,,,7/22/2010 20:00
1139,440,Singletrack Copper Ale,3,26,5.57,0,0,0,,,7/22/2010 20:00
1140,440,Buffalo Gold,-1,-1,6.3,0,0,0,,,7/22/2010 20:00
1141,440,Honey Wheat,-1,-1,4.46,0,0,0,,,7/22/2010 20:00
1142,440,Pilsner,8,95,4.99,0,0,0,,,7/22/2010 20:00
1143,236,Thunder Stout,3,42,4.95,0,0,0,,,7/22/2010 20:00
1144,236,Autumn Ale,3,38,6.7,0,0,0,,,7/22/2010 20:00
1145,236,Lucky U Denver Special Bitter,-1,-1,0,0,0,0,,,7/22/2010 20:00
1146,236,471 Pilsner,-1,-1,0,0,0,0,,,7/22/2010 20:00
1147,1045,Mortality Stout,3,42,7.5,0,0,0,,,7/22/2010 20:00
1148,1243,Big Hoppy Monster,3,33,8.75,0,0,0,,This mammoth imperial red ale leads with a tantalizing hop aroma that is quickly complemented by an enormous malt backbone & finished with a multitude of hoppy goodness.,7/22/2010 20:00
1149,81,Sublimator Doppelbock,7,90,0,0,0,0,,,7/22/2010 20:00
1150,159,Strom Bomb Stout,3,42,7.3,0,0,0,,,7/22/2010 20:00
1151,751,Black Sand Porter,2,25,0,0,0,0,,,7/22/2010 20:00
1152,814,Powell Porter,2,25,0,0,0,0,,,7/22/2010 20:00
1153,814,Eager Beaver IPA,3,31,0,0,0,0,,,7/22/2010 20:00
1154,376,IPA,3,31,6.9,0,0,0,,,7/22/2010 20:00
1155,376,Black Cat Stout,3,42,6.15,0,0,0,,,7/22/2010 20:00
1156,376,Fat Cat,-1,-1,7.25,0,0,0,,,7/22/2010 20:00
1157,376,Arrogant Brit,-1,-1,5.3,0,0,0,,,7/22/2010 20:00
1158,376,Pilsner,-1,-1,4.85,0,0,0,,,7/22/2010 20:00
1159,540,Dogtoberfest Octoberfest,7,84,5.3,0,0,0,,"Dogtoberfest are shrouded in mystery, but scholars think it has everything to do with an insane German king and a crazed Oompah band. You can read the full historical record of Dogtoberfest at FlyingDogAles.com. Dogtoberfest is deep mahogany in color with an intriguing caramel finish and brewed with 100% imported German ingredients for a true German flavor.",7/22/2010 20:00
1160,1064,Lucky U ESB,-1,-1,5.1,0,0,0,,,7/22/2010 20:00
1161,1064,Purple Nightie,-1,-1,6.2,0,0,0,,,7/22/2010 20:00
1162,1064,Rocktoberfest,7,84,5,0,0,0,,,7/22/2010 20:00
1163,78,Dark Knight,-1,-1,12,0,0,0,,,7/22/2010 20:00
1164,78,Sunny Summer Ale,-1,-1,0,0,0,0,,,7/22/2010 20:00
1165,78,Wit,-1,-1,0,0,0,0,,,7/22/2010 20:00
1166,78,Old Eight Porter,3,42,0,0,0,0,,,7/22/2010 20:00
1167,78,Wild Brunette,-1,-1,7.5,0,0,0,,,7/22/2010 20:00
1168,78,Stockyard IPA,3,31,0,0,0,0,,,7/22/2010 20:00
1169,78,Little Barley Bitter,-1,-1,0,0,0,0,,,7/22/2010 20:00
1170,869,Black H2O Oatmeal Stout,1,21,6.2,0,0,0,,"This is our darkest and most heavy regular offering. It is virtually black in color and features rich roasted malt flavor with a delicate caramel and vanilla finish. It is carbonated and served with the use of nitrogen gas, giving the Black Water a beautiful cascading pour and thick, creamy foam atop your glass. Made with only the freshest American malts and English hops.",7/22/2010 20:00
1171,869,Masala Mama IPA,3,31,5.9,0,0,0,,"Our brewers believe an American IPA should be full of American hops. Masala Mama uses three different West Coast varieties, over five hop additions. This copper-colored ale is not strictly about hops; American pale barley and several caramel malts balance the flavor for a green, toasted caramel finish. The British realized an abundance of hops will help preserve beer â€¦ we realized hops can preserve our customers.",7/22/2010 20:00
1172,869,Smoked Porter,8,95,0,0,0,0,,,7/22/2010 20:00
1173,869,Tripel Vision,-1,-1,0,0,0,0,,,7/22/2010 20:00
1174,869,Hope & King Scotch Ale,1,15,6,0,0,0,,"Hope and King is a full-body brew and is rich in malt complexity. Brewed with both English and American barley and many, many specialty malts this deeply colored ale has hints of roasted chocolate, caramel and raisins with very little hop presence. Our interpretation of the classic ale that originated in Glasgow, Scotland.",7/22/2010 20:00`

module.exports = beerCSV
