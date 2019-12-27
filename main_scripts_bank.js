var isMobile = navigator.userAgent.match(/(iPhone)|(iPod)|(android)|(webOS)/i);
function isMobile_check(){ 
  try{
  if (isMobile==null) {
    return "click"
  } else {return "touchstart"}
} 
catch (err) {} };  

(function() {
    try {
        document.body.addEventListener(isMobile_check(), function(event) {
            if (event.target) {
                var elem = event.target;
                    if (elem.tagName.toLowerCase().trim() == "a") {
                      if (elem.className == "registration_btn"){
                        var url_bank = elem.href.replace(/^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?/,'$3');
                        dataLayerSU.push({
                                        event: {{AFL.Constant.autoEvent.78-1}},
                                        eventCategory: "afl-bonus_cobrand-bank",
                                        eventAction: "cobrand-bank_click_button_order_card-" + url_bank,
                                        eventLabel: JSON.stringify({
                                          "name-card": elem.parentNode.parentNode.querySelector(".card_title").innerText,
                                          "type-card": elem.parentNode.parentNode.querySelector(".card_type").innerText,
                                          "count-spent": elem.parentNode.parentNode.querySelector(".spent").innerText }),
                                              });
                                            }
                        else if (elem.className == "card_btn"){
                         dataLayerSU.push({
                                        event: {{AFL.Constant.autoEvent.78-1}},
                                        eventCategory: "afl-bonus_cobrand-bank",
                                        eventAction: "cobrand-bank_click_button_header-select_card"
                                                })
                                            }
                        else if (elem.className == "program_btn"){
                         dataLayerSU.push({
                                        event: {{AFL.Constant.autoEvent.78-1}},
                                        eventCategory: "afl-bonus_cobrand-bank",
                                        eventAction: "cobrand-bank_click_button_footer-join_afl_bonus_programme",
                                        eventLabel: "from_" + location.href 
                                          
                                                })
                                            }
                        else if (elem.classList[1] == "bank_img"){
                         dataLayerSU.push({
                                        event: {{AFL.Constant.autoEvent.78-1}},
                                        eventCategory: "afl-bonus_cobrand-bank",
                                        eventAction: "cobrand-bank_click_button_tab-select_bank",
                                        eventLabel: JSON.stringify({
                                          "name-bank": elem.getAttribute("title").toLowerCase()})
                                            })
                                            }
                        else if (elem.classList[0] == "r-tabs-anchor" && isMobile==null){
                        dataLayerSU.push({
                                         event: {{AFL.Constant.autoEvent.78-1}},
                                         eventCategory: "afl-bonus_cobrand-bank",
                                         eventAction: "cobrand-bank_click_button_tab-select_card",
                                         eventLabel: JSON.stringify({
                                            "name-bank": document.querySelector(".r-tabs-state-active").firstChild.getAttribute("title").toLowerCase(),
                                            "name-card": elem.textContent       
                                                    })
                                                  })
                        };
                    elem = elem.parentNode;

                } else if (elem.tagName.toLowerCase().trim() == "img" && elem.parentNode.classList[1] == "bank_img") {
                          dataLayerSU.push({
                                         event: {{AFL.Constant.autoEvent.78-1}},
                                         eventCategory: "afl-bonus_cobrand-bank",
                                         eventAction: "cobrand-bank_click_button_tab-select_bank",
                                         eventLabel: JSON.stringify({
                                            "name-bank": elem.parentNode.getAttribute("title").toLowerCase()})
                                                  })
                                            };
            }
        }
          , false);
    } catch (err) {console.error(err)}
})();
