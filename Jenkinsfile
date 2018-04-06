pipeline {
  agent { 
    docker {
      image 'node:8'
      args '-p 9000:9000'
    }
  }
  stages {
    stage('build') {
      steps {
        sh 'npm --version'
      }
    }
  }
}