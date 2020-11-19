---
title: Push Notifications in React Native
date: "2020-11-19T11:57:32.169Z"
description: Guidelines and best-practices for adding push notifications in React Native applications.
---

In this post we discuss our experiences with implementing push notifications in React Native applications and highlight some best practices and gotchas you need to keep in mind in order to build a robust messaging solution.

## Introduction

An effective messaging strategy can help boost your customer engagement. Carefully timed and relevent push notifications can increate the overall user experience and customer satisfaction with your product. In this post we are going to discuss different ways you can add push notifications support to your existing React Native iOS and Android applications, issues you might encounter and possible solutions.

## Amazon Pinpoint

If you deploy your applications to AWS, like we do, a logical choice would be to leverage [Amazon Pinpoint](https://aws.amazon.com/pinpoint/) for all your messaging needs. Pinpoint is a great service which can connect you to your customers over several channels like, email, SMS, push, or voice. In addition, your marketing team can use Pinpoint to segment your audience, personalise messages, execute campaigns and monitor engagement with dashboards and reports.