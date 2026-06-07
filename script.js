const translations = {
  ru: {
    nav_services:'Услуги', nav_portfolio:'Портфолио', nav_experience:'Опыт', nav_early:'Ранний опыт', nav_contacts:'Контакты',
    eyebrow:'Проектная разработка • Контракт • Самозанятый', hero_title:'Владимир С.', hero_subtitle:'Разработка веб-систем, интернет-магазинов и CRM', hero_copy:'Более 15 лет коммерческого опыта. Выполняю проекты полного цикла: проектирование, backend-разработка, интеграции, настройка инфраструктуры и запуск системы.', btn_telegram:'Написать в Telegram', btn_email:'Написать на Email', btn_pdf_ru:'Открыть PDF', btn_pdf_en:'Open PDF', status:'Открыт к проектному сотрудничеству',
    services_eyebrow:'Что могу сделать', services_title:'Закрываю разработку и поддержку сложных веб-систем', srv_crm_title:'CRM и внутренние системы', srv_crm_text:'Проектирование и разработка бизнес-систем на Laravel, интеграции, роли, автоматизация процессов.', srv_shop_title:'Интернет-магазины', srv_shop_text:'Magento, Laravel, платежные системы, подписки, каталоги, личные кабинеты и оптимизация.', srv_audit_title:'Аудит и оптимизация', srv_audit_text:'Поиск узких мест, оптимизация SQL, производительности, архитектуры и рисков безопасности.', srv_integr_title:'Интеграции и данные', srv_integr_text:'REST API, Kafka, Redis, ClickHouse, парсинг, очереди, уведомления и внешние сервисы.',
    profile_eyebrow:'Профиль', profile_title:'Опыт разработчика, технического руководителя и архитектора решений', profile_1:'6 лет управлял собственной веб-студией: оценка, планирование, команда, релизы, коммуникация с заказчиками.', profile_2:'Специализируюсь на архитектуре, highload, интеграциях, аудите производительности и поддержке legacy-проектов.', profile_3:'Могу взять проект полного цикла: от идеи и требований до запуска и дальнейшего развития.',
    current_eyebrow:'Сейчас', current_title:'Текущая деятельность', current_text:'Проектная разработка и поддержка веб-систем. Последний проект — CRM для агентства недвижимости на Laravel.', current_more_title:'Подробнее о текущем проекте', current_more_1:'Проектирование архитектуры CRM-системы с нуля на Laravel.', current_more_2:'Автоматический сбор, парсинг и обработка данных по рынку недвижимости из разных источников.', current_more_3:'Интеграция SMS, Email и внешних сервисов уведомлений.', current_more_4:'Использование AI-инструментов для обработки входящей информации и анализа данных.', current_more_5:'Цель проекта — автоматизация внутренних процессов и снижение ручной работы сотрудников агентства.',
    early_eyebrow:'Ранняя разработка', early_title:'База коммерческого опыта: Magento, Drupal, WordPress и внутренние системы', early_lead:'Проекты 2011–2014 годов из резюме: от системного администрирования и внутренних сервисов до зарубежного e-commerce.', early_ais:'Ведущий разработчик / руководитель разработки: команда, коммуникация с заказчиками, конструктор сайтов на WordPress, мониторинг лидов на CodeIgniter и MongoDB.', early_freelance:'Интернет-магазины на Magento и контентные проекты на Drupal для зарубежных заказчиков.', early_wexo:'Fullstack-разработка интернет-магазинов, поддержка внутренних модулей и платежный модуль для одного из банков Дании.', early_qliff:'E-commerce и контентные проекты, сервис доставки еды, миграция проекта с Drupal 6 на Drupal 7.', early_fssp:'Поддержка инфраструктуры и СУБД, разработка внутренней системы поиска информации о должниках и сервиса интеграции с Ростелекомом.',
    tech_eyebrow:'Стек', tech_title:'Технологии',
    portfolio_eyebrow:'Портфолио', portfolio_title:'Кейсы и направления проектов', portfolio_lead:'Коротко на карточках — с подробностями в попапе, чтобы не перегружать страницу.', portfolio_more:'Подробнее', pf_crm_title:'CRM для агентства недвижимости', pf_crm_short:'Внутренняя система для автоматизации работы агентства, сбора данных и уведомлений.', pf_topgo_title:'Сервис уведомлений для доставки', pf_topgo_short:'Отказоустойчивый микросервис уведомлений для агрегатора курьерской доставки.', pf_ecom_title:'Интернет-магазины и e-commerce', pf_ecom_short:'Опыт разработки магазинов, маркетплейсов, подписок, оплат и интеграций.', pf_saby_title:'Платформа обработки данных', pf_saby_short:'Поиск, фильтрация, аналитика данных, оптимизация SQL и внедрение автотестов.',
    exp_eyebrow:'Опыт', exp_title:'Ключевые проекты', exp_headmage_role:'Основатель / технический директор веб-студии', exp_headmage_1:'Руководил собственной веб-студией, специализировавшейся на Laravel, Magento, CRM и e-commerce проектах.', exp_headmage_2:'Проектировал архитектуру интернет-магазинов, CRM-систем и интеграционных решений для российских и зарубежных заказчиков.', exp_headmage_3:'Отвечал за полный цикл реализации: оценка, планирование, разработка, релизы, запуск и дальнейшая поддержка.', exp_headmage_4:'Организовывал процессы разработки, Code Review, CI/CD и выпуск релизов с использованием Jenkins.',
    exp_saby_role:'Руководитель подразделения / ведущий Python-разработчик', exp_saby_1:'Развивал платформу поиска, обработки и анализа данных о компаниях и владельцах.', exp_saby_2:'Разрабатывал функционал поиска, фильтрации и обработки больших объемов данных на Python и PostgreSQL.', exp_saby_3:'Внедрил практику автоматических тестов и TDD для повышения качества разработки.', exp_saby_4:'Оптимизировал бизнес-логику и SQL-запросы, повышая производительность платформы.', exp_saby_5:'Подготавливал и декомпозировал задачи, проводил Code Review и участвовал в развитии процессов разработки.',
    exp_topgo_role:'Ведущий PHP-разработчик / архитектор микросервисов', exp_topgo_1:'Спроектировал и реализовал отказоустойчивый микросервис уведомлений для агрегатора курьерской доставки.', exp_topgo_2:'Внедрил Kafka для быстрой и бесперебойной доставки уведомлений курьерам.', exp_topgo_3:'Интегрировал ClickHouse для хранения аналитических данных, логов и истории действий.', exp_topgo_4:'Настроил CI/CD процессы автоматической сборки и деплоя в инфраструктуре Yandex Cloud.', exp_topgo_5:'Координировал техническое взаимодействие с внешними подрядчиками по разработке и тестированию.',
    exp_thrive_role:'Ведущий PHP-разработчик, удаленный контракт', exp_thrive_1:'Работал над крупной e-commerce платформой по продаже органических продуктов по подписочной модели.', exp_thrive_2:'Интегрировал систему очередей Kafka в экосистему Magento для повышения отказоустойчивости и масштабируемости.', exp_thrive_3:'Спроектировал и реализовал систему автоматической повторяемой доставки товаров.', exp_thrive_4:'Поддерживал интеграции с Braintree, DHL, Sailthru и другими внешними сервисами.', exp_thrive_5:'Разрабатывал REST API и покрывал бизнес-логику автоматизированными тестами.',
    exp_bloom_role:'Ведущий PHP-разработчик, удаленный контракт', exp_bloom_1:'Развивал Magento-маркетплейс для продавцов цветочной продукции.', exp_bloom_2:'Разрабатывал личный кабинет продавца, управление каталогом товаров и обработку заказов.', exp_bloom_3:'Оптимизировал процессы продавцов с помощью асинхронной обработки данных и очередей.', exp_bloom_4:'Интегрировал Stripe и сопутствующие сервисы.', exp_bloom_5:'Участвовал в развитии мультидоменной платформы для маркетплейса и отдельных сайтов продавцов.',
    contacts_eyebrow:'Контакты', contacts_title:'Обсудим ваш проект', contacts_text:'Подходит формат проектной работы, контракта, поддержки или разработки системы под ключ.', contact_telegram:'Telegram', contact_phone:'Телефон', copy_btn:'Копировать', copied:'Скопировано'
  },
  en: {
    nav_services:'Services', nav_portfolio:'Portfolio', nav_experience:'Experience', nav_early:'Early work', nav_contacts:'Contacts',
    eyebrow:'Project work • Contract • Self-employed', hero_title:'Vladimir S.', hero_subtitle:'Web systems, e-commerce and CRM development', hero_copy:'15+ years of commercial experience. I deliver full-cycle projects: architecture, backend development, integrations, infrastructure setup and launch.', btn_telegram:'Message on Telegram', btn_email:'Send Email', btn_pdf_ru:'Открыть PDF', btn_pdf_en:'Open PDF', status:'Open to project collaboration',
    services_eyebrow:'What I do', services_title:'Development and support of complex web systems', srv_crm_title:'CRM and internal systems', srv_crm_text:'Architecture and development of business systems with Laravel, integrations, roles and process automation.', srv_shop_title:'E-commerce platforms', srv_shop_text:'Magento, Laravel, payment systems, subscriptions, catalogs, seller dashboards and optimization.', srv_audit_title:'Audit and optimization', srv_audit_text:'Finding bottlenecks, optimizing SQL, performance, architecture and security risks.', srv_integr_title:'Integrations and data', srv_integr_text:'REST API, Kafka, Redis, ClickHouse, parsing, queues, notifications and third-party services.',
    profile_eyebrow:'Profile', profile_title:'Developer, technical lead and solution architect experience', profile_1:'6 years managing my own web studio: estimation, planning, team, releases and direct communication with clients.', profile_2:'Specialized in architecture, high-load systems, integrations, performance audits and legacy project support.', profile_3:'I can take a full-cycle project: from idea and requirements to launch and further development.',
    current_eyebrow:'Now', current_title:'Current activity', current_text:'Project-based development and support of web systems. Latest project: CRM for a real estate agency using Laravel.', current_more_title:'More about the current project', current_more_1:'Designing CRM architecture from scratch using Laravel.', current_more_2:'Automated collection, parsing and processing of real estate market data from different sources.', current_more_3:'Integration of SMS, Email and third-party notification services.', current_more_4:'Using AI tools to process incoming information and analyze data.', current_more_5:'Project goal: automate internal processes and reduce manual work for agency employees.',
    early_eyebrow:'Early development', early_title:'Commercial foundation: Magento, Drupal, WordPress and internal systems', early_lead:'Projects from 2011–2014 based on the resume: from system administration and internal services to international e-commerce.', early_ais:'Lead developer / development manager: team leadership, client communication, WordPress site builder, lead monitoring system with CodeIgniter and MongoDB.', early_freelance:'Magento online stores and Drupal content projects for international clients.', early_wexo:'Full-stack online store development, internal module support and a payment module for a Danish bank.', early_qliff:'E-commerce and content projects, food delivery service, migration from Drupal 6 to Drupal 7.', early_fssp:'Infrastructure and DBMS support, internal debtor search system and integration service with Rostelecom.',
    tech_eyebrow:'Stack', tech_title:'Technologies',
    portfolio_eyebrow:'Portfolio', portfolio_title:'Cases and project areas', portfolio_lead:'Short cards with details in popups, so the page stays easy to scan.', portfolio_more:'Details', pf_crm_title:'CRM for a real estate agency', pf_crm_short:'Internal system for agency workflow automation, data collection and notifications.', pf_topgo_title:'Delivery notification service', pf_topgo_short:'Fault-tolerant notification microservice for a courier delivery aggregator.', pf_ecom_title:'E-commerce and online stores', pf_ecom_short:'Experience with stores, marketplaces, subscriptions, payments and integrations.', pf_saby_title:'Data processing platform', pf_saby_short:'Search, filtering, data analytics, SQL optimization and automated testing.',
    exp_eyebrow:'Experience', exp_title:'Key projects', exp_headmage_role:'Founder / Technical Director of a web studio', exp_headmage_1:'Managed my own web studio focused on Laravel, Magento, CRM and e-commerce projects.', exp_headmage_2:'Designed architecture for online stores, CRM systems and integration solutions for Russian and international clients.', exp_headmage_3:'Owned the full delivery cycle: estimation, planning, development, releases, launch and ongoing support.', exp_headmage_4:'Set up development processes, Code Review, CI/CD and release workflows using Jenkins.',
    exp_saby_role:'Department Lead / Senior Python Developer', exp_saby_1:'Developed a platform for search, processing and analysis of company and owner data.', exp_saby_2:'Built search, filtering and processing functionality for large data volumes with Python and PostgreSQL.', exp_saby_3:'Introduced automated testing and TDD practices to improve development quality.', exp_saby_4:'Optimized business logic and SQL queries to improve platform performance.', exp_saby_5:'Prepared and decomposed tasks, performed Code Review and improved development processes.',
    exp_topgo_role:'Lead PHP Developer / Microservices Architect', exp_topgo_1:'Designed and implemented a fault-tolerant notification microservice for a courier delivery aggregator.', exp_topgo_2:'Introduced Kafka for fast and reliable delivery of courier notifications.', exp_topgo_3:'Integrated ClickHouse for analytical data, logs and action history storage.', exp_topgo_4:'Set up CI/CD build and deployment processes in Yandex Cloud infrastructure.', exp_topgo_5:'Coordinated technical communication with external development and testing contractors.',
    exp_thrive_role:'Lead PHP Developer, remote contract', exp_thrive_1:'Worked on a large subscription-based e-commerce platform for organic products.', exp_thrive_2:'Integrated Kafka queues into the Magento ecosystem to improve fault tolerance and scalability.', exp_thrive_3:'Designed and implemented an automatic recurring delivery system.', exp_thrive_4:'Maintained integrations with Braintree, DHL, Sailthru and other external services.', exp_thrive_5:'Developed REST API and covered business logic with automated tests.',
    exp_bloom_role:'Lead PHP Developer, remote contract', exp_bloom_1:'Developed a Magento marketplace for floral sellers.', exp_bloom_2:'Built seller dashboard features, catalog management and order processing.', exp_bloom_3:'Optimized seller workflows using asynchronous data processing and queues.', exp_bloom_4:'Integrated Stripe and related services.', exp_bloom_5:'Contributed to a multi-domain platform for the marketplace and standalone seller websites.',
    contacts_eyebrow:'Contacts', contacts_title:'Let’s discuss your project', contacts_text:'Project work, contract development, support or turnkey system development.', contact_telegram:'Telegram', contact_phone:'Phone', copy_btn:'Copy', copied:'Copied'
  }
};

const modalData = {
  ru: {
    headmage: {eyebrow:'Laravel • Magento • Web studio', title:'HeadMage — веб-студия', html:`<p>Собственная веб-студия, специализировавшаяся на backend-разработке, интернет-магазинах, CRM и внутренних бизнес-системах.</p><h3>Что было сделано</h3><ul><li>Проектирование архитектуры интернет-магазинов, CRM-систем и интеграционных решений.</li><li>Полный цикл реализации проектов: оценка, планирование, разработка, релизы, запуск и поддержка.</li><li>Организация процессов разработки, Code Review, CI/CD и выпуска релизов через Jenkins.</li><li>Коммуникация с заказчиками, формирование требований и подбор оптимальных технических решений.</li><li>Формирование и развитие команды разработчиков.</li></ul><h3>Технологии</h3><p>PHP, Laravel, Magento, MySQL, Redis, Jenkins, Docker, CI/CD, Linux.</p>`},
    crm: {eyebrow:'Laravel • CRM • AI', title:'CRM для агентства недвижимости', html:`<p>Проект внутренней CRM-системы для агентства недвижимости. Цель — автоматизировать сбор информации, обработку входящих данных и часть ручных операций сотрудников.</p><h3>Что было сделано</h3><ul><li>Спроектирована архитектура системы на Laravel.</li><li>Реализован автоматический сбор и парсинг данных по рынку недвижимости из различных источников.</li><li>Интегрированы SMS, Email и внешние сервисы уведомлений.</li><li>Подключены AI-инструменты для анализа и обработки входящей информации.</li><li>Система разворачивается как рабочий инструмент для внутренних процессов бизнеса.</li></ul><h3>Технологии</h3><p>Laravel, PHP, PostgreSQL/MySQL, API-интеграции, AI-интеграции, очереди задач.</p>`},
    topgo: {eyebrow:'Kafka • ClickHouse • Microservices', title:'Сервис уведомлений для службы доставки', html:`<p>Проект для агрегатора курьерской доставки с микросервисной архитектурой и высокой нагрузкой на систему уведомлений.</p><h3>Что было сделано</h3><ul><li>Спроектирован и реализован отказоустойчивый микросервис уведомлений.</li><li>Kafka внедрена для быстрой и бесперебойной доставки уведомлений курьерам.</li><li>ClickHouse интегрирован для хранения аналитических данных, логов и истории действий.</li><li>Настроены CI/CD процессы автоматической сборки и деплоя в Yandex Cloud.</li><li>Выполнялась координация с внешними подрядчиками по разработке и тестированию.</li></ul><h3>Технологии</h3><p>PHP, Kafka, ClickHouse, Docker, CI/CD, Yandex Cloud, микросервисная архитектура.</p>`},
    ecom: {eyebrow:'Magento • Laravel • E-commerce', title:'Интернет-магазины и e-commerce платформы', html:`<p>Более 10 лет опыта разработки интернет-магазинов, маркетплейсов и e-commerce систем на Magento и Laravel.</p><h3>Что входило в работу</h3><ul><li>Разработка интернет-магазинов и маркетплейсов.</li><li>Интеграция платежных систем: Braintree, Stripe и другие сервисы.</li><li>Подписочная модель, повторные заказы, каталоги, кабинеты продавцов и покупателей.</li><li>Интеграции с логистическими, маркетинговыми и внешними API-сервисами.</li><li>Оптимизация производительности, SQL-запросов и бизнес-логики в высоконагруженных проектах.</li></ul><h3>Технологии</h3><p>Magento, Laravel, PHP, MySQL, Redis, Elasticsearch, REST API, PHPUnit.</p>`},
    saby: {eyebrow:'Python • PostgreSQL • TDD', title:'Платформа поиска и обработки данных', html:`<p>Работа в СБИС / Saby над платформой поиска, обработки и анализа данных о компаниях и владельцах.</p><h3>Что было сделано</h3><ul><li>Руководство подразделением разработки и участие в технических решениях.</li><li>Разработка функционала поиска, фильтрации и обработки больших объемов данных.</li><li>Оптимизация бизнес-логики и сложных SQL-запросов.</li><li>Внедрение практики автоматических тестов и TDD.</li><li>Подготовка и декомпозиция задач, Code Review, развитие процессов разработки.</li></ul><h3>Технологии</h3><p>Python, PostgreSQL, SQL optimization, Unit tests, TDD, Code Review.</p>`},
    thrive: {eyebrow:'Magento • Kafka • E-commerce', title:'ThriveMarket', html:`<p>Крупная e-commerce платформа по продаже органических продуктов по подписочной модели.</p><h3>Что было сделано</h3><ul><li>Интеграция системы очередей Kafka в экосистему Magento.</li><li>Проектирование и реализация системы автоматической повторяемой доставки товаров.</li><li>Работа со сложной логикой подписок, платежей и большими объемами данных.</li><li>Интеграции с Braintree, DHL, Sailthru и другими внешними сервисами.</li><li>Разработка REST API и покрытие бизнес-логики автоматизированными тестами.</li></ul><h3>Технологии</h3><p>Magento, PHP, MySQL, Kafka, Laravel REST API, Braintree, DHL, Sailthru, PHPUnit.</p>`},
    bloom: {eyebrow:'Magento • Marketplace • Stripe', title:'BloomNation', html:`<p>Маркетплейс для продавцов цветочной продукции на базе Magento.</p><h3>Что было сделано</h3><ul><li>Развитие личного кабинета продавца: каталог, товары, заказы.</li><li>Оптимизация процессов продавцов через асинхронную обработку данных и очереди.</li><li>Расширение логики ценовых правил, промо-акций и купонов.</li><li>Интеграция Stripe и сопутствующих сервисов.</li><li>Участие в развитии мультидоменной платформы для маркетплейса и отдельных сайтов продавцов.</li></ul><h3>Технологии</h3><p>Magento, PHP, MySQL, Stripe, очереди, multi-domain architecture.</p>`}
  },
  en: {
    headmage: {eyebrow:'Laravel • Magento • Web studio', title:'HeadMage — web studio', html:`<p>My own web studio focused on backend development, online stores, CRM and internal business systems.</p><h3>What was done</h3><ul><li>Designed architecture for online stores, CRM systems and integration solutions.</li><li>Managed the full project lifecycle: estimation, planning, development, releases, launch and support.</li><li>Organized development processes, Code Review, CI/CD and release workflows using Jenkins.</li><li>Communicated with clients, clarified requirements and selected suitable technical solutions.</li><li>Built and developed a team of developers.</li></ul><h3>Technologies</h3><p>PHP, Laravel, Magento, MySQL, Redis, Jenkins, Docker, CI/CD, Linux.</p>`},
    crm: {eyebrow:'Laravel • CRM • AI', title:'CRM for a real estate agency', html:`<p>An internal CRM system for a real estate agency. The goal was to automate data collection, incoming information processing and part of the manual workflow.</p><h3>What was done</h3><ul><li>Designed the system architecture using Laravel.</li><li>Implemented automated collection and parsing of real estate market data from multiple sources.</li><li>Integrated SMS, Email and external notification services.</li><li>Connected AI tools for data analysis and incoming information processing.</li><li>The system is built as an internal business workflow tool.</li></ul><h3>Technologies</h3><p>Laravel, PHP, PostgreSQL/MySQL, API integrations, AI integrations, job queues.</p>`},
    topgo: {eyebrow:'Kafka • ClickHouse • Microservices', title:'Notification service for delivery', html:`<p>A project for a courier delivery aggregator with microservice architecture and high load on the notification system.</p><h3>What was done</h3><ul><li>Designed and implemented a fault-tolerant notification microservice.</li><li>Introduced Kafka for fast and reliable courier notification delivery.</li><li>Integrated ClickHouse for analytical data, logs and action history storage.</li><li>Set up CI/CD build and deployment workflows in Yandex Cloud.</li><li>Coordinated technical communication with external development and testing contractors.</li></ul><h3>Technologies</h3><p>PHP, Kafka, ClickHouse, Docker, CI/CD, Yandex Cloud, microservice architecture.</p>`},
    ecom: {eyebrow:'Magento • Laravel • E-commerce', title:'Online stores and e-commerce platforms', html:`<p>10+ years of experience developing online stores, marketplaces and e-commerce systems with Magento and Laravel.</p><h3>Scope of work</h3><ul><li>Development of online stores and marketplaces.</li><li>Payment integrations: Braintree, Stripe and other services.</li><li>Subscription model, recurring orders, catalogs, seller and customer dashboards.</li><li>Integrations with logistics, marketing and third-party API services.</li><li>Performance, SQL and business logic optimization in high-load projects.</li></ul><h3>Technologies</h3><p>Magento, Laravel, PHP, MySQL, Redis, Elasticsearch, REST API, PHPUnit.</p>`},
    saby: {eyebrow:'Python • PostgreSQL • TDD', title:'Search and data processing platform', html:`<p>Work at Saby on a platform for search, processing and analysis of company and owner data.</p><h3>What was done</h3><ul><li>Led the development department and participated in technical decisions.</li><li>Developed search, filtering and processing features for large data volumes.</li><li>Optimized business logic and complex SQL queries.</li><li>Introduced automated tests and TDD practices.</li><li>Prepared and decomposed tasks, performed Code Review and improved development processes.</li></ul><h3>Technologies</h3><p>Python, PostgreSQL, SQL optimization, Unit tests, TDD, Code Review.</p>`},
    thrive: {eyebrow:'Magento • Kafka • E-commerce', title:'ThriveMarket', html:`<p>A large subscription-based e-commerce platform for organic products.</p><h3>What was done</h3><ul><li>Integrated Kafka queues into the Magento ecosystem.</li><li>Designed and implemented an automatic recurring delivery system.</li><li>Worked with complex subscription logic, payments and large data volumes.</li><li>Maintained integrations with Braintree, DHL, Sailthru and other external services.</li><li>Developed REST API and covered business logic with automated tests.</li></ul><h3>Technologies</h3><p>Magento, PHP, MySQL, Kafka, Laravel REST API, Braintree, DHL, Sailthru, PHPUnit.</p>`},
    bloom: {eyebrow:'Magento • Marketplace • Stripe', title:'BloomNation', html:`<p>A Magento-based marketplace for floral sellers.</p><h3>What was done</h3><ul><li>Developed seller dashboard features: catalog, products and order processing.</li><li>Optimized seller workflows using asynchronous data processing and queues.</li><li>Extended price rules, promotions and coupon logic.</li><li>Integrated Stripe and related services.</li><li>Contributed to a multi-domain platform for the marketplace and standalone seller websites.</li></ul><h3>Technologies</h3><p>Magento, PHP, MySQL, Stripe, queues, multi-domain architecture.</p>`}
  }
};

let lang = 'ru';
const switcher = document.getElementById('langSwitch');

function setLang(next){
  lang = next;
  document.documentElement.lang = next;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if(translations[next][key]) el.textContent = translations[next][key];
  });
  switcher.textContent = next === 'ru' ? 'EN' : 'RU';
  document.querySelector('[data-download-ru]').classList.toggle('hidden', next !== 'ru');
  document.querySelector('[data-download-en]').classList.toggle('hidden', next !== 'en');
  document.title = next === 'ru' ? 'Владимир С. — WebSystems Backend' : 'Vladimir S. — WebSystems Backend';
}

switcher.addEventListener('click', () => setLang(lang === 'ru' ? 'en' : 'ru'));
document.getElementById('year').textContent = new Date().getFullYear();
setLang('ru');

function showToast(message){
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('visible');
  window.setTimeout(() => toast.classList.remove('visible'), 1600);
}

document.querySelectorAll('[data-copy]').forEach(btn => {
  btn.addEventListener('click', async () => {
    const value = btn.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
    } catch (e) {
      const temp = document.createElement('textarea');
      temp.value = value;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      temp.remove();
    }
    showToast(translations[lang].copied);
  });
});

const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const modalEyebrow = document.getElementById('modalEyebrow');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
let lastFocus = null;

function openModal(key){
  const data = modalData[lang][key];
  if(!data) return;
  lastFocus = document.activeElement;
  modalEyebrow.textContent = data.eyebrow;
  modalTitle.textContent = data.title;
  modalBody.innerHTML = data.html;
  modalBackdrop.hidden = false;
  document.body.classList.add('modal-open');
  modalClose.focus();
}

function closeModal(){
  modalBackdrop.hidden = true;
  document.body.classList.remove('modal-open');
  if(lastFocus) lastFocus.focus();
}

document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', () => openModal(btn.dataset.modal));
});
modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', (event) => {
  if(event.target === modalBackdrop) closeModal();
});
document.addEventListener('keydown', (event) => {
  if(event.key === 'Escape' && !modalBackdrop.hidden) closeModal();
});

// v18: accurate anchor scrolling.
// The section itself has top padding, so native #anchors stop too early and leave
// a large empty gap before the title. Scroll to the section heading instead.
function getAnchorScrollTarget(section){
  if(!section) return null;
  return section.querySelector(':scope > .contacts-eyebrow, :scope > .section-head, :scope > .eyebrow, .section-head, .eyebrow') || section;
}

function scrollToSectionHeading(hash, pushState = true){
  if(!hash || hash === '#') return false;
  const section = document.querySelector(hash);
  if(!section) return false;

  const header = document.querySelector('.site-header');
  const headerHeight = header ? header.offsetHeight : 0;
  const target = getAnchorScrollTarget(section);
  const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 24;

  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  if(pushState) history.pushState(null, '', hash);
  return true;
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const hash = link.getAttribute('href');
    if(scrollToSectionHeading(hash, true)) event.preventDefault();
  });
});

window.addEventListener('load', () => {
  if(window.location.hash) {
    window.setTimeout(() => scrollToSectionHeading(window.location.hash, false), 80);
  }
});
