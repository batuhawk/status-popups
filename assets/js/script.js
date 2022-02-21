let buttonSuccess = document.querySelector('.button-success');
let buttonError = document.querySelector('.button-error');
let buttonWarning = document.querySelector('.button-warning');

/*For More Than One Attribute Situation*/
let setAttributes = (element, attributes) => {
  for(var key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

/*Modal Create*/
let modalCreate = (modalHeaderStatus, modalHeaderText, modalStatusCircleColor, statusesSvg) => {
  let modal = document.createElement('div');
  modal.classList.add('modal');
  modal.classList.add('active');

  document.body.appendChild(modal);

  let modalHeader = document.createElement('div');
  modalHeader.classList.add('modal-header');
  modalHeader.classList.add(modalHeaderStatus);

  let modalBody = document.createElement('div');
  modalBody.classList.add('modal-body');

  modal.appendChild(modalHeader);
  modal.appendChild(modalBody);

  let headerText = document.createElement('p');
  headerText.innerText = modalHeaderText;
  headerText.classList.add('title');

  let modalHeaderClose = document.createElement('div');
  modalHeaderClose.classList.add('close');
  let lineOne = document.createElement('div');
  lineOne.classList.add('line-one');
  let lineTwo = document.createElement('div');
  lineTwo.classList.add('line-two');
  modalHeaderClose.innerHTML += lineOne.outerHTML + lineTwo.outerHTML;

  modalHeader.appendChild(headerText);
  modalHeader.appendChild(modalHeaderClose);
  
  modalHeaderClose.addEventListener('click', () => {
    document.body.removeChild(modal);
  });


  
  let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  setAttributes(svg, {'id': 'svg',
                           'version': '1.1',
                           'xmlns': 'http://www.w3.org/2000/svg',
                           'viewBox': '-7 -2 139 139'
                          });

  let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  setAttributes(circle, {'class': 'path circle',
                           'fill': 'none',
                            'stroke': `${modalStatusCircleColor}`,
                           'stroke-width': '10',
                           'stroke-miterlimit': '10',
                           'stroke-linecap': 'round',
                           'cx': '60',
                           'cy': '65.1',
                           'r': '62.1',
                          });
  
  modalBody.appendChild(svg);

  svg.appendChild(circle);
  statusesSvg.forEach(statusSVG => {
    svg.appendChild(statusSVG);
  });
}

/*Success Status*/
let success = () => {
  let check = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');

  setAttributes(check, {'class': 'path check',
                        'fill': 'none',
                        'stroke': '#007E33',
                        'stroke-width': '10',
                        'stroke-miterlimit': '10',
                        'stroke-linecap': 'round',
                        'points': '100, 40 51, 88 29, 67'
                       });

  modalCreate('header-success', 'Success', '#007E33', [check]);
}

/*Error Status*/
let error = () => {
  let pathOne = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  let pathTwo = document.createElementNS('http://www.w3.org/2000/svg', 'path');

  setAttributes(pathOne, {'class': 'cross-line1',
                          'stroke': '#CC0000',
                          'stroke-width': '10',
                          'stroke-miterlimit': '10',
                          'stroke-linecap': 'round',
                          'd': 'M25, 34 L93, 94'
                         });
  
    setAttributes(pathTwo, {'class': 'cross-line2',
                          'stroke': '#CC0000',
                          'stroke-width': '10',
                          'stroke-miterlimit': '10',
                          'stroke-linecap': 'round',
                          'd': 'M90, 31 L29, 97'
                           });

  modalCreate('header-error', 'Error', '#CC0000', [pathOne, pathTwo]);
}

/*Warning Status*/
let warning = () => {
  let pathOne = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  let dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

  
    setAttributes(pathOne, {'class': 'exclamation-line',
                          'stroke': '#FF8800',
                          'stroke-width': '10',
                          'stroke-linecap': 'round',
                          'd': 'M59, 25 L59, 85'
                         });
  
      setAttributes(dot, {'class': 'exclamation-dot',
                          'fill': '#FF8800',
                          'cx': '59',
                          'cy': '100',
                          'r': '6'
                         });

  modalCreate('header-warning', 'Warning', '#FF8800', [pathOne, dot]);
}

buttonSuccess.addEventListener('click', () => {
  success();
});

buttonError.addEventListener('click', () => {
  error();
});

buttonWarning.addEventListener('click', () => {
  warning();
});