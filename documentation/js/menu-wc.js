'use strict';



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

customElements.define('compodoc-menu', function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this.isNormalMode = _this.getAttribute('mode') === 'normal';
        return _this;
    }

    _createClass(_class, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.render(this.isNormalMode);
        }
    }, {
        key: 'render',
        value: function render(isNormalMode) {
            let tp = lithtml.html(
'<nav>\n    <ul class="list">\n        <li class="title">\n            \n                <a href="index.html" data-type="index-link">BOOKscalo documentation</a>\n            \n        </li>\n\n        <li class="divider"></li>\n        ' + (isNormalMode ? '<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>' : '') + '\n        <li class="chapter">\n            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>\n            <ul class="links">\n                \n                    <li class="link">\n                        <a href="overview.html" data-type="chapter-link">\n                            <span class="icon ion-ios-keypad"></span>Overview\n                        </a>\n                    </li>\n                    <li class="link">\n                        <a href="index.html" data-type="chapter-link">\n                            <span class="icon ion-ios-paper"></span>README\n                        </a>\n                    </li>\n                \n                \n                \n                    <li class="link">\n                        <a href="dependencies.html"\n                            data-type="chapter-link">\n                            <span class="icon ion-ios-list"></span>Dependencies\n                        </a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        <li class="chapter modules">\n            <a data-type="chapter-link" href="modules.html">\n                <div class="menu-toggler linked" data-toggle="collapse"\n                    ' + (isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"') + '>\n                    <span class="icon ion-ios-archive"></span>\n                    <span class="link-name">Modules</span>\n                    <span class="icon ion-ios-arrow-down"></span>\n                </div>\n            </a>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"') + '>\n                \n                    <li class="link">\n                        <a href="modules/AdminModule.html" data-type="entity-link">AdminModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-AdminModule-4963a6236d9d3855afa4442564860e7d"' : 'data-target="#xs-components-links-module-AdminModule-4963a6236d9d3855afa4442564860e7d"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-AdminModule-4963a6236d9d3855afa4442564860e7d"' : 'id="xs-components-links-module-AdminModule-4963a6236d9d3855afa4442564860e7d"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/AdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/GlobalMessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">GlobalMessageComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/UsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsersComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-AppModule-5382ec5292318a45d4af84f0586e9112"' : 'data-target="#xs-components-links-module-AppModule-5382ec5292318a45d4af84f0586e9112"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-AppModule-5382ec5292318a45d4af84f0586e9112"' : 'id="xs-components-links-module-AppModule-5382ec5292318a45d4af84f0586e9112"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/PageforbiddenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageforbiddenComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/PagenotfoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PagenotfoundComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/PagesModule.html" data-type="entity-link">PagesModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-PagesModule-b3011e41cabf24605381de82d97d69d9"' : 'data-target="#xs-components-links-module-PagesModule-b3011e41cabf24605381de82d97d69d9"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-PagesModule-b3011e41cabf24605381de82d97d69d9"' : 'id="xs-components-links-module-PagesModule-b3011e41cabf24605381de82d97d69d9"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/AddBookComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddBookComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/CardBookComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardBookComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/ChatsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChatsComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/LibraryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LibraryComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/MessageAdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MessageAdminComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/OneBookComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">OneBookComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/PagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PagesComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/SearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#injectables-links-module-PagesModule-b3011e41cabf24605381de82d97d69d9"' : 'data-target="#xs-injectables-links-module-PagesModule-b3011e41cabf24605381de82d97d69d9"') + '>\n                                    <span class="icon ion-md-arrow-round-down"></span>\n                                    <span>Injectables</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="injectables-links-module-PagesModule-b3011e41cabf24605381de82d97d69d9"' : 'id="xs-injectables-links-module-PagesModule-b3011e41cabf24605381de82d97d69d9"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/DatabaseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>DatabaseService</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/DateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>DateService</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/PipesCommonModule.html" data-type="entity-link">PipesCommonModule</a>\n                        \n                        \n                        \n                        \n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#pipes-links-module-PipesCommonModule-0ce790ee4a7d8be76ea7862330c125c3"' : 'data-target="#xs-pipes-links-module-PipesCommonModule-0ce790ee4a7d8be76ea7862330c125c3"') + '>\n                                    <span class="icon ion-md-add"></span>\n                                    <span>Pipes</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="pipes-links-module-PipesCommonModule-0ce790ee4a7d8be76ea7862330c125c3"' : 'id="xs-pipes-links-module-PipesCommonModule-0ce790ee4a7d8be76ea7862330c125c3"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="pipes/ThousandsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ThousandsPipe</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-SharedModule-937e2e6cc84a4a992932ac0e28498635"' : 'data-target="#xs-components-links-module-SharedModule-937e2e6cc84a4a992932ac0e28498635"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-SharedModule-937e2e6cc84a4a992932ac0e28498635"' : 'id="xs-components-links-module-SharedModule-937e2e6cc84a4a992932ac0e28498635"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/LoadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoadingComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/MessagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MessagesComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/NotificationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotificationsComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n        \n        \n        \n        \n        \n            \n                <li class="chapter">\n                    <div class="simple menu-toggler" data-toggle="collapse"\n                        ' + (isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"') + '>\n                        <span class="icon ion-md-arrow-round-down"></span>\n                        <span>Injectables</span>\n                        <span class="icon ion-ios-arrow-down"></span>\n                    </div>\n                    <ul class="links collapse"\n                    ' + (isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"') + '>\n                        \n                            <li class="link">\n                                <a href="injectables/DatabaseService.html" data-type="entity-link">DatabaseService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/DateService.html" data-type="entity-link">DateService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/SidebarService.html" data-type="entity-link">SidebarService</a>\n                            </li>\n                        \n                    </ul>\n                </li>\n            \n        \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n                 ' + (isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"') + '>\n            <span class="icon ion-ios-lock"></span>\n            <span>Guards</span>\n            <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n                ' + (isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"') + '>\n            \n                <li class="link">\n                    <a href="guards/AdminGuard.html" data-type="entity-link">AdminGuard</a>\n                </li>\n            \n                <li class="link">\n                    <a href="guards/LoginGuardGuard.html" data-type="entity-link">LoginGuardGuard</a>\n                </li>\n            \n            </ul>\n            </li>\n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n                ' + (isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"') + '>\n                <span class="icon ion-md-information-circle-outline"></span>\n                <span>Interfaces</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"') + '>\n                \n                    <li class="link">\n                        <a href="interfaces/Books.html" data-type="entity-link">Books</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/Message.html" data-type="entity-link">Message</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/Report.html" data-type="entity-link">Report</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/Users.html" data-type="entity-link">Users</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"') + '>\n                <span class="icon ion-ios-cube"></span>\n                <span>Miscellaneous</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"') + '>\n                \n                \n                    <li class="link">\n                      <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>\n                    </li>\n                \n                \n                \n                    <li class="link">\n                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n        \n        \n        <li class="chapter">\n            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>\n        </li>\n        \n        \n        \n        <li class="divider"></li>\n        <li class="copyright">\n                Documentation generated using <a href="https://compodoc.app/" target="_blank">\n                    \n                        \n                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">\n                        \n                    \n                </a>\n        </li>\n        \n    </ul>\n</nav>'
);
        this.innerHTML = tp.strings;
        }
    }]);

    return _class;
}(HTMLElement));