import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const CreateDash=mutation({
    args:{
        messages:v.any(),
        user:v.id('users')
    },
    handler:async(ctx, args)=>{
        const dashId=await ctx.db.insert('dash',{
            messages:args.messages,
            user:args.user
        });
        return dashId;
    }
})

export const GetDash=query({
    args:{
        dashId:v.id('dash')
    },
    handler:async(ctx,args)=>{
        const result=await ctx.db.get(args.dashId);
        return result;
    }
})

export const UpdateMessages=mutation({
    args:{
        dashId:v.id('dash'),
        messages:v.any()
    },
    handler:async(ctx,args)=>{
        const result=await ctx.db.patch(args.dashId,{
            messages:args.messages
        });
        return result
    }
})

export const UpdateFiles=mutation({
    args:{
        dashId:v.id('dash'),
        files:v.any()
    },
    handler:async(ctx,args)=>{
        const result=await ctx.db.patch(args.dashId,{
            fileData:args.files
        });
        return result
    }
})

export const GetAllDash=query({
    args:{
        userId:v.id('users')
    },
    handler:async(ctx,args)=>{
        const result=await ctx.db.query('dash')
        .filter(q=>q.eq(q.field('user'),args.userId))
        .collect();

        return result;
    }
})