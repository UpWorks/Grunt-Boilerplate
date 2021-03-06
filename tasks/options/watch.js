module.exports = {
    options: {
        livereload: true
    },
    scripts: {
        files: ['lib/js/*.js'],
        tasks: ['jshint', 'concat', 'uglify'],
        options: {
            spawn: false
        }
    },
    css: {
        files: ['lib/css/*.css'],
        tasks: ['cssmin'],
        options: {
            spawn: false
        }
    },
    images: {
        files: ['images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
        options: {
            spawn: false
        }
    },
    html:{
        files: ['./**/*.html'],
        tasks: [],
        options: {
            spawn: false
        }
    }
}