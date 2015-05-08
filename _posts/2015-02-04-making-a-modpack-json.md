---
layout: content_small_header
title: "Making Modpack.json Files"
title_sub: "How to create a modpack.json and what is it used for"
author: "artdude543"
categories: modded
subject: "In this article we explain what the modpack.json files purpose is and how it ties into the modded system. We cover how to create such a file, and the guidelines to adding to the repo. A detailed parameter list is included"
---

<section markdown="1" class="bs-docs-section">

{:#overview .page-header}
# Overview

Our server scripts use `modpack.json` files to compile downloads for a modpack. Each modpack has a respective `modpack.json` in the repository that represents it. Each json holds information which the server scripts need to build a download for the pack, in the future we plan on making it easier to create these files. This system enables us to offer broader support of downloads, to save the user from downloading our large _Universal Downloads_, which contains all the mod patches we offer.

</section>
<section markdown="1" class="bs-docs-section">

{:#about .page-header}
# About
The `modpack.json` system allows us to have the system 99% automated. From this simple file the downloads are updated and distributing. We will be accepting any type of modpack to be added but the json file submitted must be correct and accurate to the latest build of the modpack. Failing to do so will result in the pull request being closed and for you to re-create/fix the problems stated by one of our staff members.

</section>
<section markdown="1" class="bs-docs-section">

{:#template .page-header}
# Template

{% highlight json %}
{
  "name" : "",
  "version" : "",
  "type" : "",
  "provider" : "",
  "enabled" : true,
  "is_public" : true,
  "minecraft" : [
  ],
  "resourcepacks" : [
  ],
  "mods" : [
  ]
}
{% endhighlight %}

The json template above can be used for creating a file. Where the `modpack.json` will be called `modpack-name.json` making sure you replace spaces with underscores. Once you have created the file you can send a pull request to the [repository](https://github.com/Soartex-Modded/Modded-Server-Data) to enable the server to create the download for the modpack. When creating the file ensure that you add all the mods (prewfered which do have textures, you can check inside the mod file in the following location to see if it has textures `assets/modid/textures/`) Also add the mods even if Soartex does not support it, this way when we do add support the patch will be included without having to edit the json file.

If you are submitting a `modpack.json` please help us to maintain it from updating the mod listing and the version support. This way we can ensure that the download supports the latest version of the modpack and that the staff can concentrate on creating more texture support and applications for Soartex.

{:#example}
## Example

{% highlight json %}
{
  "name":"My Amazing Modpack",
  "version":"0.10",
  "type":"modded_standard",
  "provider":"technic",
  "enabled":true,
  "is_public": true,
  "minecraft":[
    "1.7.x"
  ],
  "resourcepacks":[
    "fanver"
  ],
  "mods":[
    "AppleCore",
    "Artifacts",
    "Backpack",
    "BiblioCraft",
    "BiomesOPlenty",
    "chisel",
    "CoFHCore",
    "CreeperSpecies",
    "StevesFactoryManager",
    "Sync",
    "TConstruct",
    "ThermalExpansion",
    "ThermalFoundation",
    "TurkeyUtil",
    "waila",
    "wildcaves3"
  ]
}
{% endhighlight %}

{:#parameter-breakdown}
## Parameter Breakdown

{:.table .table-bordered}
| Parameter | Type | Explanation |
|-----------|-------------|
| name | string | This is the name of the modpack, please use the official naming for the modpack |
| version | string | This the latest version of the modpack in which you are creating the file for and for when the modpack updates. This should be prefixed with a “v” for the sake of prettiness. |
| type | string | This the type of download of which you want to create. You can find the support types [here](#modpack-type) |
| provider | string | This is the provider name who provides the modpack. You can find the support providers [here](#modpack-provider) |
| enabled | boolean | This value determines if the modpack gets complied when the server scripts are run. |
| is_public | boolean | This value determines is the modpack download is displayed on the [soartex.net](http://soartex.net/downloads/modpacks/) website |
| minecraft | array | This is an array of the Minecraft versions the modpack supports. You can find the support minecraft versions [here](#minecraft-versions) |
| resourcepacks | array | This is an array of the resourcepacks for the modpack to be compiled against. You can find the support resourcepacks [here](#resourcepacks) |
| mods | array | This is an array of the mods to be included into the modpack compile, this uses the modid from the mod to be added. You can find a list of pre-defined mods [here](#mods-listing) |

</section>
<section markdown="1" class="bs-docs-section">

{:#submitting-your-file .page-header}
# Submitting Your File

Once you have created your `modpack.json` clone our repository, then add the file to the `/packs/` folder. It is essential that the file is in that folder otherwise the server scripts will not detect the file to compile the modpack download. Lastly push your changes and then submit a pull-request back to our repository to get the file added. Once a member of staff has checked the file they will acppet the request and the file will be added to our repository. Repeat this process when you want to add a new mod to the file or to bump the version.

If however you wish for assistance with submitting the file you can email us for [support](mailto:support@soartex.net)

</section>
<section markdown="1" class="bs-docs-section">

{:#help .page-header}
# Help

Below is some helpful information on what some of the variables mean and what values are valid to use when creating a `modpack.json` file.

{:#modpack-type}
### Modpack Type

Our server script supports 2 modpack types currently but the one you would use for creating support for a modpack would be `modded_standard`. Modded standard tells the script that you are wanting to create a download with certain patches which is defined in the "mods" array. The other type is `modded_universal` which will more than often be used by staff members to create "Universal" downloads, these are basically downloads which contain all the modpack patches we offer on our [modded repositories](https://github.com/Soartex-Modded/).

{:#modpack-provider}
### Modpack Provider

The server script will support an array of launchers to host downloads for but we have refined this down to 3, which we will support officially for downloads. The supported launchers are as followed;

{:.table .table-bordered}
| Launcher Name | Script Value |
|-----------|-------------|
| ATLauncher | atlauncher |
| Feed The Beast | ftb |
| Technic Launcher | technic |
| Curse Client | curse |

{:#minecraft-versions}
### Minecraft Versions

Soartex currently supports 1.6.x, 1.7.x for modpack compiles, 1.8.x support will be added as soon as more mods port over to the new version.

{:#resourcepacks}
### Resourcepacks

The server script currently supports the following resourcepacks;

{:.table .table-bordered}
| Name | Script Value |
|-----------|-------------|
| Soartex Fanver | fanver |
| Invictus | invictus |

{:#mods-listing}
### Mods Listing

This is a pre-defined listing of mods that you can use to add to your `modpack.json` file. This is not a complete listing and is always work in progress as new mods are adding the mods to the listing.

{:.table .table-bordered}
| Mod Name | Mod ID |
|-----------|-------------|
| Advanced Genetics | advancedgenetics |
| Another One Bites The Dust | aobd |
| AppleCore | AppleCore |
| Applied Energistics 2 | appliedenergistics2 |
| Aroma1997s Core | Aroma1997Core |
| Aroma1997s Dimension | Aroma1997sDimension |
| Ars Magica 2 | arsmagica2 |
| Artifacts | Artifacts |
| AutoPackager | autopackager |
| Backpack Mod | Backpack |
| Baubles | Baubles |
| Better Chests | BetterChests |
| Better Furnaces | FLabsBF |
| Better Storage | betterstorage |
| BiblioCraft | BiblioCraft |
| Big Reactors | BigReactors |
| Binnies Mods | Binnies_Mods |
| BiomesOPlenty | BiomesOPlenty |
| Blood Magic | AWWayofTime |
| Botania | Botania |
| Buildcraft | Buildcraft |
| CarpentersBlocks | CarpentersBlocks |
| Chicken Chunks | ChickenChunks |
| Chisel 2 | chisel |
| CoFHCore | CoFHCore |
| Compact Machines | compactmachines |
| Compact Solar Arrays | CompactSolars |
| ComputerCraft | ComputerCraft |
| CreeperSpecies | CreeperSpecies |
| CrystalWing | CrystalWing |
| Damage Indicators | DamageIndicatorsMod |
| DrZharks Mo-Creatures Mod | MoCreatures |
| Dimensional Anchors | DimensionalAnchors |
| Divine RPG | divinerpg |
| Electrical Age | Eln |
| Elemental Creepers | ElementalCreepers |
| Enchiridion | Enchiridion |
| EnderIO | EnderIO |
| EnderStorage | EnderStorage |
| Enhanced Portals 3 | enhancedportals |
| Enviro Mine | enviromine |
| Ex Astris | exastris |
| Ex Nihilo | exnihilo |
| ExtraCells | extracells |
| Extra Utilities | ExtraUtilities |
| ExtraTiC | ExtraTiC |
| Factorization | factorization |
| Falling Meteors | meteors |
| Flaxbeards SteamCraft | Steamcraft |
| Forbidden Magic | ForbiddenMagic |
| Forestry | Forestry |
| Forge Multipart | ForgeMultipart |
| Galacticraft 3 | Galacticraft |
| Ganys Mods | Ganys_Mods |
| Geostrata | geostrata |
| GraveStone | gravestone |
| GregTech Addon | gregtech_addon |
| Fossils Archaeology Revival | fossil |
| Hardcore Ender Expansion | HardcoreEnderExpansion |
| Hardcore Questing | HardcoreQuesting |
| IguanaTweaks Tinkers Construct | IguanaTweaksTConstruct |
| IndustrialCraft 2 | IC2 |
| IC2 Advanced Machines Addon | AdvancedMachines |
| IC2 Advanced Solar Panel | AdvancedSolarPanel |
| Immibis Microblocks | ImmibisMicroblocks |
| InfiniteInvo | infiniteinvo |
| Inventory Tweaks | inventorytweaks |
| Iron Chests | IronChest |
| JABBA Barrels | JABBA |
| JourneyMap | journeymap |
| Lava Monsters | LavaMonsters |
| Lucky Blocks | luckyblock |
| Magic Bees | MagicBees |
| Magical Crops | magicalcrops |
| Mariculture | Mariculture |
| Mekanism | Mekanism |
| Metallurgy 4 | Metallurgy |
| Mantle | Mantle |
| MineFactory Reloaded | MineFactoryReloaded |
| More Pistons | MorePistons |
| Morph | Morph |
| Multi Page Chest | MultiPageChest |
| Mystcraft | Mystcraft |
| Natura | Natura |
| Necromancy | necromancy |
| Nether Ores | NetherOres |
| Not Enough Items | NotEnoughItems |
| OpenBlocks | OpenBlocks |
| OpenMods | OpenMods |
| Pams Harvestcraft | harvestcraft |
| Pams Weee! Flowers | weeeflowers |
| Peacefulpack | peacefulpack |
| Pet Bat | PetBat |
| Practicalities | jotatosPracticalities |
| PneumaticCraft | PneumaticCraft |
| ProjectE | ProjectE |
| ProjectRed | projectred |
| QuarryPlus | QuarryPlus |
| Railcraft | Railcraft |
| Random Things | RandomThings |
| ReactorCraft | ReactorCraft |
| RotaryCraft | RotaryCraft |
| SimpleOres 2 | simpleores |
| SmartMoving | SmartMoving |
| Special Mobs | SpecialMobs |
| Statues | Statues |
| Steve's Carts 2 | StevesCarts |
| Steves Factory Manager | StevesFactoryManager |
| Sync | Sync |
| Thaumcraft 4 | Thaumcraft |
| Thaumic Energistics | thaumicenergistics |
| Thaumic Machina | ThaumicMachina |
| Thaumic Tinkerer | ThaumicTinkerer |
| Thermal Expansion | ThermalExpansion |
| Thermal Foundation | ThermalFoundation |
| Tinkers Construct | TConstruct |
| Tinkers Mechworks | TMechworks |
| Tinkers Steelwork | TSteelworks |
| Too Many Items | toomanyitems |
| The Twilight Forest | TwilightForest |
| TurkeyUtil | TurkeyUtil |
| Underground Biomes Constructs | UndergroundBiomes |
| Waila | waila |
| Wild Caves 3 | wildcaves3 |
| Wireless Redstone CBE | WR-CBE |
| Witchery | witchery |

</section>