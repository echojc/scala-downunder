var sticky = require('sticky'),
    elements = require('./elements');

elements.header.sticky({topSpacing:0});

function stickBanner() {
  if (elements.isSmall()) {
    elements.banner.unstick();
  } else {
    elements.banner.sticky({topSpacing: elements.header.outerHeight()});
  }
}

stickBanner();

$(window).resize(function () {
  elements.header.sticky('update');
  stickBanner();
});
