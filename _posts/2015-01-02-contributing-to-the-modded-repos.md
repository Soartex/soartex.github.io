---
layout: content_small_header
title: "Contributing to Modded"
title_sub: "Part 1: A simple introduction to getting off the ground"
categories: modded
subject: "In this article we explain how to submit textures to the modded repo, and how the system works. We walk through the proccess of how to use a simple git client and how to add/commit textures. From there we will walk through the proccess of creating a pull request so your additions can be commented on and added to the modded downloads. This introduction guide will get you contributing to our modded repositories."
---

<section markdown="1" class="bs-docs-section">

{:#overview .page-header}
# Overview
In this article our aim is to submit textures to the modded repositories. To do this we must first use a client to create a local copy of the repository we are interested in submitting to. Once we have a local working copy we can add, remove, and fix textures in it on our computer. From there the goal is to get the textures re-uploaded so others can comment and add them to the modded downloads.


To do this a understanding of the github system is a must. We have [modded](https://github.com/Soartex-Modded) repositories that are hosted on github.com. This platform allows us to easly manage large amounts of contributions and multiple people working on the same thing. Each repository is dedicated to a single minecraft version. Inside each repository is a huge list of folders. Each mod is seperated into its own folder for the sake of organistion. This simple step allows for our modded patcher system, and custom packs to be made. This also creates a organisation scheme to the repository. These repositories are the center of the system.

</section>
<section markdown="1" class="bs-docs-section">

{:#client-setup .page-header}
# Client Setup
In order to contribute to the modded repositories a github account is needed. It is free, and can be created by visiting [this](https://github.com/join) link. Once a github account is created we can move on to setting up out client. The client is what will act as an interface from your local computer to the files stored on the github servers.

{:#git-downloads}
### Download Links

* Windows - [Link](https://windows.github.com/)
* Mac - [Link](https://mac.github.com/)
* Linux - [Link](http://git-scm.com/downloads)

In this tutorial we will be using the Github for Windows client. The steps should be simular and the alternative commands will be included for command line usage. After we have the client downloaded, and logged in with the your respective github account it is time to get the textures from the repository.

</section>
<section markdown="1" class="bs-docs-section">

{:#forking-a-repository .page-header}
# Forking a Repository
To get the textures we need to get a copy of the offical Soartex one. This notion is call "forking" a repository. The idea is that you can create a copy of the repository for youself to make changes and edits to. After you are done making your edits to your own copy you can finally submit those edits to the offical Soartex repository.

For this example I will be forking the [Soartex-Modded/Modded-1.7.x](https://github.com/Soartex-Modded/Modded-1.7.x) repository. On the Github website there should be a fork button at the top right corner of the repository page. This will fork this offical repository to your local account.

![Forking Button](/assets/img/contributing-to-the-modded-repos/forking-1.png)
![Forking To Account](/assets/img/contributing-to-the-modded-repos/forking-2.png)

</section>
<section markdown="1" class="bs-docs-section">

{:#cloning-a-repository .page-header}
# Cloning a Repository
Now that there is a copy on your local account we can download it, and edit the textures through our client. We first want to make a copy of the repository to our computer. This is called "cloning" the repository. In the Github client the plus dropdown will let you get access to the repositories on your account. From the clone tab/menu the repository we forked should show up under your account. By clicking the clone button the repository will be downloaded to your computer.

![Cloning To Computer](/assets/img/contributing-to-the-modded-repos/cloning-1.png)
![Cloning Download](/assets/img/contributing-to-the-modded-repos/cloning-2.png)

</section>
<section markdown="1" class="bs-docs-section">

{:#creating-a-branch .page-header}
# Creating a Branch
In git, the software that powers the Github client and repositories there is the idea of branches. Branches are independant lines of edits. We ask when submiting texutures **create a new branch** for each mod. To create a new branch click on the branch button which is probably labeled "master" at the moment. Create a new branch by typing a new name such as `mod-ic2-additions`. After you create the branch you can use this menu to switch between each branch.

![Creating a Branch](/assets/img/contributing-to-the-modded-repos/branch-1.png)


{:.alert .alert-danger}
**Warning:** It is important to note that when adding textures to your local folder that you do so with the correct branch selected. As show below the client shows that we are now in on the `mod-ic2-additions` branch, and not the `master` one.

![Ensuring Correct Branch](/assets/img/contributing-to-the-modded-repos/branch-2.png)

</section>
<section markdown="1" class="bs-docs-section">

{:#commiting-textures .page-header}
# Commiting Textures
Once a specific branch has been created for the textures that you want to submit it is easy to add the files. Browse to where the repository is stored on the disk. For me it is `~/My Documents/Github/`. In the respected repository folder, in my case `/Modded-1.7.x/`, you should see the exact folder structure from the Github site. You can find/create the respective mod folder and add your texture.

When adding textures to the modded folder simply copy *only* that mod specifc files to that folder. Each folder should have only the textures relating to that mod. The folder naming convention for the root folders is the name of the mod with underscores for spaces.

{:#commiting}
### Commiting
Once you have edited, added, or removed the textures for the mod, it is time to record the changes made. This is called "commiting". You create a record that records exactly what files where changed or removed. This is called a "commit". To create a commit head back to the Github client. In this client it should sync and show you that there are "Uncommited Changes". When this information is expanded your respected changed should be seen on the right panel.



</section>