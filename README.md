# Healthy Cities Laboratory

Hosted at [sjyurbanlab.github.io](https://sjyurbanlab.github.io).

### Setup CodeSandbox Development

You don't need to know how the entire website works to update this website. A lot of the data-related files are written in `.json` or `.mdx` which are quite friendly for content writers. In other words, if you are here to only update the website content, you should use CodeSandbox.

#### Github and CodeSandbox

You need a github account, click [here](https://github.com) to create one.

Once you have an account, you can log into CodeSandbox with the same credentials later.

#### Initialise a CodeSandbox Instance of this Repository

A repository is basically a cloud drive folder that manages software code.

To begin working, [open this CodeSandbox sandbox](https://codesandbox.io/dashboard/all/?workspace=e6035594-7331-4ecc-b2d7-8886152021e3). If this is your first time using CodeSandbox, you would be asked to sign up with a new account; for that, use your Github credentials.

You may encounter permission errors; that's because you need to be invited into sjyurbanlab workspace. Please ask Dr Song to invite you.

Make sure to commit your code to the `master` branch after you have updated something.

<hr />

### Setup Local Development

This website uses Gatsby and React, and runs in NodeJS.

#### NodeJS Environment

NodeJS has a lot of distributions across windows / linux / mac systems. It is recommended to install the latest version with long term support (LTS).

The two recommended ways for installation are

1. [NodeJS foundation](https://nodejs.org/en/download/)

- hard to upgrade NodeJS in the future

2. [node version manager (nvm)](https://github.com/nvm-sh/nvm).

- relatively easy to upgrade NodeJS, but this requires the use of either a command prompt on windows, or a terminal shell on unix

To verify if you have successfully installed NodeJS, and a package manager called `npm` that comes with NodeJS installation, open a [command prompt](https://www.lifewire.com/how-to-open-command-prompt-2618089) on windows, or a [terminal shell](https://www.wikihow.com/Open-a-Terminal-Window-in-Mac) on linux / mac, then run

```shell script
node --version
# you should see a version code similar to v12.5.0
# then run
npm --version
# you should see a version code similar to 6.14.3
# if you do not see the exact version codes, it is generally alright because node keeps getting updated over time
```

#### Git and Github

[Git](https://git-scm.com/) is a very popular and powerful version control system that helps software developers track the history of their work in code, whereas [Github](https://github.com) is a platform for developers to collaborate using git, and to manage code online.

Again, `git` can be installed in many ways too. It is recommended to follow these [instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) based on your operating system.

To verify if you have successfully installed `git`, run

```shell script
git --version
# you should see a version code similar to 2.24.3
```

If this is your first time using git, it is highly recommended to go through a crash course [here](https://www.freecodecamp.org/news/git-and-github-crash-course/).

#### A Text Editor

To write code, or edit any of the files in this project, it is best you use a text editor such as

- [vscode](https://code.visualstudio.com/download)
- [atom](https://atom.io/)
- [sublime text](https://www.sublimetext.com/)

Just install one of the text editors suggested above by clicking the links.

Kudos for getting this far, you have made great progress today, it's alright to take a break and come back later.

#### Setting up an Account on Github, and Cloning this Project

Once you have NodeJS and `git` installed, go to [Github](https://github.com) to setup an account. If you followed the `git` crash course above, you should have this step covered too, as well as your github account credentials saved in your git config.

At this point, it is again highly recommended to go through a [crash course](https://elleknowsmachines.com/command-line/) on windows command prompt, or terminal on linux / mac.

The next step is to clone this project. Go to a suitable directory on your file system.

```shell script
cd [somewhere]
# somewhere should be replaced by a directory path of your choice
git clone https://github.com/sjyurbanlab/sjyurbanlab.github.io.git sjyurbanlab_website
# then cd into the website's project directory
cd sjyurbanlab_website
```

#### Starting the Gatsby development server

Once your command prompt's / terminal's working directory is in this project. Install packages using `npm` by running

```shell script
npm install
```

You have to wait for a while for `npm` to grab all the packages necessary for this project.

After that, spinning up the Gatsby development server should be something as easy as running

```shell script
npm run dev
```

You should see a stream of command prompt / terminal logs that are made by Gatsby. At some point, you should notice Gatsby telling you to.
