---
title: An outline of my product design process
category: Product Design
date: '2019-04-13'
---
This is a guide to the process that I like to follow when designing new products or non-trivial features. Whether it's best to follow _all_ the steps or not will depend on the specific context. The opportunity assessment part is more formal and better suited to new products, whereas the rest is generally equally applicable to features as well as new products.

## Opportunity assessment
I got a lot of value out of the book [INSPIRED: How to Create Tech Products Customers Love](https://svpg.com/inspired-how-to-create-products-customers-love/) by Marty Cagan, He provides a great framework for how to frame opportunities:
1. Exactly what problem will this solve? (value proposition)
2. For whom do we solve that problem? (target market)
3. How big is the opportunity? (market size)
4. What alternatives are out there? (competitive landscape)
5. Why are we best suited to pursue this? (our differentiator)
6. Why now? (market window)
7. How will we get this product to market? (go-to-market strategy)
8. How will we measure success? (metrics/revenue strategy)
9. What factors are critical to success? (solution requirements)

These are not questions that a product designer should have to answer by themselves, but being equipped with this sort of information can really help you make more relevant and informed design decisions.

Often times however a framework like the one above can be overkill, especially for a small feature or an existing product. There are a few simple questions that I always like to try and answer before starting design work: 

- What is the problem to the user?
- Who is the user that is affected? (persona)
- How do we know it's a real problem?
- What is the risk to the business if we don't solve it?

## Propose a solution

**Create a simple product specification, a simple product spec. is more likely to be read and maintained.** I break this document down into three categories:

1. Goal - what is the user's objective
2. List of screens or interactions and for each: what can the user see, what can the user do
3. Roadmap - how will we iterate on this, what does the MVP look like compared to v1, v2 etc.

## Prototype

The end goal of this stage is to create high-fidelity interactive prototypes that can be tested by users. A good prototype is equivalent to “measure twice, cut once” as it greatly decreases the likelihood of having to do costly post-deployment redesigns.

Your prototype should serve as:
- A resource for user testing to validate the product idea
- A blueprint for the engineering team
- A guideline for the QA team

How you arrive at the high-fidelity prototype is largely down to designer preference and feature/product complexity. If I have a good design system at hand and the complexity is low I might feel confident to jump straight into the high-fidelity design work. If complexity is high then I might start with flowcharts, sketches, mind maps, greyscale wireframes or any other combination of techniques that I feel is suitable.


![](/images/wireframe-to-final.png)

## Validate the prototype

**User Validation**

Ideally you want real users to test the prototype who are as close to your target market profile as possible and you want to be able to see them interacting with what you've designed, whether via screenshare or by sitting next to them. I find that an initial round of 3 -5 users is sufficient to identify any glaring issues. If there are some real blockers that those testers all pick up on then you want to try and resolve those before doing anymore tests, which is why I'm hesitant to schedule a large group of testers initially.


**Engineer validation**

There's no point designing a fantastic solution if you just don't have the technical capacity to implement it so somebody on your engineering team needs to answer the question: do we have the capability to build it?

## Conclusion

There's plenty of details that I intentionally left out of this article for brevity. This is just an outline of some of the steps you may want to take to ensure you are following a thorough and considerate design process. I hope it's useful.
