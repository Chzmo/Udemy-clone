/*
  Warnings:

  - Added the required column `categotyId` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "tittle" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Course" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "tittle" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "datePublished" DATETIME NOT NULL,
    "price" REAL NOT NULL DEFAULT 0,
    "revisedPrice" REAL NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "categotyId" INTEGER NOT NULL,
    CONSTRAINT "Course_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Course_categotyId_fkey" FOREIGN KEY ("categotyId") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Course" ("authorId", "createdAt", "datePublished", "description", "id", "price", "revisedPrice", "thumbnail", "tittle", "updatedAt") SELECT "authorId", "createdAt", "datePublished", "description", "id", "price", "revisedPrice", "thumbnail", "tittle", "updatedAt" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
