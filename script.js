const tabs = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelector(".tab-content");

const tabsArray = [
  {
    id: "tab1",
    title: "History",
    text: "History: I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up",
  },
  {
    id: "tab2",
    title: "Vision",
    text: "Vision: Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.",
  },
  {
    id: "tab3",
    title: "Goals",
    text: "Goals: Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.",
  },
];

window.addEventListener("DOMContentLoaded", function () {
  const firstTab = tabsArray[0];
  const firstButton = document.querySelector(`[data-id="${firstTab.id}"]`);

  if (firstButton) {
    firstButton.classList.add("active");
  }
  tabContent.textContent = firstTab.text;
});

tabs.forEach((button) => {
  button.addEventListener("click", function () {
    const tabId = button.dataset.id;

    tabs.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");

    const tabData = tabsArray.find((tab) => tab.id === tabId);

    if (tabData) {
      tabContent.textContent = tabData.text;
    }
  });
});
