## Summary - 
This data visualization is based on the cleanup and analysis of the Titanic Dataset performed for [Project 2][1] of Udacity's "Introduction to Data Science" course, and evaluates the survival rate of passengers based on various attributes. Passengers were divided into eight distinct groups based on their sex, age, and whether they were traveling alone or with other family members.

## [Final Version](http://bl.ocks.org/geektb/raw/a9e062783772d2329d327749c16f00e4/)
<img src="https://cdn.rawgit.com/geektb/UdacityDAND/master/2017-01-03%2014_44_08-bl.ocks.org_geektb_raw_3b6dbb815a7b4094ba82b9fcf1200dbb_.png" width="600">

## Design - 
My main goal was to convey the disparity between the various passenger groups that were onboard the Titanic and how belonging to a certain group affected their chances of survival.

[Version 1](http://bl.ocks.org/geektb/raw/400e9d4592115a3075bc11d58f329747/) - I started with a vertical grouped bar chart and then decided to rotate it because I thought it made for a better visual when [comparing the groups](http://dimplejs.org/examples_viewer.html?id=bars_horizontal_grouped). I also decided to split each group based on the passengers’ ticket class because my previous analysis showed that there was some correlation between how much each passenger paid for the ticket and their chance for survival. 

[Version 2](http://bl.ocks.org/geektb/raw/56c0ff75e9dbea15bdad97c1cad2371b/) - In this version, I addressed the responses I got in feedback 1 and 2 as follows:

* Added Title and description of both the Titanic and the dataset itself.
* Added red and green backgrounds to the appropriate sections of the chart to indicate if the passenger survived or not.
* Colored the Y-Axis and increased its visibility to match the red and green backgrounds above.
* Changed the Y-Axis values that showed as negative to their absolute values.
* Ordered the categories on the chart and the legend in ascending order by group description and spaced the legend so each color is aligned with the group on the chart.

[Final Version](http://bl.ocks.org/geektb/raw/a9e062783772d2329d327749c16f00e4/) - In this version I included some of the comments in feedback 3 such as removing the "?" after the "Survived" text in the tooltip. I also centered the chart on the page based on feedback 1. Regarding the feedback to make the numbers relative and dynamic. I thought that was excellent feedback but didn't implement these changes because I didn't want to lose the visual effect of the yellow line dwarfing everything because I thought that the difference in the number of passengers as opposed to the relative number showed the disparity more accurately. 

I also chose to not change the chart to have drillable options for every single attribute because although a chart like that would be very interactive, it didn't align with my goal of showing the disparity amount the groups. Instead, I added a check box the collapsed the ticket class breakdown of each grouping to give the audience a more general comparison between the different groups.

## Feedback - 
*Feedback # 1* - [Udacity Forum][2] response to [version 1](http://bl.ocks.org/geektb/raw/400e9d4592115a3075bc11d58f329747/). Respondent made several general comments about the lack of title and description, along with a recommendation to center the chart on the page. 

*Feedback # 2* - The second feedback I received for [version 1](http://bl.ocks.org/geektb/raw/400e9d4592115a3075bc11d58f329747/) was from a family member without any significant experience with data analysis. They indicated that they found the X-axis numbering showing negative values to be confusing and weren't sure what those meant. They also said that it's hard to see on the chart itself where the x-axis is because it looks like all the other grid lines. Lastly, they indicated that it was hard to visually link between the grouping in the chart to the legend.

*Feedback # 3* - The 3rd Feedback I received was for [version 2](http://bl.ocks.org/geektb/raw/56c0ff75e9dbea15bdad97c1cad2371b/) and came from a family member that happens to have a PhD in Data Sciences. His suggestions were as follows:

* remove the ? after the word survived
* make everything relative - don't count absolute survivors but the relative proportion, (or at least give it as additional data), currently the yellow line is dwarfing everything else make the zero border much more visible, and provide a title in each side
* Provide data about groups also (not just sub groups) - meaning, female vs male and child vs adult
* I would make everything "breakable" to have a drill down, and dynamic - get the total, cut by class/gender/age by your desired order allow getting relative and absolute figures. currently, for example, you cannot tell if being female "helped" children to survive as it did for the grown-ups


## Resources -
Udacity's [P6 Data Visualization with D3][3] Forum.

Dimple JS [Examples.][4]

Dimple JS [API Documentation.][5]

D3 [Examples Gallery.][6]

D3 [Tutorials.][7]

D3 [API Documentation.][8]

[1]:https://github.com/geektb/UdacityDAND/blob/master/P2%20Project%20-%20Titanic.ipynb
[2]:https://discussions.udacity.com/t/p6-project-feedback-needed/206839
[3]:https://discussions.udacity.com/c/nd002-p6-data-visualization-with-d3-js
[4]:http://dimplejs.org/examples_index.html
[5]:https://github.com/PMSI-AlignAlytics/dimple/wiki
[6]:https://github.com/d3/d3/wiki/Gallery
[7]:https://github.com/d3/d3/wiki/Tutorials
[8]:https://github.com/d3/d3/blob/master/API.md
