// Ввести в терминал:
// npm install — для установки необходимых модулей
// grunt — для запуска автоматизированного рабочего пространства
// Нажать CTRL+C для остановки watch
// NODE_ENV=production grunt — для сжатия проекта и сборки его в папку "to_server"
module.exports = function(grunt) {
	var sassStyle,
		env,
		pngcrush;

	grunt.loadNpmTasks('grunt-contrib-watch');		// Наблюдает за изменениями в проекте
	require('load-grunt-tasks')(grunt);				// Для сжатия HTML 
	grunt.loadNpmTasks('grunt-contrib-compass');	// Добавляет работу SASS и дополнительный функционал от Compass, Bourbon, Susy (можно добавлять ещё в файлы конфигурации с расширением rb). Также модуль сжимает итоговые CSS файлы 
	grunt.loadNpmTasks('grunt-contrib-coffee');		// Добавляет работу coffeescript
	grunt.loadNpmTasks('grunt-watchify');			// Организовывает работы с подключаемыми библиотеки типа jQuery через команду require(). Также можно создавать свои модули с помощью команды module
	grunt.loadNpmTasks('grunt-contrib-uglify');		// Для сжатия всех файлов javascript в 1 строку в 1 файле
	grunt.loadNpmTasks('grunt-contrib-imagemin');	// Для сжатия всех изображений
	pngcrush = require('imagemin-pngcrush');		// Для нормального сжатия PNG-файлов 
	// Также можно ужимать файлы JSON

	env = process.env.NODE_ENV || 'dev';
	if (env === 'dev') {
		sassStyle = 'expanded';
		grunt.registerTask('default', ['watch']);
	} else {
		sassStyle = 'compressed';
		grunt.registerTask('default', ['minifyHtml', 'compass', 'coffee', 'watchify', 'uglify', 'imagemin']);
	}
	
	grunt.initConfig({
		minifyHtml: {
			options: {
				cdata: true
			},	// options
			dist: {
				files: {
					'to_server/index.php': '_/index.php',
					'to_server/php/header.php': '_/php/header.php',
					'to_server/php/footer.php': '_/php/footer.php',
					'to_server/php/structure.php': '_/php/structure.php',
					'to_server/php/feedback.php': '_/php/feedback.php',
					'to_server/php/contact.php': '_/php/contact.php',
					'to_server/php/advantages_company.php': '_/php/advantages_company.php',
					'to_server/php/advantages_product.php': '_/php/advantages_product.php'
				}	// files
			}	// dist
		},	// minifyHtml

		imagemin: {
			dynamic: {
				options: {
					optimizationLevel: 3,
					svgoPlugins: [{ removeViewBox: false }],
					use: [pngcrush()]
				},	// options
				files: [{
					expand: true,
					cwd: '_/img/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'to_server/img/'
				}]	// files
			}	// dynamic
		},	// imagemin

		uglify: {
			default: {
				files: {
					'to_server/js/script.js': ['_/js/script.js']
				}	// files
			}	// default
		},	// uglify

		compass: {
			expanded: {
				options: {
					config: 'config_expanded.rb'
				}	// options
			},	// dev
			compressed: {
				options: {
					config: 'config_compressed.rb'
				}	// options
			}	// dev
		},	// compass

		watchify: {
			app: {
				src: './_/components/js/*.js',
				dest: '_/js/script.js'
			},	// app
		},	// watchify

		coffee: {
			compile: {
				options: {
					expand: true,
					flatten: true,
					bare: true
				},	// options
				files: {
					'_/components/js/coffee.js': ['_/components/coffee/*.coffee']
				}	// files
			}	// compile
		},	// coffee
		
		watch: {
			options: {livereload: true},
			coffee: {
				files: ['_/components/coffee/*.coffee'],
				tasks: ['coffee']	
			},	// coffee
			scripts: {
				files: ['_/components/js/*.js'],
				tasks: ['watchify']	
			},	// script
			sass: {
				files: ['_/components/sass/*.scss'],
				tasks: ['compass:' + sassStyle]
			},	// sass
			html: {
				files: ['_/*.{html,php,htm}', '_/php/*.php']
			}	// html
		}	// watch
	});	// initConfig
};	// exports