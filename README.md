# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
## usersテーブル
|column|Type|Options|
|------|----|-------|
|name|string|null: false,add_index,unique: true|

### Association
- has_many :messages
- has_many :groups, through: :members
- has_many :members

## massages ## membersテーブル

|column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル
|column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|------|
|group_id|integer|null: false|
|user_id|integer|null: false|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル
|column|Type|Options|
|------|----|-------|
|name|string|null: false,add_index,unique: true|

### Association
- has_many :messages
- has_many :users, through: :members
- has_many :members
