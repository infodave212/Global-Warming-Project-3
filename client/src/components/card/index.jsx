import CardBody from "../cardBody"
function Card({data}) {
    return <>
        <div class="body_resize">
            <div class="left"> 
         {data.map(pollutant=><CardBody pollutant={pollutant}/>)}  
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </div>
            <div class="right">
                <h2><span>Sidebar</span> Menu</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">TemplateInfo</a></li>
                    <li><a href="#">Style Demo</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Archives</a></li>
                </ul>
                <h2><span>Sponsors</span></h2>
                <ul class="sponsors">
                    <li class="sponsors"><a href="#">Lorem ipsum dolor</a><br />
                        Donec libero. Suspendisse bibendum</li>
                    <li class="sponsors"><a href="#">Donec mattis</a><br />
                        Phasellus suscipit, leo a pharetra</li>
                    <li class="sponsors"><a href="#">Dui pede condimentum</a><br />
                        Tellus eleifend magna eget</li>
                    <li class="sponsors"><a href="#">Condimentum lorem</a><br />
                        Curabitur vel urna in tristique</li>
                    <li class="sponsors"><a href="#">Fringilla velit magna</a><br />
                        Cras id urna orbi tincidunt orci ac</li>
                    <li class="sponsors"><a href="#">Suspendisse bibendum</a><br />
                        purus nec placerat bibendum</li>
                </ul>
                <p>&nbsp;</p>
                <h2><span>Search</span></h2>
                <div class="search">
                    <form id="form1" name="form1" method="post" action="#">
                        <span>
                            <input name="q" type="text" class="keywords" id="textfield" maxlength="50" value="Search..." />
                        </span>
                        <input name="b" type="image" src="images/search.gif" class="button" />
                    </form>
                </div>
                <div class="clr"></div>
            </div>
            <div class="clr"></div>
        </div>
    </>
}
export default Card