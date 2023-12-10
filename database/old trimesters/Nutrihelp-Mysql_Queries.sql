CREATE DATABASE nutrihelp;

USE nutrihelp;

-- Creating Tables
CREATE TABLE `Profile` (
    `profileID` VARCHAR(255) NOT NULL,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `dateOfBirth` DATE NOT NULL,
    `gender` VARCHAR(255) NULL,
    `weight` DOUBLE NULL,
    `height` DOUBLE NULL,
    `activityLevel` INT NULL,
    `allergies` JSON NULL,
    `healthConditions` JSON NULL,
    `dislikes` JSON NULL,
    `dietReq` JSON NULL,
    `meal` JSON NULL,
    `textSize` VARCHAR(255) NULL,
    `colorBlind` TINYINT(1) NOT NULL,
    `voiceOver` TINYINT(1) NOT NULL,
    `access` JSON NULL,
    `notificationPreference` JSON NULL,
    `nutritionPlan` JSON NULL,
    `dailyIntake` JSON NULL,
    PRIMARY KEY (`profileID`)
);

CREATE TABLE `User` (
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `profileID` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`email`)
);

CREATE TABLE `Access` (
    `id` INT NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `mobile` VARCHAR(255) NOT NULL,
    `category` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `weeklyReport` TINYINT(1) NOT NULL,
    `groceryList` TINYINT(1) NOT NULL,
    `healthReport` TINYINT(1) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `Notification` (
    `id` VARCHAR(255) NOT NULL,
    `category` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `active` TINYINT(1) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `HealthCondition` (
    `id` INT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `common` TINYINT(1) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `Ingredient` (
    `id` INT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `IngredientAllergy` (
    `ingredientID` INT NOT NULL,
    `allergy` VARCHAR(255) NOT NULL,
    FOREIGN KEY (`ingredientID`) REFERENCES `Ingredient`(`id`),
    PRIMARY KEY (`ingredientID`)
);

CREATE TABLE `Meal` (
    `id` INT NOT NULL,
    `mealName` VARCHAR(255) NOT NULL,
    `mealType` VARCHAR(255) NOT NULL,
    `keywords` JSON NULL,
    `description` JSON NULL,
    `weight` VARCHAR(255) NULL,
    `servings` INT NULL,
    `servingSize` VARCHAR(255) NULL,
    `ingredients` JSON NOT NULL,
    `recipe` VARCHAR(255) NULL,
    `nutrition` JSON NOT NULL,
    `images` JSON NULL,
    `thumbnail` VARCHAR(255) NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `FoodCategory` (
    `id` INT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `FoodCategoryIngredient` (
    `foodCategoryID` INT NOT NULL,
    `ingredientID` INT NOT NULL,
    FOREIGN KEY (`foodCategoryID`) REFERENCES `FoodCategory`(`id`),
    FOREIGN KEY (`ingredientID`) REFERENCES `Ingredient`(`id`),
    PRIMARY KEY (`foodCategoryID`, `ingredientID`)
);

CREATE TABLE `Nutrition` (
    `id` VARCHAR(255) NOT NULL,
    `calories` INT NOT NULL,
    `carbohydrate` INT NOT NULL,
    `protein` INT NOT NULL,
    `fat` INT NOT NULL,
    `saturatedFat` INT NOT NULL,
    `sodium` INT NOT NULL,
    `cholesterol` INT NOT NULL,
    `vitaminD` INT NULL,
    `vitaminB6` INT NULL,
    `vitaminC` INT NULL,
    `vitaminB12` INT NULL,
    `iron` INT NULL,
    `fibre` INT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `NutritionPlan` (
    `id` VARCHAR(255) NOT NULL,
    `nutrition` JSON NOT NULL,
    `breakfast` JSON NULL,
    `lunch` JSON NULL,
    `dinner` JSON NULL,
    `dessert` JSON NULL,
    PRIMARY KEY (`id`)
);

-- general structure for adding foreign key constrants 


-- Add foreign key constraint to `Profile` table for `allergies`
ALTER TABLE `Profile` 
ADD CONSTRAINT `fk_Profile_allergies` 
FOREIGN KEY(`allergies`) 
REFERENCES `Table 11` (`...`);

-- Add foreign key constraint to `Profile` table for `healthConditions`
ALTER TABLE `Profile` 
ADD CONSTRAINT `fk_Profile_healthConditions` 
FOREIGN KEY(`healthConditions`) 
REFERENCES `HealthCondition` (`id`);

-- Add foreign key constraint to `Profile` table for `dislikes`
ALTER TABLE `Profile` 
ADD CONSTRAINT `fk_Profile_dislikes` 
FOREIGN KEY(`dislikes`) 
REFERENCES `Ingredient` (`id`);

-- Add foreign key constraint to `Profile` table for `dietReq`
ALTER TABLE `Profile` 
ADD CONSTRAINT `fk_Profile_dietReq` 
FOREIGN KEY(`dietReq`) 
REFERENCES `FoodCategory` (`id`);

-- Add foreign key constraint to `Profile` table for `access`
ALTER TABLE `Profile` 
ADD CONSTRAINT `fk_Profile_access` 
FOREIGN KEY(`access`) 
REFERENCES `Access` (`id`);

-- Add foreign key constraint to `Profile` table for `notificationPreference`
ALTER TABLE `Profile` 
ADD CONSTRAINT `fk_Profile_notificationPreference` 
FOREIGN KEY(`notificationPreference`) 
REFERENCES `Notification` (`id`);

-- Add foreign key constraint to `Profile` table for `nutritionPlan`
ALTER TABLE `Profile` 
ADD CONSTRAINT `fk_Profile_nutritionPlan` 
FOREIGN KEY(`nutritionPlan`) 
REFERENCES `NutritionPlan` (`id`);

-- Add foreign key constraint to `Profile` table for `dailyIntake`
ALTER TABLE `Profile` 
ADD CONSTRAINT `fk_Profile_dailyIntake` 
FOREIGN KEY(`dailyIntake`) 
REFERENCES `Nutrition` (`id`);

-- Add foreign key constraint to `User` table for `profileID`
ALTER TABLE `User` 
ADD CONSTRAINT `fk_User_profileID` 
FOREIGN KEY(`profileID`) 
REFERENCES `Profile` (`profileID`);

-- Add foreign key constraint to `Ingredient` table for `allergies`
ALTER TABLE `Ingredient` 
ADD CONSTRAINT `fk_Ingredient_allergies` 
FOREIGN KEY(`allergies`) 
REFERENCES `Table 11` (`...`);

-- Add foreign key constraint to `Meal` table for `ingredients`
ALTER TABLE `Meal` 
ADD CONSTRAINT `fk_Meal_ingredients` 
FOREIGN KEY(`ingredients`) 
REFERENCES `Ingredient` (`id`);

-- Add foreign key constraint to `Meal` table for `nutrition`
ALTER TABLE `Meal` 
ADD CONSTRAINT `fk_Meal_nutrition` 
FOREIGN KEY(`nutrition`) 
REFERENCES `Nutrition` (`id`);

-- Add foreign key constraint to `FoodCategory` table for `ingredients`
ALTER TABLE `FoodCategory` 
ADD CONSTRAINT `fk_FoodCategory_ingredients` 
FOREIGN KEY(`ingredients`) 
REFERENCES `Ingredient` (`id`);

-- Add foreign key constraint to `NutritionPlan` table for `nutrition`
ALTER TABLE `NutritionPlan` 
ADD CONSTRAINT `fk_NutritionPlan_nutrition` 
FOREIGN KEY(`nutrition`) 
REFERENCES `Nutrition` (`id`);

-- Add foreign key constraint to `NutritionPlan` table for `breakfast`
ALTER TABLE `NutritionPlan` 
ADD CONSTRAINT `fk_NutritionPlan_breakfast` 
FOREIGN KEY(`breakfast`) 
REFERENCES `Meal` (`id`);

-- Add foreign key constraint to `NutritionPlan` table for `lunch`
ALTER TABLE `NutritionPlan` 
ADD CONSTRAINT `fk_NutritionPlan_lunch` 
FOREIGN KEY(`lunch`) 
REFERENCES `Meal` (`id`);

-- Add foreign key constraint to `NutritionPlan` table for `dinner`
ALTER TABLE `NutritionPlan` 
ADD CONSTRAINT `fk_NutritionPlan_dinner` 
FOREIGN KEY(`dinner`) 
REFERENCES `Meal` (`id`);

-- Add foreign key constraint to `NutritionPlan` table for `dessert`
ALTER TABLE `NutritionPlan` 
ADD CONSTRAINT `fk_NutritionPlan_dessert` 
FOREIGN KEY(`dessert`) 
REFERENCES `Meal` (`id`);



-- Indexing
-- Create index on `Profile` table for `firstName`
CREATE INDEX idx_Profile_firstName ON `Profile` (`firstName`);

-- Create index on `Profile` table for `lastName`
CREATE INDEX idx_Profile_lastName ON `Profile` (`lastName`);

-- Create index on `HealthCondition` table for `name`
CREATE INDEX idx_HealthCondition_name ON `HealthCondition` (`name`);

-- Create index on `Ingredient` table for `name`
CREATE INDEX idx_Ingredient_name ON `Ingredient` (`name`);

-- Create index on `Meal` table for `mealName`
CREATE INDEX idx_Meal_mealName ON `Meal` (`mealName`);

-- Create index on `Meal` table for `mealType`
CREATE INDEX idx_Meal_mealType ON `Meal` (`mealType`);

-- Create index on `FoodCategory` table for `name`
CREATE INDEX idx_FoodCategory_name ON `FoodCategory` (`name`);


