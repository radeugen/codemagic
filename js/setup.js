var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)','rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomElement = function (arr) {
    return arr[Math.floor((Math.random() * arr.length))];
};

var generateWizardFullName = function (name, lastname) {

    return (Math.floor((Math.random() * 2))) ? getRandomElement(name) + ' ' + getRandomElement(lastname) : getRandomElement(lastname) + ' ' + getRandomElement(name)
};

var generateWizards = function () {
    var wizards = [];

    for (var i = 0; i < 4; i++) {
        wizards.push({
            name: generateWizardFullName(WIZARD_NAMES,WIZARD_LASTNAMES),
            coatColor: getRandomElement(WIZARD_COAT_COLORS),
            eyesColor: getRandomElement(WIZARD_EYES_COLORS),
        });
    }

    return wizards;
};



var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
};

var fragment = document.createDocumentFragment();

var wizards = generateWizards();

for (var i = 0; i < wizards.length; i++) {

    fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
