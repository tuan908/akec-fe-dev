import {useDispatch, useSelector, useStore} from "react-redux";
import type {AppDispatch, AppStore, RootState} from "./store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
/**
 * For Per-route state using
 * @example
    'use client'
    import { useRef } from 'react'
    import { useAppSelector, useAppDispatch, useAppStore } from '../lib/hooks'
    import {
      initializeProduct,
      setProductName,
      Product,
    } from '../lib/features/product/productSlice'

    export default function ProductName({ product }: { product: Product }) {
      // Initialize the store with the product information
      const store = useAppStore()
      const initialized = useRef(false)
      if (!initialized.current) {
        store.dispatch(initializeProduct(product))
        initialized.current = true
      }
      const name = useAppSelector((state) => state.product.name)
      const dispatch = useAppDispatch()

      return (
        <input
          value={name}
          onChange={(e) => dispatch(setProductName(e.target.value))}
        />
      )
    }
 */
export const useAppStore = useStore.withTypes<AppStore>();
